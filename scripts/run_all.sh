#!/usr/bin/env bash

set -o errexit
set -o errtrace
set -o nounset
set -o pipefail

pkill -9 -f shopsy || echo "Failed to kill any apps"

docker compose kill || echo "No docker containers are running"

echo "Running infra"
docker compose up -d grafana-server prometheus-server tracing-server

echo "Running apps"
mkdir -p target
nohup java -jar shopsy-config-server/target/*.jar --server.port=8888 > target/config-server.log 2>&1 &
echo "Waiting for config server to start"
sleep 20
nohup java -jar shopsy-discovery-server/target/*.jar --server.port=8761 > target/discovery-server.log 2>&1 &
echo "Waiting for discovery server to start"
sleep 20
nohup java -jar shopsy-user-service/target/*.jar --server.port=8081 > target/user-service.log 2>&1 &
nohup java -jar shopsy-order-service/target/*.jar --server.port=8082 > target/order-service.log 2>&1 &
nohup java -jar shopsy-product-service/target/*.jar --server.port=8083 > target/product-service.log 2>&1 &
nohup java -jar shopsy-cart-service/target/*.jar --server.port=8085 > target/cart-service.log 2>&1 &
nohup java -jar shopsy-payment-service/target/*.jar --server.port=8086 > target/payment-service.log 2>&1 &
nohup java -jar shopsy-ai-service/target/*.jar --server.port=8084 > target/ai-service.log 2>&1 &
nohup java -jar shopsy-api-gateway/target/*.jar --server.port=8080 > target/gateway-service.log 2>&1 &
nohup java -jar shopsy-admin-server/target/*.jar --server.port=9090 > target/admin-server.log 2>&1 &
echo "Waiting for apps to start"
sleep 60

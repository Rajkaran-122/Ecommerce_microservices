#!/bin/bash
docker tag ${REPOSITORY_PREFIX}/shopsy-config-server ${REPOSITORY_PREFIX}/shopsy-config-server:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-discovery-server ${REPOSITORY_PREFIX}/shopsy-discovery-server:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-api-gateway ${REPOSITORY_PREFIX}/shopsy-api-gateway:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-order-service ${REPOSITORY_PREFIX}/shopsy-order-service:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-product-service ${REPOSITORY_PREFIX}/shopsy-product-service:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-user-service ${REPOSITORY_PREFIX}/shopsy-user-service:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-cart-service ${REPOSITORY_PREFIX}/shopsy-cart-service:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-payment-service ${REPOSITORY_PREFIX}/shopsy-payment-service:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-admin-server ${REPOSITORY_PREFIX}/shopsy-admin-server:${VERSION}
docker tag ${REPOSITORY_PREFIX}/shopsy-ai-service ${REPOSITORY_PREFIX}/shopsy-ai-service:${VERSION}

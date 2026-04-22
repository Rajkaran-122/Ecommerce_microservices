#!/bin/bash
docker push ${REPOSITORY_PREFIX}/shopsy-config-server:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-discovery-server:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-api-gateway:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-order-service:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-product-service:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-user-service:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-cart-service:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-payment-service:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-admin-server:${VERSION}
docker push ${REPOSITORY_PREFIX}/shopsy-ai-service:${VERSION}

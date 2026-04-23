# Shopsy - Enterprise E-Commerce Platform (Backend Microservices)

A microservices-based e-commerce platform built with Spring Boot, Spring Cloud, Spring AI, and React + TypeScript.

**Proprietary Software** - Copyright (c) 2026 Digital Metro. All Rights Reserved.

---

## Architecture Overview

Shopsy is a distributed e-commerce platform composed of 10 independently deployable microservices, a modern React storefront, and a comprehensive observability stack.

### System Architecture

```
                    +-------------------+
                    |   Shopsy Frontend |
                    |  (React + TS)     |
                    +--------+----------+
                             |
                    +--------v----------+
                    |    API Gateway     |
                    |  (Spring Cloud)    |
                    +--------+----------+
                             |
         +-------------------+-------------------+
         |         |         |         |         |
    +----v---+ +---v----+ +-v------+ +v-------+ +v--------+
    | User   | |Product | | Cart   | | Order  | | Payment |
    |Service | |Service | |Service | |Service | | Service |
    +--------+ +--------+ +--------+ +--------+ +----------+
         |         |         |         |         |
    +----v---------v---------v---------v---------v----------+
    |              Service Discovery (Eureka)               |
    +-------------------------------------------------------+
         |                                       |
    +----v----+                            +-----v------+
    | Config  |                            |     AI     |
    | Server  |                            |  Shopping  |
    +---------+                            |  Assistant |
                                           +------------+
```

### Microservices

| Service | Port | Description |
|---------|------|-------------|
| **shopsy-api-gateway** | 8080 | API routing, rate limiting, circuit breakers, CORS |
| **shopsy-user-service** | 8081 | User registration, authentication, profiles, addresses |
| **shopsy-product-service** | 8083 | Product catalog, categories, search, reviews |
| **shopsy-cart-service** | 8085 | Shopping cart management, wishlist |
| **shopsy-order-service** | 8082 | Order processing, tracking, history |
| **shopsy-payment-service** | 8086 | Payment processing, transactions, refunds |
| **shopsy-ai-service** | 8084 | AI-powered shopping assistant (Spring AI + OpenAI) |
| **shopsy-config-server** | 8888 | Centralized configuration management |
| **shopsy-discovery-server** | 8761 | Eureka service registry |
| **shopsy-admin-server** | 9090 | Spring Boot Admin monitoring |

### Infrastructure Services

| Service | Port | Description |
|---------|------|-------------|
| Zipkin (Tracing) | 9411 | Distributed request tracing |
| Prometheus | 9091 | Metrics collection |
| Grafana | 3030 | Metrics dashboards |

---

## Tech Stack

### Backend
- **Java 17** with Spring Boot 4.0.1
- **Spring Cloud 2025.1.0** (Gateway, Config, Eureka, Circuit Breaker)
- **Spring AI** with OpenAI integration
- **Spring Data JPA** with Hibernate
- **Spring Security** for authentication
- **Resilience4j** for fault tolerance
- **Micrometer** + Open Telemetry for observability
- **HSQLDB** (dev) / **MySQL 8.4** (production)

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router v6** for client-side routing
- **Vanilla CSS** with custom properties (design tokens)
- **Responsive design** - mobile-first approach

### DevOps
- **Docker** + Docker Compose
- **GitHub Actions** CI/CD pipeline
- **Prometheus** + **Grafana** monitoring
- **Zipkin** distributed tracing

---

## FAANG Engineering Qualities

| Quality | Implementation |
|---------|---------------|
| Microservices | 10 independently deployable, loosely-coupled services |
| Domain-Driven Design | Clean bounded contexts per service |
| Type Safety | TypeScript frontend, strongly-typed Java backend |
| Fault Tolerance | Resilience4j circuit breakers with fallback methods |
| Service Discovery | Dynamic Eureka-based registry |
| Centralized Config | Spring Cloud Config (12-factor compliance) |
| Distributed Tracing | Full request lifecycle tracking via Zipkin |
| Observability | Prometheus metrics + Grafana dashboards |
| API Gateway | Rate limiting, load balancing, CORS management |
| AI Integration | Spring AI shopping assistant with OpenAI |
| Health Monitoring | Spring Boot Actuator on every service |
| Containerization | Docker multi-stage builds |
| CI/CD | GitHub Actions automated build pipeline |
| Security | Spring Security, BCrypt, input validation |

---

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 18+ and npm
- Docker and Docker Compose (for containerized deployment)
- Maven 3.9+

### Running Locally (Without Docker)

1. **Start infrastructure services first** (order matters):
   ```bash
   # 1. Config Server
   cd shopsy-config-server
   ../mvnw spring-boot:run

   # 2. Discovery Server
   cd shopsy-discovery-server
   ../mvnw spring-boot:run
   ```

2. **Start business services** (any order):
   ```bash
   cd shopsy-user-service && ../mvnw spring-boot:run
   cd shopsy-product-service && ../mvnw spring-boot:run
   cd shopsy-cart-service && ../mvnw spring-boot:run
   cd shopsy-order-service && ../mvnw spring-boot:run
   cd shopsy-payment-service && ../mvnw spring-boot:run
   cd shopsy-ai-service && ../mvnw spring-boot:run
   ```

3. **Start API Gateway**:
   ```bash
   cd shopsy-api-gateway && ../mvnw spring-boot:run
   ```

4. **Start Frontend**:
   ```bash
   cd shopsy-frontend
   npm install
   npm run dev
   ```

5. **Access the application**:
   - Storefront: http://localhost:5173
   - API Gateway: http://localhost:8080
   - Eureka Dashboard: http://localhost:8761
   - Admin Server: http://localhost:9090

### Running with Docker Compose

```bash
# Build all images
./mvnw clean install -P buildDocker

# Start everything
docker compose up
```

### AI Shopping Assistant Setup

To enable the AI shopping assistant, set your OpenAI API key:

```bash
export OPENAI_API_KEY="your_api_key_here"
```

---

## Database Configuration

### Development (Default)
Uses in-memory HSQLDB - no setup required.

### Production (MySQL)
```bash
docker run -e MYSQL_ROOT_PASSWORD=shopsy -e MYSQL_DATABASE=shopsy -p 3306:3306 mysql:8.4.5
```

Start services with MySQL profile:
```bash
../mvnw spring-boot:run -Dspring.profiles.active=mysql
```

---

## Monitoring

- **Grafana Dashboard**: http://localhost:3030
- **Prometheus**: http://localhost:9091
- **Zipkin Tracing**: http://localhost:9411

---

## Project Structure

```
shopsy/
|-- shopsy-api-gateway/          # API Gateway (Spring Cloud Gateway)
|-- shopsy-user-service/         # User management & authentication
|-- shopsy-product-service/      # Product catalog & search
|-- shopsy-cart-service/         # Shopping cart & wishlist
|-- shopsy-order-service/        # Order processing & tracking
|-- shopsy-payment-service/      # Payment processing
|-- shopsy-ai-service/           # AI shopping assistant
|-- shopsy-config-server/        # Centralized configuration
|-- shopsy-discovery-server/     # Eureka service registry
|-- shopsy-admin-server/         # Admin monitoring
|-- shopsy-frontend/             # React + TypeScript storefront
|-- docker/                      # Docker configurations
|-- scripts/                     # Utility scripts
|-- docs/                        # Documentation & diagrams
|-- docker-compose.yml           # Container orchestration
|-- pom.xml                      # Root Maven POM
```

---

## License

**Proprietary** - Copyright (c) 2026 Digital Metro. All Rights Reserved.
See [LICENSE](LICENSE) for details. Unauthorized use, copying, or distribution is prohibited.

---

## Author

**Digital Metro** ([@Rajkaran-122](https://github.com/Rajkaran-122))

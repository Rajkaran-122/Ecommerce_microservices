# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | Yes       |

## Reporting a Vulnerability

If you discover a security vulnerability in Shopsy, please report it responsibly.

**DO NOT** create a public GitHub issue for security vulnerabilities.

### How to Report

1. Email: digitalmetro@proton.me
2. Subject: [SECURITY] Shopsy Vulnerability Report
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact assessment
   - Suggested fix (if any)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Resolution**: Within 30 days for critical issues

### Scope

The following are in scope for security reports:
- Authentication and authorization bypasses
- SQL injection, XSS, CSRF vulnerabilities
- Data exposure or leakage
- API security issues
- Dependency vulnerabilities

## Security Best Practices

This project implements the following security measures:
- Spring Security for authentication and authorization
- BCrypt password hashing
- CORS configuration on API Gateway
- Rate limiting on public endpoints
- Input validation on all API endpoints
- Parameterized queries (JPA/Hibernate)
- Health check endpoints secured in production
- Docker container security best practices

## Disclosure Policy

Digital Metro follows a coordinated disclosure policy. We will credit
security researchers who report valid vulnerabilities (with their permission).

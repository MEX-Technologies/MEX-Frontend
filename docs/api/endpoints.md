# API Endpoints

Complete list of MEX API endpoints.

## Current Status

**Note**: API endpoints are in development. This documentation will be updated when available.

## Planned Endpoints

### Authentication

- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh token
- `POST /auth/logout` - User logout

### Accounts

- `GET /accounts/me` - Get current account
- `PUT /accounts/me` - Update account
- `GET /accounts/balance` - Get account balance

### Payments

- `POST /payments/send` - Send payment
- `GET /payments/{id}` - Get payment details
- `GET /payments` - List payments

### Transactions

- `GET /transactions` - List transactions
- `GET /transactions/{id}` - Get transaction details

### Webhooks

- `POST /webhooks` - Create webhook
- `GET /webhooks` - List webhooks
- `DELETE /webhooks/{id}` - Delete webhook

## Response Format

All responses will be in JSON format with consistent structure.

## Error Handling

Standard HTTP status codes and error response format.

## Learn More

- Review [API overview](./overview.md)
- Check [authentication guide](./authentication.md)


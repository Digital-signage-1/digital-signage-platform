# Authentication API Specification

**Base URL**: `https://uz8akwvc0e.execute-api.us-east-1.amazonaws.com`

## Endpoints

### 1. Sign Up
**POST** `/auth/signup`
**Body**:
```json
{
  "username": "string",
  "password": "string",
  "email": "string",
  "given_name": "string",
  "family_name": "string",
  "gender": "string",
  "phone_number": "string (optional)"
}
```

### 2. Confirm Sign Up
**POST** `/auth/confirm-signup`
**Body**:
```json
{
  "username": "string",
  "confirmation_code": "string"
}
```

### 3. Login
**POST** `/auth/login`
**Body**:
```json
{
  "email": "string",
  "password": "string"
}
```
**Response**:
- `access_token`
- `id_token`
- `refresh_token`
- `expires_in`

### 4. Refresh Token
**POST** `/auth/refresh`
**Body**:
```json
{
  "refresh_token": "string"
}
```

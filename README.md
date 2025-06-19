# simple-node-api-app 

## Tech
- node.js
- express
- UUID
- Middleware (Validation & Error Handling)

###  Clone the repository

```bash
git clone https://github.com/bergerac5/simple-node-api-app.git
cd simple-node-api-app
```

### Install Dependences

```bash
npm install
```

### Start the Server

```bash
npm start
```

---

```
simple-node-api-app/
├── controllers/
│   └── user.controller.js
├── dtos/
│   └── user.dto.js
├── middlewares/
│   ├── error.middleware.js
│   └── validate.middleware.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
├── index.js
├── package.json
└── README.md
```
- **URL**: `POST http://localhost:3000/users`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:

**Description**: Create user.

```json
{
  "name": "Alice Smith",
  "email": "alice@example.com"
}
```
### response

```json
{
    "id": "5c5f7931-9a5c-48c3-aeef-63042aaeead8",
    "name": "Alice Smith",
    "email": "alice@example.com"
}
```
### wrong response

```json
{
  "name": "Alice Smith",
  "email": "aliceexample.com"
}
```

```json
{
    "error": "Email is required and must be a valid email address."
}
```
---

```json
{
  "name": "",
  "email": "aliceexample.com"
}
```

```json
{
    "error": "Name is required and must be a string."
}
```
---

- **URL**: `POST http://localhost:3000/users/:id`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:

**Description**: Search user.

### response

- **url**: `POST http://localhost:3000/users/5c5f7931-9a5c-48c3-aeef-63042aaeead8`

```json
{
    "id": "5c5f7931-9a5c-48c3-aeef-63042aaeead8",
    "name": "Alice Smith",
    "email": "alice@example.com"
}
```

### wrong id

- **url**: `POST http://localhost:3000/users/5c5f7931-9a5c-48c3-aeef-63042aad8`

```json
{
    "error": "User not found"
}
```
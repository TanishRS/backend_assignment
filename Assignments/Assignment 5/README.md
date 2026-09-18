# Express Basics Assignment

**Name:** Tanish Suvarna

**Subject:** Backend Development

**Roll Number:** 150096725082

## Steps to Run

1. Open a terminal in this folder.
2. Install the dependency:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The server runs at `http://localhost:3000`.

## Routes

| Method | Route                              | Sample response                                                             |
| ------ | ---------------------------------- | --------------------------------------------------------------------------- |
| GET    | `/`                                | `Welcome to Home Page`                                                      |
| GET    | `/about`                           | `This is About Page`                                                        |
| GET    | `/contact`                         | `This is Contact Page`                                                      |
| GET    | `/user/:name`                      | `/user/john` returns `Hello john`                                           |
| GET    | `/product/:id/:category`           | `/product/101/electronics` returns `Product ID: 101, Category: electronics` |
| GET    | `/search?name=john&role=developer` | `Name: john, Role: developer`                                               |

The server logs the request method and URL for every route, for example:

```text
GET /about
GET /user/john
GET /search?name=john&role=developer
```

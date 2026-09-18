const express = require('express');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('This is About Page');
});

app.get('/contact', (req, res) => {
  res.send('This is Contact Page');
});

app.get('/user/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get('/product/:id/:category', (req, res) => {
  const { id, category } = req.params;
  res.send(`Product ID: ${id}, Category: ${category}`);
});

app.get('/search', (req, res) => {
  const { name, role } = req.query;
  res.send(`Name: ${name}, Role: ${role}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
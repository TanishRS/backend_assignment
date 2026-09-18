const express = require('express');

const app = express();
const router = express.Router();
const PORT = 3000;

function routerLogger(req, res, next) {
  console.log(`${req.method} ${req.originalUrl} ${new Date().toLocaleString()}`);
  next();
}

router.use(routerLogger);

router.get('/students', (req, res) => {
  res.send('Students List');
});

router.get('/courses', (req, res) => {
  res.send('Courses List');
});

router.get('/faculty', (req, res) => {
  res.send('Faculty List');
});

app.use('/api', router);

function logger(req, res, next) {
  console.log(`${req.method} ${req.originalUrl} ${new Date().toLocaleString()}`);
  next();
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/contact', (req, res) => {
  res.send('Contact Information');
});

function responseTimeLogger(req, res, next) {
  const startTime = Date.now();

  res.on('finish', () => {
    const responseTime = Date.now() - startTime;
    console.log(`${req.method} ${req.originalUrl} - ${responseTime} ms`);
  });

  next();
}

app.use(responseTimeLogger);

app.get('/products', (req, res) => {
  res.send('Product List');
});

app.get('/users', (req, res) => {
  res.send('User List');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
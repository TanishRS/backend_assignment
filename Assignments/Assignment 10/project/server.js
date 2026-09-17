require('dotenv').config();
const express = require('express');
const userRouter = require('./router/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`🚀 Express server running on port ${PORT}`);
});

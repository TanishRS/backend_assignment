const express = require('express');

const app = express();
const PORT = 3000;

// Assignment 1 & Assignment 3: Route Parameters & Query Parameters
app.get('/student/:id', (req, res) => {
  const { id } = req.params;
  const { name, course } = req.query;

  if (name || course) {
    let output = `Student ID: ${id}`;
    if (name) output += `<br>Name: ${name}`;
    if (course) output += `<br>Course: ${course}`;
    return res.send(output);
  }

  res.send(`Student ID: ${id}`);
});

// Assignment 2: Query Parameters
app.get('/search', (req, res) => {
  const { name, course } = req.query;

  if (!name && !course) {
    return res.send('No search data provided.');
  }

  let output = '';
  if (name) output += `Name: ${name}`;
  if (name && course) output += '<br>';
  if (course) output += `Course: ${course}`;
  res.send(output);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
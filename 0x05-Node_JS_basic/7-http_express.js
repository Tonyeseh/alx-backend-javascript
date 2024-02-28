const express = require('express');

const app = express();
const { argv } = process;

const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(argv[2]).then((data) => {
    console.log(data);
    res.send(`This is the list of our students\n${data.join('\n')}`);
  });
});

app.listen(1245);

const app = require('http');

const { argv } = process;
const countStudents = require('./3-read_file_async');

app.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    countStudents(argv[2]).then((data) => {
      res.write(data.join('\n'));
      res.end();
    }).catch((error) => {
      res.write(error.message);
      res.end();
    });
  }
}).listen(1245);

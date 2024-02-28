const fsPromise = require('fs').promises;

async function countStudents (fileName) {
  try {
    const data = await fsPromise.readFile(fileName, 'utf8');
    const dataArray = data.split('\n').slice(1, -1).filter((row) => row !== '');

    const newArr = dataArray.map((row) => {
      return row.split(',');
    });

    const uniqueFields = new Set(newArr.map((row) => {
      return row[row.length - 1];
    }));

    console.log(`Number of students: ${dataArray.length}`);

    for (const field of uniqueFields) {
      const anotherArray = newArr.filter((row) => row[row.length - 1] === field);

      const firstNames = anotherArray.map((row) => row[0]);

      console.log(`Number of students in ${field}: ${anotherArray.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

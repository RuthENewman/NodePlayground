const fs = require('fs');

// const book = {
//   title: 'The Handmaid\'s Tale',
//   author: 'Margaret Atwood'
// }
//
// const bookJSON = JSON.stringify(book)
//
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const person = JSON.parse(dataJSON);
person.name = 'Ruth';
person.age = 30;
const personJSON = JSON.stringify(person);
fs.writeFileSync('1-json.json', personJSON);

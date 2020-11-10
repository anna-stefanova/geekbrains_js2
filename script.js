const fs = require('fs'); // библиотека для работы с файловой системой
const text = fs.readFileSync('script.js', 'utf8');
console.log(text);
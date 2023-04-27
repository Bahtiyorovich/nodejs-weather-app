const path = require('path')

// __dirname -- papka nomini qaytaradi
// __filename -- fayl nomini qaytaradi

console.log(path.basename(__dirname)) // papka nomi
console.log(path.dirname(__filename)) // filenomi
console.log(path.extname(__filename)) // fayl kengaytmasi formati

// Bu qatorda fayl haqida barcha ma'lumotlar obekt ko'rinishida qaytariladi. 
console.log(path.parse(__filename)) //  
// {
//     root: 'F:\\',
//     dir: 'F:\\Mern-Course\\nodejs-weather-app\\modules',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }

console.log(path.join(__dirname), "template", "index.html")

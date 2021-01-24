const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(`${__dirname}/productsDataBase.json`, 'utf-8'));
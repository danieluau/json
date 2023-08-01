const path = require('path')

// apenas o nome basename

console.log(path.basename(__filename));

// nome do diretorio atual 

console.log(path.dirname(__filename));

// extensao do arquivo

console.log(path.extname(__filename));

// criar objeto path

console.log(path.parse(__filename));

// juntar caminhos de arquivos

console.log(path.join(__dirname, 'test', 'test.html'));  


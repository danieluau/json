const fs = require('fs')
const path = require('path')

//criar uma pasta

fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
    return   console.log('erro: ', error)
}
else{
    console.log('pasta criada com sucesso')
    
    //criar um arquivo
    fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node', (error) => {
        if (error) {
            return console.log('error caralho; ', error);
        }
        else{
            console.log('arquivo criado')
            
            //escrever no final de um arquivo
            fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' martha my dear', (error) => {
                if (error){
                    console.log('error: ', error)
                }
                else{
                    console.log('arquivo escrito')
                    
                    // ler um arquivo
                    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
                        if (error) {
                            return console.log('erro: ', error)
                    }
                        else{
                        console.log(data)
                    }
            
                });
            
            }
            
            } );     
        
        }
    
    } ); 
    
}
});







    
















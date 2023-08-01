
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
    return   console.log('erro: ', error)
}
else{
    console.log('pasta criada com sucesso')
}
});

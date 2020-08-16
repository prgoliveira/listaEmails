const fs = require('fs')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const onlyEmail = (pessoa) => pessoa.email
//const onlyEmailRegex = new RegExp(/\S+@\w+\.\w{2,6}(\.\w{2})?/g)
 
axios.get(url).then(response =>{
    const grupo = response.data
    const emails = grupo.map(onlyEmail)
    //console.log(grupo.match(/\S+\@\w+\.\w{2,6}(\.\w{2})?/g))
    //console.log(JSON.stringify(grupo.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g)))
    fs.writeFile(__dirname + '/informacoes.json', JSON.stringify(grupo), err => {})
    fs.writeFile(__dirname + '/emails.json', JSON.stringify(emails), err => {})
})


const arquivo = __dirname + '/emails.json'
fs.readFile(arquivo, 'utf-8', (err, conteudo) =>{
    const informacao = JSON.parse(conteudo)
    console.log(informacao)
})
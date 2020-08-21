const fs = require('fs')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const http = require('http')

const getInformation = endereco =>{
    return new Promise((resolve, reject) =>{
        http.get(endereco, res =>{
            let information = ''
            res.on('data', dados =>{
                information += dados
            })

            res.on('end', () =>{
                try{
                    resolve(JSON.parse(information))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let lista = async () => {
    const funcionarios = await getInformation(url)
    return funcionarios
}

lista()
    .then(funcionario => funcionario.map(f => f.email))
    .then(emails => fs.writeFile(__dirname + '/emails.json', JSON.stringify(emails), err => {}))
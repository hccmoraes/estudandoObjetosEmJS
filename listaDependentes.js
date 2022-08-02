dadosClientes = {
    nome: 'Henrique',
    idade: 43,
    cpf: '12345612345',
    email: 'pedro@hotmail.com',
    fones: ["123456", "987654"],
    depentes: [{
    nome: 'Pedro',
    parentenco: 'filho',
    dataNasc: '14/01/2011'
    }]
}

dadosClientes.depentes.push({
    nome: "Julia",
    parantesco: 'irmã',
    dataNasc: '28/04/2003'
})

//console.log(dadosClientes)

const filhoMaisNovo = dadosClientes.depentes.filter(dependente => dependente.dataNasc === '14/01/2011')
 
console.log(filhoMaisNovo)
console.log(filhoMaisNovo[0].nome)
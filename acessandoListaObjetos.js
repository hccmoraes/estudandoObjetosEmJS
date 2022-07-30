/* Consultar um objeto utilizando uma lista de chaves relativas
a informações de clientes gerado pelo sistema e printar o resultado na tela*/

const dadosClientes = {
    nome: 'Pedro',
    idade: 11,
    cpf: '12345612345',
    email: 'pedro@hotmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(dadosClientes[chaves[0]] + dadosClientes[chaves[1]])

chaves.forEach(i => {console.log(dadosClientes[i])
    
});

console.log(dadosClientes['nome'])
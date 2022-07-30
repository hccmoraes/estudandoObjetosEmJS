//Desafio: acessar um objeto com informações de um cliente e exiber
// as informações no console.

const dadosClientes = {
    nome: 'Pedro',
    idade: 11,
    cpf: '12345612345',
    email: 'pedro@hotmail.com'
}

console.log(`Cliente: ${dadosClientes.nome} Idade: ${dadosClientes.idade} CPF: ${dadosClientes.cpf} 
email: ${dadosClientes.email}`)
console.log(dadosClientes.cpf.substring(0,3))
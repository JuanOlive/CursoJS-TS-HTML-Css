const lista = [
    {
        nome: 'jose',
        idade: 13
    },
    {
        nome: 'joao',
        idade: 23
    },
    {
        nome: 'maria',
        idade: 42
    },
    {
        nome: 'gabriela',
        idade: 75
    },
    {
        nome: 'fernanda ',
        idade: 32
    },
    {
        nome: 'andre ',
        idade: 12
    },
    {
        nome: 'heitor ',
        idade: 31
    },
    {
        nome: 'gustavo ',
        idade: 31
    },
    {
        nome: 'sandra ',
        idade: 32
    },
]

const converterObejto = (objeto) => {
    return objeto.nome
}

console.log(lista.map((objeto) => objeto.nome));
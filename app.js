'use strict'

const funcionarios = [
    {
        nome: "Maria Souza",
        cargo: "Designer",
        imagem: "maria.jpg"
    }, 
    {
        nome: "João Silva",
        cargo: "DBA",
        imagem: "joao.jpg"  
    },
    {
        nome: "Hugo Pereira",
        cargo: "FrontEnd",
        imagem: "hugo.jpg"  
    },
    {
        nome: "Ana Maria",
        cargo: "BackEnd",
        imagem: "ana.jpg"  
    }
]

const criarCards = (funcionario) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionario.imagem}`
    imagem.alt = funcionario.name

    const nome = document.createElement('h2')
    nome.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    card.appendChild(imagem)
    card.appendChild(nome)
    card.appendChild(cargo)

    return card
}

const mostrarCards = (funcionario) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCards(funcionario)
    cardContainer.appendChild(card)
}
funcionarios.forEach(mostrarCards)

let listaSorteio = []

function  adicionar(){
    const amigo = document.querySelector("#nome-amigo")
    const listaAmigos = document.querySelector('#lista-amigos')
    listaSorteio.push(amigo.value)

    const paragrafo = document.createElement("p")
    paragrafo.id = amigo.value
    paragrafo.innerText = amigo.value
    listaAmigos.appendChild(paragrafo)
    amigo.value = ""
}

function sortear(){
    const tamanho = listaSorteio.length
    if (tamanho === 0){
        alert("não é possivel sortear com a lista vazia")
        return
    }
    const escolha = Math.floor(Math.random()* tamanho)
    const amigo = listaSorteio[escolha]

    const sorteioTela = document.querySelector("#lista-sorteio")
    sorteioTela.innerText = amigo
}


    



function reiniciar(){
    const listaAmigos = document.querySelector('#lista-amigos')
    listaAmigos.innerHTML = ""
    listaSorteio = []
}

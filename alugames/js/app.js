function alterarStatus(id){
    const jogo = document.querySelector(`#game-${id}`)
    const item = jogo.querySelector("div")
    const botao = jogo.querySelector("a")

    item.classList.toggle("dashboard__item__img--rented")
    botao.classList.toggle("dashboard__item__button--return")

    if (botao.innerText === "Alugar") {
        botao.innerText = "Devolver"
    } else {
        botao.innerText = "Alugar"
    }
}
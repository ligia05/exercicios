function comprar(){
    
    const Quantidadeingresso = document.querySelector("#qtd").value
    const tipoIngresso = document.querySelector("#tipo-ingresso").value
    const LugarIngresso = document.querySelector(`#qtd-${tipoIngresso}`)

    const restantes = Number(LugarIngresso.textContent)-Number(Quantidadeingresso)
    if(restantes < 0){
        alert("numero de ingressos excedido!")
        return
    }
    
    LugarIngresso.textContent = restantes


}
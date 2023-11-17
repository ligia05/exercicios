let totalGeral;
//Variavel criada para permitir, dinamicamente, alteração dos preços no código e nos cálculos, permitindo atualização constante.
let produtos = [
    {nome: 'Fone de Ouvido', preco: 100},
    {nome: 'Celular', preco: 1400},
    {nome: 'Oculus VR', preco: 5000},
    {nome: 'Smartwatch', preco: 1200}

];
//as duas linhas abaixo "onchange" e a função "aplicarFoco()" deixam o cursor na aba quantidade automaticamente.
document.getElementById('produto').onchange = aplicarFoco; //Essa manda o cursor sempre que o usuário escolher um produto.
//aplicarFoco(); //essa já deixa o foco na quantidade assim que a página é carregada.
limpar();
//Função criada para que a alteração dos preços seja aplicada na exibição HTML e o usuário possa ve-la.
function atualizarOpcoes() {
    let selectProduto = document.getElementById('produto');
    selectProduto.innerHTML = '';



    for (let i = 0; i < produtos.length; i++) {
        selectProduto.innerHTML += `<option value="${produtos[i].nome} - ${transformarParaMoeda(produtos[i].preco)}">${produtos[i].nome} - ${transformarParaMoeda(produtos[i].preco)}</option>`;
    }
}
//Função responsável por colocar Fone e Celular no plural quando o usuário escolher mais de 1 Qtde dos respectivos itens.
function pluralizeProduto(nome, quantidade) {
    return (quantidade > 1 && (nome.toLowerCase() === 'celular' || nome.toLowerCase() === 'fone de ouvido')) 
        ? (nome.toLowerCase() === 'celular' ? 'Celulares' : 'Fones de Ouvido')
        : nome;
}


function adicionar() {
   //recuperar valores nome do produto, quantidade e valor 
    let produtoIndex = document.getElementById('produto').selectedIndex;
    let nomeProduto = produtos[produtoIndex].nome;
    let valorUnitario = produtos[produtoIndex].preco;
    let quantidade = document.getElementById('quantidade').value;
    nomeProduto = pluralizeProduto(nomeProduto, quantidade); //Aqui é a chamada da função adicionada acima.
   //calcular o preço, nosso subtotal 
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

  //adicionar ao carrinho  
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${transformarParaMoeda(preco)}</span>
  </section>`;
  //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = transformarParaMoeda(totalGeral);
    document.getElementById('quantidade').value = '';


}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML ="";
    document.getElementById('valor-total').textContent = transformarParaMoeda(totalGeral);

}
function transformarParaMoeda(valor){
    return valor.toLocaleString("pt-BR", {style:"currency",currency:"BRL"})
}
function aplicarFoco() {
    document.getElementById('quantidade').focus();
}
//Ao chamar a função de alteração de preços aqui, garantimos que os preços sejam atualizados sempre que os modificar-mos.
atualizarOpcoes();

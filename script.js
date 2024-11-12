const prods = document.querySelector(".conteiner");
const produtos = [
    {
        "id": 1,
        "nome": "Tênis lindão",
        "descricao": "O tênis mais lindo do mundo",
        "preco": 200.00,
        "peso":0.5,
        "frete": 0.1,
        "imagem": "https://wellifabio.github.io/produtos-cards/assets/tenis1.png"
    },
    {
        "id": 2,
        "nome": "Tênis bunitinho",
        "descricao": "O tênis mais bunitinho de hoje",
        "preco": 180.00,
        "peso":0.5,
        "frete": 0.1,
        "imagem": "https://wellifabio.github.io/produtos-cards/assets/tenis2.png"
    },
    {
        "id": 3,
        "nome": "Bruzinha",
        "descricao": "Camiseta branca simples",
        "preco": 49.90,
        "peso":0.3,
        "frete": 0.1,
        "imagem": "https://wellifabio.github.io/produtos-cards/assets/camiseta1.png"
    },
    {
        "id": 4,
        "nome": "Camiseta Preta",
        "descricao": "Camiseta pretinha básica",
        "preco": 59.90,
        "peso":0.3,
        "frete": 0.1,
        "imagem": "https://wellifabio.github.io/produtos-cards/assets/camiseta2.png"
    },
    {
        "id": 5,
        "nome": "Calsa jeans masculino",
        "descricao": "Calsa jeans masculino, azul básico",
        "preco": 49.90,
        "peso":1.2,
        "frete": 0.2,
        "imagem": "https://wellifabio.github.io/produtos-cards/assets/calsa1.png"
    },
    {
        "id": 6,
        "nome": "Calsa jeans feminino",
        "descricao": "Calsa jeans feminino, azul básico",
        "preco": 49.90,
        "peso":0.9,
        "frete": 0.2,
        "imagem": "https://wellifabio.github.io/produtos-cards/assets/calsa2.png"
    }
];

function listarProdutos() {
    let output = "";
    produtos.forEach(produto => {
        output += `
            <div class="card" style="width: 18rem;">
                <h3 class="card-title  text-center">${produto.nome}</h3>
                <img src="${produto.imagem}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text text-center">R$ ${produto.preco.toFixed(2).replaceAll('.',',')}</p>
                </div>
                <button class="btn btn-primary" onclick="modalDetalhes(${produto.id})">Detalhes</button>
            </div>
            `;
    });
    prods.innerHTML += output;
}

function modalDetalhes(id){
    //Usando a função find para encontrar o produto na lista pelo id
    let produto = produtos.find(produto => produto.id === id);
    //Obtendo os elementos do modal e mostrando ele
    const detalhes = document.getElementById("detalhes");
    detalhes.classList.remove("oculto");
    const titulo = document.getElementById("titulo");
    const img = document.getElementById("img");
    const descricao = document.getElementById("descricao");
    const peso = document.getElementById("peso");
    const preco = document.getElementById("preco");
    const frete = document.getElementById("frete");
    const total = document.getElementById("total");
    //Preenchendo os dados
    titulo.innerHTML = produto.nome;
    img.src = produto.imagem;
    descricao.innerHTML = produto.descricao;
    preco.innerHTML = "Preço R$ " + produto.preco.toFixed(2).replaceAll('.',',');
    peso.innerHTML = "Peso: " +produto.peso +"kg";
    //Fórmula para cálculo do frete (frete * peso * preço)
    let freteDinheiro = produto.frete * produto.peso * produto.preco;
    frete.innerHTML = "Frete R$ " + freteDinheiro.toFixed(2).replaceAll('.',',');
    total.innerHTML = "Total R$ " + (freteDinheiro + produto.preco).toFixed(2).replaceAll('.',',');
}

function modalMensagem(msg){
    const mensagem = document.getElementById("mensagem");
    const texto = document.getElementById("texto");
    mensagem.classList.remove("oculto");
    texto.innerHTML = msg;
}
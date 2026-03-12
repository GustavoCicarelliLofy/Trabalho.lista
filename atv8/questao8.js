function calcular() {

    let preco = Number(document.getElementById("preco").value);
    let aumento = preco * 0.15;
    let novoPreco = preco + aumento;

    document.getElementById("original").innerText = "R$ " + preco.toFixed(2);
    document.getElementById("aumento").innerText = "R$ " + aumento.toFixed(2);
    document.getElementById("novo").innerText = "R$ " + novoPreco.toFixed(2);

}
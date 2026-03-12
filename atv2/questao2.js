let precoCompra = 25;
let precoVenda = 40;
let lucro = precoVenda - precoCompra;

function calcular() {
    let total = document.getElementById("compra").value;

    document.getElementById("comprada").innerText = total;
    document.getElementById("soma").innerText = lucro * total;
}
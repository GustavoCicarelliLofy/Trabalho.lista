function calcularComissao(){

    let vendas = parseFloat(document.getElementById("vendas").value);

    let comissao = vendas * 0.05;

    let salarioFixo = 1500;

    let totalReceber = salarioFixo + comissao;

    document.getElementById("resultado").innerHTML =
        "Total de vendas: R$ " + vendas.toFixed(2) + "<br>" +
        "Comissão (5%): R$ " + comissao.toFixed(2) + "<br>" +
        "Salário fixo: R$ " + salarioFixo.toFixed(2) + "<br>" +
        "Total a receber: R$ " + totalReceber.toFixed(2);
}
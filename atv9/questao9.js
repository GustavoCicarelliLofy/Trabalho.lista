let valor_totals = document.getElementById("valor_total")
let num_parce = document.getElementById("num_parce")
let valor_parce = document.getElementById("valor_parce")


function clicos(){
    let valor_total = Number(document.getElementById("tela").value)
    let parcela = Number(document.getElementById("parcelado").value)
    let valor_parece = valor_total/parcela
    valor_totals.innerHTML = "<h3>valor total da compra: </h3>"+valor_total
    num_parce.innerHTML = "<h3> número de parcelas </h3>"+parcela
    valor_parce.innerHTML = "<h3> valor de cada parcela: </h3>"+ valor_parece


}

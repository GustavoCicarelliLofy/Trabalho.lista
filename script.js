
let totalid = document.getElementById("total")
let mediaid = document.getElementById("media")


function media_total(){
    let vlr1 = Number(document.getElementById("seg").value)
    let vlr2 = Number(document.getElementById("ter").value)
    let vlr3 = Number(document.getElementById("qua").value)
    let vlr4 = Number(document.getElementById("qui").value)
    let vlr5 = Number(document.getElementById("sex").value)
    let vlr6 = Number(document.getElementById("sab").value)
    let vlr7 = Number(document.getElementById("dom").value)
    let total
    total = vlr1 + vlr2 + vlr3 + vlr4 + vlr5 + vlr6 + vlr7
    media = total/7
    totalid.innerHTML = "<h3>total de vendas da semana é:</h3>"+total
    mediaid.innerHTML = "<h3>a média de vendas semanais é:</h3>"+media
}


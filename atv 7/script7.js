let estoque_ini =  document.getElementById("estoque_ini")
let quantidade_ven =  document.getElementById("quantidade_ven")
let estoque_rest = document.getElementById("estoque_rest")


function estoque(){
 let estoques = 120
 let produtos_vendidos = Number(document.getElementById("estoques").value)
 let resto
 
 resto = estoques - produtos_vendidos
 if (resto < 0){
    estoque_ini.innerHTML = "<h3>não há produtos suficientes no estoque. </h3>"+resto
    quantidade_ven.innerHTML = ""
    estoque_rest.innerHTML = ""

 }
 else if (resto >= 0){
    estoque_ini.innerHTML = "<h3>Estoque inicial: </h3>"+estoques
    quantidade_ven.innerHTML = "<h3>Quantidade vendida: </h3>"+produtos_vendidos
    estoque_rest.innerHTML = "<h3>estoque restante: </h3>"+resto

 }
 

}
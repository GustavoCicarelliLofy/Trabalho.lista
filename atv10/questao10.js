function calcular() {

    let valorInicial = parseFloat(document.getElementById("valorInicial").value);
    let meses = parseInt(document.getElementById("meses").value);

    let taxa = 0.02;

    let valorFinal = valorInicial * Math.pow((1 + taxa), meses);

    document.getElementById("resultado").innerHTML =
        "Valor inicial:  " + valorInicial.toFixed(2) + "<br>" +
        "Tempo de investimento: " + meses + " meses<br>" +
        "Valor final:  " + valorFinal.toFixed(2);
}

function positivoNegativoCero () {

    let numero = document.getElementById("num").value; 

    if (numero > 0) {
        document.getElementById("resultado").innerHTML = ("El número " + numero + " es positivo.");
    }
    else if (numero < 0) {
        document.getElementById("resultado").innerHTML = ("El número " + numero + " es negativo.");
    }
    else {
        document.getElementById("resultado").innerHTML = ("El número " + numero + " es cero.");
    }
}
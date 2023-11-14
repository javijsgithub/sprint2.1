function encontrarMaximo() {

    let a = document.getElementById("numa").value;
    let b = document.getElementById("numb").value;
    let c = document.getElementById("numc").value; 
    
    if (a > b && a > c) {
        document.getElementById("resultado2").innerHTML = ("(a) es el valor máximo.");
    }
    else if (b > a && b > c) {
        document.getElementById("resultado2").innerHTML = ("(b) es el valor máximo.");
    }
    else {
        document.getElementById("resultado2").innerHTML = ("(c) es el valor máximo.");
    
    }
}

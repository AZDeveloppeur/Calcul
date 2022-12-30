let calcul_type
let num_1

function number(num) {
    document.getElementById("express").value = document.getElementById("express").value + num
}

function set_calcul_type(type) {
    num_1 = document.getElementById("express").value
    document.getElementById("express").value = ""
    calcul_type = type
}

function calcul() {
    let result = "Erreur math !"
    if (calcul_type == "fois") {
        result = parseInt(num_1, 10) * parseInt(document.getElementById("express").value, 10)
    } else if (calcul_type == "plus") {
        result = parseInt(num_1, 10) + parseInt(document.getElementById("express").value, 10)
    } else if (calcul_type == "moins") {
        result = parseInt(num_1, 10) - parseInt(document.getElementById("express").value, 10)
    } else if (calcul_type == "div") {
        result = parseInt(num_1, 10) / parseInt(document.getElementById("express").value, 10)
    }
    if (result == "NaN") {
        
    }
    document.getElementById("express").value = result
}

function cls() {
    document.getElementById("express").value = ""
}
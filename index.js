var x_1 = document.getElementById('x')
var y_1 = document.getElementById('y')

var x_2 = document.getElementById('x_2')
var y_2 = document.getElementById('y_2')

function result() {
    var distancia = Math.sqrt(Math.pow(x_1.value - x_2.value, 2) + Math.pow(y_1.value - y_2.value, 2))
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `${distancia}`
}
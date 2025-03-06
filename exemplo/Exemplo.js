// alert("Olá Mundo")
//
// var test = prompt("Digite algo")
//
// alert(test)

function testTexto() {
    document.getElementById("title").innerHTML += "Boa tarde"
}

function fontBase() {
    const title = document.getElementById("title")
    title.style.color = "black"
    title.style.fontSize = "40px"
}

function testColor() {
    const title = document.getElementById("title")
    title.style.color = "purple"
    title.style.fontSize = "46px"
}

function reset() {
    document.getElementById("title").innerHTML = "Bem vindo ao site!"
}

function testInput() {
    document.getElementById("input").value = "Tarde"
}
function limpaInput() {
    if(confirm("Deseja limpar os campos?")) {
    document.getElementById("inputEmail4").value = ""
    document.getElementById("inputPassword4").value = ""
    document.getElementById("inputAddress").value = ""
    document.getElementById("inputAddress2").value = ""
    document.getElementById("inputCity").value = ""
    document.getElementById("inputEstado").value = ""
    document.getElementById("inputCEP").value = ""
    }
}

function labelColor(id) {
    document.getElementById(id).style.color = "red"
}

function labelColorReset(id) {
    document.getElementById(id).style.color = "black"
}

function addText(id,text) {
    document.getElementById(id).value = text
}
let btn = document.getElementById("sub")

btn.addEventListener("click", function(){
    event.preventDefault();

    let name = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let num = document.getElementById("num").value
    let morada = document.getElementById("morada").value
    let nif = document.getElementById("nif").value

    if (name && email && num && morada && nif){
        console.log(name, email, num, morada, nif)
        alert("Formulário recebido, obrigado!")
    }
    else{
        alert("Porfavor preencha todos os campos")
    }
    
})

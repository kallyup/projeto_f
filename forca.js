

let usuario =[]
function adicionar(){ 
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    let usuario={
        nome: nome.value,
        email: email.value,

   
    }
    nome.value="",
    email.value="",
    console.log(usuario);
}





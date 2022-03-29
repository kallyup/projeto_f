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

let frutas =[pitaya, banana, morango, laranja, kiwi, caqui, ciriguela, macaiba, ameixa, goiaba, maracuja, melancia]
let personagens= [naruto, goku, hulk, batman, aquaman, thor, popay, chapolim, levi, sasuke, pan, sakura]
let cor= [rosa, azul, branco, amarelo, anil, vermelho, laranja, vinho, roxo, verde, preto, laranja]
let paises= [brazil, argentina, uruguai, paraguai, chile, canada, frança, ucrania, russia, argelia, cuba, inglaterra]

let temas=[frutas, paises, personagens, cor]




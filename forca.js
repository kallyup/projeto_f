let usuario =[]



class pessoa{
    constructor(nome, email, vitoria=0, derrota=0,){
        this.nome= nome,
        this.email=email,
        this.vitoria=vitoria,
        this.derrota=derrota
    }
}
function adicionar(){ 
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    let usuario={
        nome: nome.value,
        email: email.value,
    }
    document.getElementById("vitoria").textContent = cadastro01.vitoria;
    document.getElementById("derrota").textContent = cadastro01.derrota;
    reset();
    nome.value="",
    email.value="",
    console.log(usuario);
}
let frutas = ['pitaya', 'banana', 'morango', 'tangirina', 'kiwi', 'caqui', 'ciriguela', 'macaiba', 'ameixa', 'goiaba', 'maracuja', 'melancia']
let personagens= ['naruto', 'goku', 'hulk', 'batman', 'aquaman', 'thor', 'popay', 'chapolim', 'levi', 'sasuke', 'pan', 'sakura']
let cor= ['rosa', 'azul', 'branco', 'amarelo', 'anil', 'vermelho', 'laranja', 'vinho', 'roxo', 'verde', 'preto', 'laranja']
let paises= ['brasil', 'argentina', 'uruguai', 'paraguai', 'chile', 'canada', 'frança', 'ucrania', 'russia', 'argelia', 'cuba', 'inglaterra']

let temas=[frutas, paises, personagens, cor]

let letrasErradas=[]
let letasCertas=[]
let vitoria=0
let derrota=0
let chances=5

console.log(temas)

function desenharLinhas(palavraEscolhidaFor){
    let underline=""   
    let palavraEscolhida=palavraEscolhidaFor
    console.log(palavraEscolhida)
    for(let i =0; i<palavraEscolhida.length; i++){
        underline+="_ "
    }
    console.log(underline);
}

function jogo(){
    iniciar();
    confereLetras();
    contadorVD();
    reset();
}
    function iniciar(){
        let temaEscolhido = document.getElementById("tema").value
        if(temaEscolhido=="frutas"){
            let frutaEscolhida=(`${frutas[Math.floor(Math.random()*frutas.length)]}`) 
            desenharLinhas(frutaEscolhida)
        }else if(temaEscolhido=="cor"){
            let corEscolhida=(`${cor[Math.floor(Math.random()*cor.length)]}`) 
            desenharLinhas(corEscolhida)
        }else if(temaEscolhido=="paises"){
            let paisEscolido=(`${paises[Math.floor(Math.random()*paises.length)]}`)
            desenharLinhas(paisEscolido)
        }else{
            let personagensEscolhido=(`${personagens[Math.floor(Math.random()*personagens.length)]}`) 
            desenharLinhas(personagensEscolhido)
        }
    }
    function confereLetras(){
         let letraEscolhida=document.getElementById("letra").value
        console.log(letraEscolhida)
         
    }
    function contadorVD(){
         
    }
    function reset(){
         
    }

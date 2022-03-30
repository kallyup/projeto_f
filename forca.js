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
let frutas =['pitaya', 'banana', 'morango', 'tangirina', 'kiwi', 'caqui', 'ciriguela', 'macaiba', 'ameixa', 'goiaba', 'maracuja', 'melancia']
let personagens= ['naruto', 'goku', 'hulk', 'batman', 'aquaman', 'thor', 'popay', 'chapolim', 'levi', 'sasuke', 'pan', 'sakura']
let cor= ['rosa', 'azul', 'branco', 'amarelo', 'anil', 'vermelho', 'laranja', 'vinho', 'roxo', 'verde', 'preto', 'laranja']
let paises= ['brasil', 'argentina', 'uruguai', 'paraguai', 'chile', 'canada', 'frança', 'ucrania', 'russia', 'argelia', 'cuba', 'inglaterra']

let temas=[frutas, paises, personagens, cor]
console.log(frutas)

let letrasErradas=[]
let letasCertas=[]

console.log(temas)

function jogo(){
    iniciar();
    confereLetras();
    contadorVD();
    reset();

}
    function iniciar(){
        let temaEscolhido = document.getElementById("tema").value
        if(temaEscolhido=="frutas"){
            console.log(`${frutas[Math.floor(Math.random()*frutas.length)]}`) 
        }else if(temaEscolhido=="cor"){
            console.log(`${cor[Math.floor(Math.random()*cor.length)]}`) 
        }else if(temaEscolhido=="paises"){
            console.log(`${paises[Math.floor(Math.random()*paises.length)]}`)
        }else{
            console.log(`${personagens[Math.floor(Math.random()*personagens.length)]}`) 
        }
    }
    function confereLetras(){
         
    }
    function contadorVD(){
         
    }
    function reset(){
         
    }

let listaNomesNaTela = [];

function adicionarAmigo() 
{

let nomeAmigo = document.querySelector("input").value;
    if(nomeAmigo == '') 
        {
        alert('Por favor, insira um nome.');
        } else 
        { 
            listaNomesNaTela.push(nomeAmigo);
            console.log(listaNomesNaTela); 
            listarNomes();
        }
        
        limparCampo(); 
} 

function listarNomes() 
{
    let listaAmigo  = document.getElementById("listaAmigos").innerHTML;  
    listaAmigo += "<li>"+listaNomesNaTela[listaNomesNaTela.length -1]+"</li>";          
    document.getElementById("listaAmigos").innerHTML = listaAmigo;  
} 


function sortearAmigo() 
{
    let tamanhoLista = listaNomesNaTela.length;
    let sorteioNumero = Math.floor(Math.random() * tamanhoLista);
    let amigoSorteado = listaNomesNaTela[sorteioNumero];
    console.log(sorteioNumero);
    console.log(tamanhoLista);

    if (listaNomesNaTela == "") 
        {
            alert('Nenhum nome adicionado');
        } else 
        {
            let resultadoSorteio = document.getElementById("resultado").innerHTML;
            resultadoSorteio = "<li>"+"O amigo sorteado é: "+amigoSorteado+"</li>";
            document.getElementById("resultado").innerHTML = resultadoSorteio;
            document.getElementById("listaAmigos").innerHTML ="";
            listaNomesNaTela = [];
        } 
} 


function limparCampo() 
{
    nomeAmigo = document.querySelector("input");
    nomeAmigo.value = '';
}



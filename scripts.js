/*
[]Saber quando o botão é clicado
[]Pegar o texto do input
[]Manda para o servidor traduzir
[] Receber a resposta do servidor
[]Pegar a resposta do servidor
[]Colocar na tela a tradução

https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it

fetch - ferramenta do javascript para fazer requisições http (chamar servidores)
async - diz que a função é assíncrona (vai demorar um pouco para responder)
await - espera a resposta de algo (só pode ser usado dentro de funções async)
*/

//Pegando o texto do textarea
let inputTexto = document.querySelector(".input-texto")     

async function traduzir() {         
    //endereço do servidor com o texto a ser traduzido
    let endereco = "https://api.mymemory.translated.net/get?q=" + (inputTexto.value) + "&langpair=pt-BR|en"    
    //resposta do servidor    
    let resposta = await fetch(endereco)            
     //espera os dados em formato json
    let dados = await resposta.json()    
    //ver a resposta do servidor        
    console.log(dados.responseData.translatedText)
    //coloca na tela a tradução                       
    document.querySelector(".traducao").innerHTML = dados.responseData.translatedText  
}

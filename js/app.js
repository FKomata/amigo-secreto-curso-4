   let listaSelecionados = [];

function adicionar(){
    let nomeAmigo = document.querySelector('.form__input').value;
    listaSelecionados.push(nomeAmigo)
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = listaSelecionados
    
    
    console.log(nomeAmigo)
    console.log(listaAmigos)


}

function sortear(){

}

function reiniciar(){

}
    let listaSorteados = [];

   function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    listaSorteados.push(nomeAmigo.value);

    if(listaAmigos.textContent == ''){
      listaAmigos.textContent = nomeAmigo.value;
    }else{
      listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
     nomeAmigo.value = '';
    
}

function sortear(){
  let sorteados = embaralhar(listaSorteados);

  for(i=0 ; i=listaSorteados; i++){
  }
  
  let nomes = sorteados.textContent.split(',' , 2);

   
}

function reiniciar(){
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
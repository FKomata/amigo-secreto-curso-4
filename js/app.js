    let listaSorteados = [];

   function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');

    if(nomeAmigo.value == ''){
      alert('nome de amigo não valido');
      return;
    }

    if(listaSorteados.includes(nomeAmigo.value)){
      alert('nome já adicionado');
      return;
    }

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
if(listaSorteados.length <= 4){
  alert('adicione pelo menos 4 pessoas para realizar o sorteio');
  return;
}

  embaralhar(listaSorteados);
  let sorteados = document.getElementById('lista-sorteio');

  for (let i = 0; i < listaSorteados.length; i++) {
    if(i == listaSorteados.length -1){
    sorteados.innerHTML = sorteados.innerHTML + listaSorteados[i] + ' ---> ' + listaSorteados[0] + '<br>'
    }else{
      sorteados.innerHTML = sorteados.innerHTML + listaSorteados[i] + ' ---> ' + listaSorteados[i+1] + '<br>'
    }
  }
 
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
  listaSorteados = [];
  document.getElementById('lista-sorteio').innerHTML = '';
  document.getElementById('lista-amigos').innerHTML = '';
}
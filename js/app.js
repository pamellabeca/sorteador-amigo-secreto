let listaDeAmigos = [];

function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo').value;

    if(nomeDoAmigo == ''){
        alert('Digite o nome de um amigo!');
        return;
    }
    
    limparCampo('nome-amigo');

    if(listaDeAmigos.includes(nomeDoAmigo.toUpperCase())){
        alert(`O nome ${nomeDoAmigo} já está incluso na sua lista de amigos!`);
    } else{
        listaDeAmigos.push(nomeDoAmigo.toUpperCase())
        document.getElementById('lista-amigos').innerHTML = listaDeAmigos.join(', ');
    }

    return listaDeAmigos;
}

function sortear(){
    if(listaDeAmigos.length < 4){
        alert('Lista com poucas pessoas. Adicione pelo menos 4 amigos e tente novamente!')
        return;
    }
    
    embaralha(listaDeAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');


    for (i =0; i < listaDeAmigos.length; i++){
        if(i == listaDeAmigos.length - 1){
            listaSorteio.innerHTML = `${listaSorteio.innerHTML} ${listaDeAmigos[listaDeAmigos.length - 1]} --> ${listaDeAmigos[0]} <br>`;
        } else{
            listaSorteio.innerHTML = `${listaSorteio.innerHTML} ${listaDeAmigos[i]} --> ${listaDeAmigos[i + 1]} <br>`;
        }
    }
}

function reiniciar(){
    listaDeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function limparCampo(id){
    document.getElementById(id).value = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
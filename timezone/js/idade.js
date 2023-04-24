function novaIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (idade == '') {
        idade = 0;
    }
    
    let idadeFutura = parseInt(idade) + 40;

    return document.getElementById('idadeFutura').value = idadeFutura;

}

function bidade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (idade == '') {
        idade = 0;
    }
    
    let idadePassado = parseInt(idade) - 10;

    return document.getElementById('idadePassado').value = idadePassado;
}

function carregaJovem() {
    let url = 'images/';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('novo').appendChild(img);
}

function carregaIdoso() {
    let url = 'images/';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

function carregaBebe() {
    let url = 'images/';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('bebe').appendChild(img);
}
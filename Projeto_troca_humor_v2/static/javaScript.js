const nome = document.getElementById("nome");
nome.innerHTML = "<b>Nome:</b>Homer simpson";

const idade = document.getElementById("idade");
idade.innerHTML = "<b>Idade:</b>39";

const profissao = document.getElementById("profissao");
profissao.innerHTML = "<b>Profissão:</b>Inspetor de segurança";

const botao = document.querySelector('#botao');
const feliz = document.getElementById("img1");
const triste = document.getElementById("img2");


function mudahumor() {
    if (document.getElementById('img1').style.display == 'block') {
        document.getElementById('img1').style.display = 'none';
        document.getElementById('img2').style.display = 'block';
    }else {
        document.getElementById('img1').style.display = 'block';
        document.getElementById('img2').style.display = 'none';
    }
}

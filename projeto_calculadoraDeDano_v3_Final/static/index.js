const vidaPorPersonagem = {
    'muzan': 8,
    'kokushibo': 12,
    'akasa': 18,
};

const danoPorArma = {
    'sanemi': 2,
    'giyuu': 5,
    'kyojuro': 10,
};

let personagemSelecionado;
let armaSelecionada;

function iniciar() {
    const elementos = document.getElementsByClassName('elemento');

    for (const elemento of elementos) {
        elemento.addEventListener('click', marcarElementoSelecionado);
    }

    document.getElementById('calcular').addEventListener('click', calcularDano);
}

function marcarElementoSelecionado(evento) {
    const elementoSelecionado = evento.target.parentElement;

    if (!elementoSelecionado.classList.contains('elemento')) {
        return;
    }

    const idElementoSelecionado = elementoSelecionado.getAttribute('id');

    if (elementoSelecionado.classList.contains('personagem')) {
        personagemSelecionado = idElementoSelecionado;
        limparElementosSelecionados('personagem');
    } else {
        armaSelecionada = idElementoSelecionado;
        limparElementosSelecionados('arma');
    }

    elementoSelecionado.classList.add('selecionado');
}

function calcularDano() {
    if (!personagemSelecionado || !armaSelecionada) {
        alert('Selecione o personagem o oni e o caçador para calcular o dano');
        return;
    }

    const danoDados = rolarOsDados();
    const danoArma = danoPorArma[armaSelecionada];
    const danoTotal = danoDados + danoArma;
    const vidaPersonagem = vidaPorPersonagem[personagemSelecionado];

    let resultado = 'Dano: ' + danoTotal + '! ';

    if (danoTotal >= vidaPersonagem) {
        resultado += 'Parabens, você matou o Oni' + personagemSelecionado;
    } else {
        resultado += 'Não Desista, tente novamente!';
    }

    document.getElementById('dano').innerHTML = resultado;
}

function limparElementosSelecionados(tipo) {
    const elementos = document.getElementsByClassName('elemento');

    for (const elemento of elementos) {
        if (elemento.classList.contains(tipo)) {
            elemento.classList.remove('selecionado');
        }
    }
}

function rolarOsDados() {
    const min = Math.ceil(1);
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

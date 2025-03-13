// #region ========================================== getElementById e querySelector

const bt_limpar = document.getElementById('bt_limpar');
const bt_porcentagem = document.getElementById('bt_porcentagem');
const bt_raiz = document.getElementById('bt_raiz');

const bt_divisao = document.getElementById('bt_divisao');
const bt_multiplicacao = document.getElementById('bt_multiplicacao');
const bt_subtracao = document.getElementById('bt_subtracao');
const bt_soma = document.getElementById('bt_soma');
const bt_resultado = document.getElementById('bt_resultado');

const bt0 = document.getElementById('bt0');
const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const bt6 = document.getElementById('bt6');
const bt7 = document.getElementById('bt7');
const bt8 = document.getElementById('bt8');
const bt9 = document.getElementById('bt9');
const bt_virgula = document.getElementById('bt_virgula');
const bt_apagar = document.getElementById('bt_apagar');

const display_historico = document.querySelector('.display-input-historico');
const display_input = document.querySelector('.display-input');

// #endregion ========================================== getElementById e querySelector

let valor1 = '';
let valor2 = '';
let operacao = '';
let resultado = '';

function limpar() {
  valor1 = '';
  valor2 = '';
  operacao = '';
  resultado = '';
  display_historico.value = '';
  display_input.value = '';
}

function porcentagem() {
  if (valor1 !== '' && operacao === '') {
    resultado = parseFloat(valor1) / 100;
    display_historico.value = valor1 + '% =';
    display_input.value = resultado;
    valor1 = resultado;
  } else if (valor2 !== '') {
    valor2 = parseFloat(valor2) * parseFloat(valor1) / 100;
    display_input.value = valor2;
    calcular();
  }
}

function raiz() {
  if (valor1 !== '') {
    resultado = Math.sqrt(parseFloat(valor1));
    display_historico.value = '√' + valor1 + ' =';
    display_input.value = resultado;
    valor1 = resultado;
  }
}

function apagar() {
  if (resultado !== '' && operacao === '') {
    limpar();
  } else {
    if (operacao === '') {
      if (display_input.value !== '') {
        valor1 = display_input.value.slice(0, -1);
        display_input.value = valor1;
      } else {
        valor1 = valor1.slice(0, -1);
        display_input.value = valor1;
      }
    } else {
      valor2 = valor2.slice(0, -1);
      display_input.value = valor2;
    }
  }
}

function adicionarNumero(numero) {
  if (resultado !== '' && operacao === '') {
    limpar();
  }
  if (operacao === '') {
    valor1 += numero;
    display_input.value = valor1;
  } else {
    valor2 += numero;
    display_input.value = valor2;
  }
}

function adicionarVirgula() {
  if (operacao === '') {
    if (valor1.indexOf('.') === -1) {
      if (valor1 === '') {
        valor1 = '0';
      }
      valor1 += '.';
      display_input.value = valor1;
    }
  } else {
    if (valor2.indexOf('.') === -1) {
      if (valor2 === '') {
        valor2 = '0';
      }
      valor2 += '.';
      display_input.value = valor2;
    }
  }
}

function selecionarOperacao(op) {
  if (valor1 !== '' && valor2 === '') {
    operacao = op;
    display_historico.value = valor1 + ' ' + operacao;
  }
  if (valor2 !== '') {
    calcular();
    operacao = op;
    display_historico.value = resultado + ' ' + operacao;
  }
}

function calcular() {
  if (valor1 !== '' && valor2 !== '') {
    switch (operacao) {
      case '+':
        resultado = parseFloat(valor1) + parseFloat(valor2);
        break;
      case '-':
        resultado = parseFloat(valor1) - parseFloat(valor2);
        break;
      case '*':
        resultado = parseFloat(valor1) * parseFloat(valor2);
        break;
      case '/':
        resultado = parseFloat(valor1) / parseFloat(valor2);
        break;
    }
    display_historico.value = valor1 + ' ' + operacao + ' ' + valor2 + ' =';
    display_input.value = resultado;
    valor1 = resultado;
    valor2 = '';
    operacao = '';
  }
}

bt_limpar.addEventListener('click', limpar);
bt_porcentagem.addEventListener('click', porcentagem);
bt_raiz.addEventListener('click', raiz);

bt0.addEventListener('click', () => adicionarNumero('0'));
bt1.addEventListener('click', () => adicionarNumero('1'));
bt2.addEventListener('click', () => adicionarNumero('2'));
bt3.addEventListener('click', () => adicionarNumero('3'));
bt4.addEventListener('click', () => adicionarNumero('4'));
bt5.addEventListener('click', () => adicionarNumero('5'));
bt6.addEventListener('click', () => adicionarNumero('6'));
bt7.addEventListener('click', () => adicionarNumero('7'));
bt8.addEventListener('click', () => adicionarNumero('8'));
bt9.addEventListener('click', () => adicionarNumero('9'));
bt_virgula.addEventListener('click', adicionarVirgula);
bt_apagar.addEventListener('click', apagar);

bt_soma.addEventListener('click', () => selecionarOperacao('+'));
bt_subtracao.addEventListener('click', () => selecionarOperacao('-'));
bt_multiplicacao.addEventListener('click', () => selecionarOperacao('*'));
bt_divisao.addEventListener('click', () => selecionarOperacao('/'));
bt_resultado.addEventListener('click', calcular);

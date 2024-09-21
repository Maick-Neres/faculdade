

class Funcionarios {

  constructor() {
    this.nome = document.getElementsByName('nome')[0]
    this.idade = document.getElementsByName('idade')[0]
    this.cargo = document.getElementsByName('cargo')[0]
    this.departamento = document.getElementsByName('departamento')[0]
    this.linguagem = document.getElementsByName('linguagem')[0]
  }
  get seapresentar() {
    return `Olá, meu nome é ${this.nome.value}, tenho ${this.idade.value} anos e trabalho como ${this.cargo.value}.`
  }

  get trabalho() {
    return `${this.nome.value} está trabalhando.`;
  }
}

class Gerente extends Funcionarios {
  constructor() {
    super();
    this.departamento =document.getElementsByName('departamento')[0];
  }

  get gerenciar() {
    return `${this.nome.value} está gerenciando o seu setor de ${this.departamento.value}.`;
  }
}


class Desenvolvedor extends Funcionarios {
  constructor() {
    super();
    this.linguagem =document.getElementsByName('linguagem')[0]
  }

  get programar() {
    return `${this.nome.value} está programando em ${this.linguagem.value}.`;
  }
}
const bntbutton = document.querySelector('.bnt');

const VerificaElementos = () => {
  try {
    const nome = document.querySelector('input[name="nome"]').value.trim();
    const idade = document.querySelector('input[name="idade"]').value.trim();
    const cargo = document.querySelector('input[name="cargo"]').value.trim();
    const departamento = document.querySelector('input[name="departamento"]').value.trim();
    const linguagem = document.querySelector('input[name="linguagem"]').value.trim();
    const campos = [nome, idade, cargo, departamento, linguagem];
    return campos.every(campo => campo !== '');
  } catch (e) {
   
    return false; 
  }
};



const g1 = new Gerente ()
const dev1 = new Desenvolvedor ()

bntbutton.addEventListener('click', (e) => {
  e.preventDefault();
  if (VerificaElementos()) {
    alert(`${g1.seapresentar}`)
    alert(`${dev1.programar}`)

  } else {
    alert('Campos não estão preenchidos');
  }
}); 

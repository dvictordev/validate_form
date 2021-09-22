class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");

    this.eventos();
  }
  eventos() {

    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault(e);
    const validFields = this.validFields();
    const validaSenha = this.validaSenha();
    const validaSenhasIguais = this.validaSenhasIguais();
    const validaCpf = this.validaCpf();
    const validaUser = this.validaUsuario();
    let valid = false
    console.log(valid)
  }

  validFields() {
    let valid = true;

    for (let error of this.formulario.querySelectorAll(".error-txt")) {
      error.remove(error);
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      if (!campo.value) {
        this.criaErro(campo, `*${campo.name} não pode estar vazio`);
        valid = false;
      }
    }   
  }

  validaCpf(){
    const campo = document.querySelector('.cpf')
    const cpf = new CpfValido(campo.value)
    if(!cpf.valida()){
      this.criaErro(campo, '*CPF invalido')
    }
  }

  validaSenha() {
    let valid = true;
    const senha = document.querySelector(".senha");
    if (senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, '*Senha invalida')
      valid = false;
    } 

    return valid
  } 

  validaSenhasIguais() {
    let valid = true;
    
    const senha = document.querySelector(".senha");
    const repetirSenha = document.querySelector(".repetir-senha");
    if (repetirSenha.value != senha.value) {
      this.criaErro(repetirSenha, '*Senhas não coincidem')
      valid = false;
    }
    return valid;
  }

  validaUsuario(){
    const user = document.querySelector('.usuario')
    let valid = true;
    if(user.value.length < 3 || user.value.length > 12){
      this.criaErro(user, '*Usuario deve ter entre 6 e 12 caracteres')
      valid = false
    };

    if(!user.value.match(/^[a-zA-Z0-9]+$/g)){
      this.criaErro(user, '*Usuario deve conter apenas letras e/ou numeros')
      valid = false
    }
    return valid 
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-txt");
    campo.insertAdjacentElement("afterend", div);
    div.style.color = "red";
  }
}

const valida = new ValidaFormulario();

class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");

    this.eventos();
  }
  eventos() {
    // const validaInputs = document.querySelector(".validar");
    // const nome = document.querySelector(".nome");
    // const sobrenome = document.querySelector(".sobrenome");
    // const CPF = document.querySelector(".Cpf");
    // const usuario = document.querySelector(".usuario");
    // const senha = document.querySelector(".senha");
    // const repetirSenha = document.querySelector(".repetir-senha");
    // const btn = document.querySelector("button");

    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault(e);
    const validFields = this.validFields();
    const validaSenha = this.validaSenha();
    const validaSenhasIguais = this.validaSenhasIguais();
  }

  validFields() {
    let valid = true;

    for (let error of this.formulario.querySelectorAll(".error-txt")) {
      error.remove(error);
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      if (!campo.value) {
        this.criaErro(campo, `${campo.name} não pode estar vazio`);
        valid = false;
      }
    }
  }

  validaSenha() {
    const senha = document.querySelector(".senha");
    if (senha.value.length < 6 || senha.value.length > 12) {
      alert("senha invalida");
      return;
    } else {
      return senha;
    }
  }

  validaSenhasIguais() {
    const senha = document.querySelector(".senha");
    const repetirSenha = document.querySelector(".repetir-senha");
    if (repetirSenha.value != senha.value) {
      alert("senhas não são iguais");
      return;
    }
    return senha;
  }

  validaUsuario(){}

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-txt");
    campo.insertAdjacentElement("afterend", div);
    div.style.color = "red";
  }
}

const valida = new ValidaFormulario();

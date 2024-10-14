import "./style.css"

const formulario = document.querySelector('#formulario')
const email = document.querySelector<HTMLInputElement>("#email")
const nascimento = document.querySelector<HTMLDataElement>("#nascimento")
const cep = document.querySelector<HTMLInputElement>("#cep")
const rua = document.querySelector<HTMLInputElement>("#rua")
const bairro = document.querySelector<HTMLInputElement>("#bairro")
const cidade = document.querySelector<HTMLInputElement>("#cidade")
const estado = document.querySelector<HTMLInputElement>("#estado")
const numero = document.querySelector<HTMLInputElement>("#numero")


interface viaCep {
  cep: string;
  logradouro: string;
  uf: string;
  localidade: string;
  bairro: string;
}

function consultarCep(cep: string): Promise<viaCep> {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}

if (formulario && email && nascimento && cep && rua && bairro && cidade && estado && numero) {

  cep.addEventListener('blur', () => {
    consultarCep(cep.value).then(
      (data: viaCep) => {
        rua.value = data.logradouro
        bairro.value = data.bairro
        cidade.value = data.localidade
        estado.value = data.uf
      }
    ).catch(error => {
      console.error("Cep não encontrado ", error)
    })

  });

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value && nascimento.value && cep.value && rua.value && bairro.value &&
      cidade.value && estado.value && numero.value) {

      const dataAtual = new Date()
      const dataNascimento = new Date(nascimento.value)

      if (dataNascimento > dataAtual) {
        alert("Data de nascimento não pode ser maior que a data atual")
        return
      }
      const dados = {
        email: email.value,
        nascimento: nascimento.value,
        cep: cep.value,
        rua: rua.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        numero: numero.value
      };
      console.log(dados);
      alert("Formulário enviado com sucesso!")
    } else {
      alert("Preencha todos os campos!")
    }

  });
}
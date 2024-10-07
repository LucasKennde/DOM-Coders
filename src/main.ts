import './style.css'

const button = document.querySelector<HTMLButtonElement>('#button')
const nome = document.querySelector<HTMLInputElement>('#nome')
const email = document.querySelector<HTMLInputElement>('#email')
const idade = document.querySelector<HTMLInputElement>('#idade')
const password = document.querySelector<HTMLInputElement>('#password')


if (button) {
  button.addEventListener('click', () => {
    if (nome && email && idade && password) {
      if (!nome.value || !email.value || !idade.value || !password.value) {
        alert('Preencha todos os campos')
        return
      }
      if (!email.value.includes('@') || !email.value.split('@')[1].includes('.')) {
        alert('Email não confere')
        return
      }
      if (isNaN(Number(idade.value)) && Number(idade.value) > 0) {
        alert('Idade deve ser um número e ser maior que zero')
        return
      }
      if (password.value.length < 8) {
        alert('Senha deve ter pelo menos 8 caracteres')
        return
      }
      alert('Cadastro realizado com sucesso!')
      const user = {
        nome: nome.value,
        email: email.value,
        idade: idade.value,
        password: password.value
      }
      console.log(user)
    }
  })
}



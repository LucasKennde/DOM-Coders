import "./style.css";
const formulario = document.querySelector<HTMLFormElement>('#formulario');
const resultado = document.querySelector<HTMLDivElement>('.resultado');
const inputTarefas = document.querySelector<HTMLInputElement>('#inputTarefas');
let tarefas: string[] = JSON.parse(localStorage.getItem('tarefas') || '[]');



function mostrarResultado() {
  if(resultado) {
    resultado.innerHTML = '';
    tarefas.forEach((tarefa: string, index: number) => {
      const li = document.createElement('li');
      li.textContent = tarefa;
      const botaoExcluir = document.createElement('button');
      botaoExcluir.textContent = 'Excluir';
      botaoExcluir.addEventListener('click', () => {
        removerTarefa(index);
      });
      li.appendChild(botaoExcluir);
      resultado.appendChild(li);
    });
  }
}


function removerTarefa(index: number) {
  tarefas.splice(index, 1);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  mostrarResultado();
}


if (formulario && inputTarefas) {

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    tarefas.push(inputTarefas.value);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    console.log(tarefas);
    mostrarResultado();
    formulario.reset();
  })
}

mostrarResultado();
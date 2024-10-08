const lampada = document.querySelector<HTMLImageElement>("#lampada")
const botaoLampada = document.querySelector("#botao-lampada")
let tomada: boolean = false
let lampadaQuebrada: boolean = false

function getNumeroAleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verificarNumero(number: number): boolean {
  if (number == 5) {
    return false
  }
  return true
}


if (lampada && botaoLampada) {
  botaoLampada.addEventListener('click', () => {

    const numeroAleatorio: number = getNumeroAleatorio(1, 10)

    if (verificarNumero(numeroAleatorio)) {
      lampada.src = "/quebrada.png"
      lampadaQuebrada = !lampadaQuebrada
    }


    if (!lampadaQuebrada) {
      if (tomada) {
        lampada.src = "/desligada.png"
        tomada = !tomada
      } else {
        lampada.src = '/ligada.png'
        tomada = !tomada
      }
    }
    
  })

}


function novoElemento(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem //Função para criar os elementos html//
}

function Barreira(reversa = false){//função de criação da barreira//
    this.elemento = novoElemento('div , barreira') //(<div> , .class)

    const borda = novoElemento('div , borda') //partes do cano começando de cima//
    const corpo = novoElemento('div , corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = '${altura}px'

}

const b = new Barreira(true)
b.setAltura(200)
document.querySelector('[tp-flappy]').appendChild(b.elemento)
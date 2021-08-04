const abrirMenu = (opcao) => {
    const menuOpcoes = document.querySelector('.opcoes')
    const menu = document.querySelector(`#${opcao}`)
    if (menu && menuOpcoes) {
        menuOpcoes.style.height = 0
        menuOpcoes.style.opacity = 0
        menuOpcoes.style.overflow = 'hidden'
        menu.style.height = 'normal'
        menu.style.opacity = 1
        menu.style.overflow = 'visible'
    }
}

const voltarMenuOpcoes = () => {
    const menuOpcoes = document.querySelector('.opcoes')
    const menus = document.querySelectorAll('.equation_menu')
    if (menus.length && menuOpcoes) {
        menus.forEach(menu => {
            menu.style.height = 0
            menu.style.opacity = 0
            menu.style.overflow = 'hidden'
        })
        menuOpcoes.style.height = 'normal'
        menuOpcoes.style.opacity = 1
        menuOpcoes.style.overflow = 'visible'
    }
    resetarTudo()
}

const resetarTudo = () => {
    document.querySelectorAll('input[type=text]').forEach(i => {
        i.value = ""
    })
}

const apenasNumeros = (evt) => {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

const calcularResultados = (dados) => {
    switch (dados.tipo) {
        case 'distancia':            
            return parseInt(dados.tempo) * parseInt(dados.velocidade)
        case 'tempo':
            return parseInt(dados.distancia) * parseInt(dados.velocidade)
        case 'velocidade':
            return parseInt(dados.tempo) * parseInt(dados.distancia)
    }
}

module.exports = {
    calcularResultados
}
function carregar() {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
       
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#f0e18f'
        document.getElementById('titulo').style.color = 'black'
        document.getElementById('msg2').style.color = 'black'
        msg2.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#da771c'
        msg2.innerHTML = 'Boa Tarde!'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#3f3a7c'
        msg2.innerHTML = 'Boa Noite!'
    }
}


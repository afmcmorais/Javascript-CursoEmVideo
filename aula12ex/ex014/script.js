function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = prompt('Que horas são?');

    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = 'linear-gradient(to right, #327E96, #DEAB7E, #563509)';
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = 'linear-gradient(to right, #FE983B, #79503E, #570D00)';
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = 'linear-gradient(to right, #172442, #0560C6, #79454B)';
    }
}

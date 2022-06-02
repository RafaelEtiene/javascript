function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var h = data.getHours()
    h = 15
    
    msg.innerHTML = `Agora são ${h} horas.`
    if(h >= 0 && h < 12)  {
        //Bom dia
        img.src = 'modelo/manhã.png'
        document.body.style.background = '5555'
    } else if(h >= 12 && h < 18) {
        
        img.src = 'modelo/tarde.png'
        document.body.style.background = '#898466'
    } else{
        
        img.src = 'modelo/noite.png'}
        document.body.style.background = '#515154'
        
    
}

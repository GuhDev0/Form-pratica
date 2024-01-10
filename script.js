let btn = document.querySelector('#send')



btn.addEventListener("click",function(e){
    e.preventDefault();// com esse preventDefault Eu Faço com que o BTN nao tenha nenhuma função de enviar apenas pra função que determinei que foi o click
    let name = document.querySelector('#iname')
    let email = document.querySelector('#iemail')
    let emailUsuario = email.value// Aqui estou mostrando em qual lugar os Dados recebidos deve aparecer
    let nomeUsuario = name.value
   

     
    let p1 = document.querySelector('#paragrafo1').innerHTML = `Ola, ${nomeUsuario}`
    let p2 = document.querySelector('#paragrafo2').innerHTML = `Seu Email é: ${emailUsuario}`
    
})
//alert("entrando......")
function relogio(){
    var datahora = new Date()
   // hora = datahora.getHours()
   // document.getElementById('hora').innerText = datahora.getHours() + ":" + 
    //datahora.getMinutes() + ":" +
     //datahora.getSeconds()
     document.getElementById('hora').innerText = `${datahora.getHours()}: ${datahora.getMinutes()}: ${datahora.getSeconds()}`
}
setInterval(relogio, 1000)
function orcar(){
 
}
function limpar(){
  document.getElementById('test').reset
}
function imprimir(){
    window.print()
}
function fim(){
 window.close()
}
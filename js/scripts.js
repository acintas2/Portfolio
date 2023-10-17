
function mostraRellotge(){
    const div = document.getElementById("div-clock");

    var ahora = new Date();
    // El padstart sirve para decir que quiero 2 digitos y en el caso que no haya 2 digitos me lo rellenas con un 0 delante.
    var horas = ahora.getHours().toString().padStart(2, '0');
    var minutos = ahora.getMinutes().toString().padStart(2, '0');
    var segundos = ahora.getSeconds().toString().padStart(2, '0');
    div.innerHTML = horas + ':' + minutos + ':' + segundos + "<br>";
    
}

function startRellotge(){
    setInterval(mostraRellotge,1000);
}
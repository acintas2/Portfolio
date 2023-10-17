
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

function mostraData(){
    const fechaAMostrar1 = document.getElementById("fechaActual");
    const diasTranscurridos = document.getElementById("diasTranscurridos");
    
    const fechaActual = new Date();
    const fechaInicio = new Date('2020-09-21');
    var diferenciaFechas = fechaActual -fechaInicio; 
    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    const diferenciaDias = Math.floor(diferenciaFechas / milisegundosPorDia);


    fechaAMostrar1.innerHTML = fechaActual.toLocaleDateString();
    diasTranscurridos.innerHTML = "Han pasado <b>" + diferenciaDias + "</b> dias desde el 21 de Septiembre de 2020";
}


var urlBase = 'https://api.yumserver.com/16471/products'; 

async function ObtenerTurnosCargados(){
    let turnos = await 
    fetch('https://api.yumserver.com/16471/products') 
    return await turnos.json();
}

async function MostrarTurnos()
{
    let turnos = await ObtenerTurnosCargados();
    let html =``;
    console.log(turnos);
    console.log(turnos[0]);
    for (let i = 0; i < turnos.length; i++) {
        html+=`
            <tr>
                <td><b>${turnos[i].idcod}</b></td>
                <td><b>${turnos[i].titulo}</b></td>
                <td><b>${turnos[i].fecha}</b></td>
                <td><b>${turnos[i].precioPeso}</b></td>
                <td><b>${turnos[i].precioDolar}</b></td>
              </tr>
        `;
    }
    console.log(html);
    document.getElementById('resultados').innerHTML =html;
}

async function CrearNuevoTurno() {
    let body={
        titulo:document.getElementById('titulo').value,
        fecha: document.getElementById('fecha').value,
        precioPeso: document.getElementById('precioPeso').value,
        precioDolar: document.getElementById('precioDolar').value
    };
    console.log("bodyToSend ", body);
    try{
        let response = await fetch(urlBase,{
            mode:'cors',
            method: 'POST',
            headers:{'Content.Type':'application/json'},
            body:JSON.stringify(body)
        })
        console.log(response);
    }catch(error){
        console.log(error);
    }
    
    
}


"use client"

import Card from '../Card/Card';
import './Listado.css';

function Listado({setCitas,citas}) {
    return(
        <>
        {citas && citas.map(item=>(
            <Card
            citas={citas} 
            setCitas={setCitas}
            id={item.id}
            mascota={item.mascota}
            dueño= {item.propietario}
            fecha= {item.fecha} 
            hora= {item.hora}
            sintomas= {item.sintomas}
          />
        ))}          
        </>
    )
}

export default Listado;


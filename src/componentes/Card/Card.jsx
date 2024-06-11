"use client"

import Button from "../button/button.jsx";
import './card.css';

function Card(props) {
    function handleEliminar() {
        const confirmacion = window.confirm('¿Estás seguro de eliminar esta cita?');
        if (confirmacion) {
            const nuevasCitas = props.citas.filter(cita => cita.id !== props.id);
            props.setCitas(nuevasCitas);
        }
    }
      
    return(
        <>
        <div class="cita">
            <p>Mascota: <span>{props.mascota}</span></p>
            <p>Dueño: <span>{props.dueño}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p>
            <Button onClick={handleEliminar}
              class="button elimnar u-full-width"
              text= "Eliminar x"
            />
          </div>
        </>
    )
}

export default Card;

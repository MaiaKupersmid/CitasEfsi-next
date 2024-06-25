"use client"

import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Form({ setCitas, citas }) {
  const [formData, setFormData] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmacion = window.confirm("¿Estás seguro de agregar esta cita?");
    if (!confirmacion) {
      return;
    } else {
      const obj = {
        id: generarIDUnico(),
        mascota: document.getElementById('mascota').value.trim(),
        propietario: document.getElementById('propietario').value.trim(),
        fecha: document.getElementById('fecha').value.trim(),
        hora: document.getElementById('hora').value.trim(),
        sintomas: document.getElementById('sintomas').value.trim()
      };

      console.log("----------------------------------------------------------------------------------", obj.mascota);

      if (!obj.mascota || !obj.propietario || !obj.fecha || !obj.hora || !obj.sintomas) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
      }

      setCitas([...citas, obj]);
    }
  };

  const generarIDUnico = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nombre Mascota"
          type="text"
          name="mascota"
          id="mascota"
          class="u-full-width"
          placeholder="Nombre Mascota"
          value={formData.mascota}
          onChange={handleChange}
        />
        <Input
          text="Nombre Dueño"
          type="text"
          name="propietario"
          id="propietario"
          class="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={formData.propietario}
          onChange={handleChange}
        />
        <Input
          text="Fecha"
          type="date"
          name="fecha"
          id="fecha"
          class="u-full-width"
          value={formData.fecha}
          onChange={handleChange}
        />
        <Input
          text="hora"
          type="time"
          name="hora"
          id="hora"
          class="u-full-width"
          value={formData.hora}
          onChange={handleChange}
        />
        <Input
          text="Sintomas"
          name="sintomas"
          id="sintomas"
          class="u-full-width"
          value={formData.sintomas}
          onChange={handleChange}
        />
        <Button
          type="submit"
          class="u-full-width button-primary"
          text="Agregar Cita"
        />
      </form>
    </>
  );
}

export default Form;

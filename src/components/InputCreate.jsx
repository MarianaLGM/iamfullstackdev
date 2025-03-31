//donde crearás un `input` y un `botón`
//La funcionalidad será que al insertar la tarea en el input y darle al botón enviar se añadirá a nuestra BBDD y
//  por tanto desde la ruta `"/"` podremos ver todos las tareas anteriores junto con las que añadamos desde React


import {useState} from "react";

function InputCreate() {
    const [payload, setPayload] = useState({title:""});

    const handleClick = (e) => {
        
            fetch('http://localhost:3000/create', {
                method: 'POST', // Método HTTP
                headers: {
                  'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
            })
        }

        console.log(payload)
    
    // Este es el manejador para cuando el usuario escribe en el input
    const handleChange = (e) => {
        setPayload({ title: e.target.value });  // Actualiza el estado con el valor ingresado
    };


    return (
        <>
        <h1>Lista Tareas React:</h1>
        <form>
                <input 
                type="text"
                value={payload.title}  
                placeholder="Agregar nueva tarea"
                onChange={handleChange}
                />
            <button type="submit" onClick={handleClick}>Agregar</button>
        </form>
        </>
        )
}

export default InputCreate;
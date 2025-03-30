//donde crearás un `input` y un `botón`
//La funcionalidad será que al insertar la tarea en el input y darle al botón enviar se añadirá a nuestra BBDD y
//  por tanto desde la ruta `"/"` podremos ver todos las tareas anteriores junto con las que añadamos desde React


import {useState} from "react";
import { Link } from "react-router-dom";


function InputCreate() {
    const [newTask, setNewTask] = useState('');  // Maneja el estado de la nueva tarea
    const [tasks, setTasks] = useState([]);

    // Este es el manejador para cuando el usuario escribe en el input
    const handleChange = (e) => {
        setNewTask(e.target.value);  // Actualiza el estado con el valor ingresado
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
          // Agregar la nueva tarea a la lista de tareas
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTask(''); // Limpiar el campo después de agregar la tarea
        }
    };

    return (
        <>
        <h1>Lista Tareas React:</h1>
        <form onSubmit={handleClick}>
                <input 
                type="text"
                value={newTask}
                placeholder="Agregar nueva tarea"
                onChange={handleChange}
                />
            <button type="submit">Agregar</button>
        </form>
        <ul>
        {tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
        </ul>
        </>
        )
}

export default InputCreate;
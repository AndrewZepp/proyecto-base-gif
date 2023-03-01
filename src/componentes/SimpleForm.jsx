// Clase 16 de febrero

import { useState } from "react"


export const SimpleForm = () => {

    const initValues = {
        username: '',
        email: ''
    }

    const [form, setForm] = useState(initValues)

    const handleInputChange= (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSendUser = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(form),
            headers:{
                'Content-type' : 'application/json; charset=UTF-8'
            }
        })
        .then((response)=> response.json())
        .then((data) => setForm(initValues))
        
    }

    return(
        <>
            <h1>Formulario</h1>

            <input 
                type='text'
                placeholder='Usuario'
                name='username'
                value={form.username}
                onChange={ handleInputChange }
            />

            <input 
                type='text'
                placeholder='Email'
                name='email'
                value={form.email}
                onChange={ handleInputChange }
            />

            <button onClick={ handleSendUser }>Enviar</button>

        </>
    )
}
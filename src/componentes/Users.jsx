// Clase 16 de febrero

import { useState, useEffect } from "react"

export const Users = () =>{

    const [users, setUsers] = useState([])
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            setUsers(data)
        })
        
    
    
    }, [])
   

    return (
        <>
            <ul>
                { users.map((usuario) => { return <li key={usuario.id}>{usuario.name}, email: {usuario.email}</li> }) }
            </ul>
        </>
    )
}
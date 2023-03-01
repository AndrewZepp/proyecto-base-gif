import React from 'react'
import ReactDOM from 'react-dom/client'
import { SimpleForm } from './componentes/SimpleForm'
import { Users } from './componentes/Users'  // -> clase 16 de febrero
import { GifExpertApp } from './GifExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
    <Users />  
    <SimpleForm />   
  </React.StrictMode>,
)

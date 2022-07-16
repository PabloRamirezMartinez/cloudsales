import React from 'react'
import { useNavigate } from 'react-router-dom'

const BtnEdi = ({prod}) => {
    const navigate = useNavigate()
    const guardarDatos = ()=>{
        sessionStorage.setItem("prod",JSON.stringify(prod))
        navigate("/editprod")

    }
  return (
    <button onClick={guardarDatos} className='btn btn-warning w-25 ml-2'>
        <i className='fas fa-pen mr-2'/>
        Editar</button>
  )
}

export default BtnEdi
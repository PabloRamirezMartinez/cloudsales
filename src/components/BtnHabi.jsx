import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import qs from 'qs'
import { toast } from 'react-hot-toast'

const BtnHabi = ({prod, loading}) => {

    const exito = (msj) => toast.success(msj)
    let msj = ''
    const error = () => toast.error("Hubo un problema")

    const [res, setRes] = useState('')
    const {operatorId} = useContext(AuthContext)

    
    
    let datos = {}

    if (prod.active){
        datos = {
        
            operatorId:operatorId,
            name: prod.name,
            MSU: prod.MSU,
            price: prod.price,
            stock: prod.stock,
            MDPrice: prod.MDPrice,
            MDPercentage: prod.MDPercentage,
            active: false
        }
        msj = 'producto desactivado exitosamente'
    }else{
        datos = {
        
            operatorId:operatorId,
            name: prod.name,
            MSU: prod.MSU,
            price: prod.price,
            stock: prod.stock,
            MDPrice: prod.MDPrice,
            MDPercentage: prod.MDPercentage,
            active: true
        }
        msj = 'producto activado exitosamente'
    }


    const options = {
        method: 'PUT',
        headers: { 'Content-type': 'application/json'},
        data: JSON.stringify(datos),
        url: `https://us-central1-cloud-sales-da995.cloudfunctions.net/app/api/products/${prod.id}`,
       
    }
    
    const click = async () => {
        
        try {
            const response = await axios(options)
            setRes(response.data);
            loading(true)
            exito(msj)
            
          } catch {
            setRes("Algo salió mal");
          }

    }

    if(prod.active){
        return(
        <button className='btn btn-secondary w-25' onClick={click}>
            <i className='fas fa-eye-slash mr-2'/>
            Deshabilitar
            

        </button>
        )
    }else{
        return(
            <button className='btn btn-primary w-25' onClick={click}>
                <i className='fas fa-eye mr-2'/>
                Habilitar
                
    
            </button>
            )

    }
 
}

export default BtnHabi
import React from 'react'
import './useSelectOptionsToJson.css'

export function useSelectOptionsToJson(options, dataName, dataToStore, setDataToStore) {
    
    if (!Array.isArray(options)) {
        return(
            <select defaultValue='' onChange={(e)=>setDataToStore({...dataToStore, [dataName]:e.target.value})}>
                <option disabled value=''>No hay datos disponibles</option>
            </select>
        )
        
    }
    return (
        <select defaultValue='' onChange={(e)=>setDataToStore({...dataToStore, [dataName]:e.target.value})} >
            <option value='' disabled>Selecciona una opción...</option>
            {
                options.map((option, index)=>{
                    return <option key={index} value={option.toString()}>{option.toString()}</option>
                })
            }
        </select>
    )
}

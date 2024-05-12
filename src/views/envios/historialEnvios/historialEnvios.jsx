import React from 'react'
import HistoryEnvioCard from '../../../components/historyEnvioCard/historyEnvioCard'
import envios from '../../../data/envios.json'

export default function HistorialEnvios() {
  return (
    <div>
      {
        envios.envios.map((envio)=>{
          return <HistoryEnvioCard envio={envio}/>
        })
      }
    </div>
  )
}
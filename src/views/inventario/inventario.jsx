import { useState } from "react";
import BarraDeBusqueda from "../../components/barraDeBusqueda/barraDeBusqueda";
import ItemCardsContainer from "../../components/itemCardsContainer/itemCardsContainer";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import productos from "../../data/productos.json"

export default function Inventario() {
    const [busqueda, setBusqueda] = useState('')
    return (
        <>
            <SectionTitle title='Inventario'/>
            <BarraDeBusqueda setBusqueda={setBusqueda}/>
            <p>Escribe el nombre, categoría, fabricante, stock, garantía o precio, para buscar tus productos.</p>
            <ItemCardsContainer itemsData={productos} filtroDeBusqueda={busqueda}/>
        </>
    )
}
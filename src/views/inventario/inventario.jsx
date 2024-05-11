import { useState } from "react";
import BarraDeBusqueda from "../../components/barraDeBusqueda/barraDeBusqueda";
import ItemCardsContainer from "../../components/itemCardsContainer/itemCardsContainer";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import items from "../../data/items.json"

export default function Inventario() {
    const [itemSelected, setItemSelected] = useState('')
    return (
        <>
            <SectionTitle title='Inventario'/>
            <BarraDeBusqueda/>
            <ItemCardsContainer itemsData={items} setItemSelected={setItemSelected}/>
        </>
    )
}
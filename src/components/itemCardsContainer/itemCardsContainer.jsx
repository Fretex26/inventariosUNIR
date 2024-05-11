import React from 'react';
import ItemCard from '../itemCard/itemCard';
import './itemCardsContainer.css'

export default function ItemCardsContainer({ itemsData }) {
    const {productos} = itemsData

    if (!Array.isArray(productos)) {
        return <div className='itemCardsContainer'>No hay datos disponibles</div>;
    }

    return (
        <div className='itemCardsContainer'>
            {productos.map((item, index) => (
                <ItemCard key={index} {...item} />
            ))}
        </div>
    );
}

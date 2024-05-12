import React from 'react';
import ItemCard from '../itemCard/itemCard';
import './itemCardsContainer.css'

export default function ItemCardsContainer({ itemsData, filtroDeBusqueda }) {
    const {productos} = itemsData

    if (!Array.isArray(productos)) {
        return <div className='itemCardsContainer'>No hay datos disponibles</div>;
    }

    const productsFiltered = productos.filter(product => (
        product.name.toLowerCase().includes(filtroDeBusqueda.toLowerCase()) ||
        product.category.toLowerCase().includes(filtroDeBusqueda.toLowerCase()) ||
        product.maker.toLowerCase().includes(filtroDeBusqueda.toLowerCase()) ||
        product.stock.toString().includes(filtroDeBusqueda.toLowerCase()) ||
        product.warranty.toLowerCase().includes(filtroDeBusqueda.toLowerCase()) ||
        product.price.toString().includes(filtroDeBusqueda.toLowerCase()) 
    ))

    return (
        <div className='itemCardsContainer'>
            {productsFiltered.map((item, index) => (
                <ItemCard key={index} {...item} />
            ))}
        </div>
    );
}

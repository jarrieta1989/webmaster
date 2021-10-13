import React from 'react'

const CardRopa = ({ nombrePrenda, imagen}) => {
    return (
        <li className='breedCard'>
            <div className= 'contenedorImagen'>
                <img src={imagen} alt={nombrePrenda}/>
            </div>
            <span className='breedTitle'>{nombrePrenda}</span> 
        </li>
    )
}

export default CardRopa

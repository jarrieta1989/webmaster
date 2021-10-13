import React from 'react'

const CardRopa = ({ nombrePrenda, imagen}) => {
    return (
        <li className='breedCard1'>
            <div className= 'contenedorImagen1'>
                <img src={imagen} alt={nombrePrenda}/>
            </div>
            {/* <span className='breedTitle'>{nombrePrenda}</span> */}
        </li>
    )
}

export default CardRopa

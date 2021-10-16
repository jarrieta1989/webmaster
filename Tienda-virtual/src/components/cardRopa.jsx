import React from 'react'
import '../styles/home.css'

const CardRopa = ({imagen}) => {
    return (
        <li className='breedCard1'>
            <div className= 'contenedorImagen1'>
                <img src={imagen}/>
            </div>
        </li>
    )
}

export default CardRopa

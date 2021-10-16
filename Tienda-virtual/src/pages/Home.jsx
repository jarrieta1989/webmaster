import React from 'react'
import CardRopa from '../components/cardRopa'
import jean from '../media/jean.jpg'
import pantalon from '../media/pantalon.jpg'
import zapatos from '../media/zapatos.jpg'
import pantalonbl from '../media/pantalonbl.jpg'
import vestido from '../media/vestido.jpg'
import vestidong from '../media/vestidong.jpg'
import traje from '../media/traje.jpeg'
import hombre from '../media/hombre.jpeg'
import formal from '../media/formal.jpeg'
import sport from '../media/sport.jpg'
import vintage from '../media/vintage.jpg'
import nike from '../media/nike.jpeg'
import yellow from '../media/yellow.jpg'
import rojo from '../media/rojo.jpg'

const Home = () => {
    return (
        <main className="contenedorCards">
           <section>
               <ul className="breedCardContainer1">
               <CardRopa imagen={traje} />
               <CardRopa imagen={hombre} />
               <CardRopa imagen={formal} />
               <CardRopa imagen={sport} />
               <CardRopa imagen={vintage} />
               <CardRopa imagen={nike} />
               <CardRopa imagen={yellow} />
               </ul>
            </section>  

            <br/> 
            
            <section>
               <ul className="breedCardContainer1">
               <CardRopa imagen={jean} />
               <CardRopa imagen={pantalon} />
               <CardRopa imagen={zapatos} />
               <CardRopa imagen={pantalonbl} />
               <CardRopa imagen={vestido} />
               <CardRopa imagen={vestidong} />
               <CardRopa imagen={rojo} />
               </ul>
          
           </section>
        </main>
    )
}

export default Home

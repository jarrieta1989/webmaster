import React from 'react'
import CardRopa from '../components/cardRopa'
import '../styles/home.css'
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

const Home = () => {
    return (
        <main>
           <section>
               <ul className="breedCardContainer1">
               <CardRopa imagen={jean} />
               <CardRopa imagen={pantalon} />
               <CardRopa imagen={zapatos} />
               <CardRopa imagen={pantalonbl} />
               <CardRopa imagen={vestido} />
               <CardRopa imagen={vestidong} />
               
               </ul>
           </section>
           <br/>
           <section>
               <ul className="breedCardContainer1">
               <CardRopa imagen={traje} />
               <CardRopa imagen={hombre} />
               <CardRopa imagen={formal} />
               <CardRopa imagen={sport} />
               <CardRopa imagen={vintage} />
               <CardRopa imagen={nike} />
               </ul>
           </section>
        </main>
    )
}

export default Home

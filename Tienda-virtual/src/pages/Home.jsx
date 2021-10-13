import React from 'react'
import CardRopa from '../components/cardRopa'
import '../styles/home.css'
import jean from '../media/jean.jpg'
import pantalon from '../media/pantalon.jpg'
import zapatos from '../media/zapatos.jpg'

const Home = () => {
    return (
        <main>
           <section>
               <ul className="breedCardContainer1">
               <CardRopa imagen={jean} />
               <CardRopa imagen={pantalon} />
               <CardRopa imagen={zapatos} />
               <CardRopa imagen={zapatos} />
               <CardRopa imagen={zapatos} />
               <CardRopa imagen={zapatos} />
               
               </ul>
           </section>
           <br/>
           <section>
               <ul className="breedCardContainer1">
               <CardRopa imagen={jean} />
               <CardRopa imagen={pantalon} />
               <CardRopa imagen={zapatos} />
               <CardRopa imagen={zapatos} />
               <CardRopa imagen={zapatos} />
               <CardRopa imagen={zapatos} />
               </ul>
           </section>
        </main>
    )
}

export default Home

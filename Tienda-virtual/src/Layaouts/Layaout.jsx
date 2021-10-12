import Navbar from '../components/navbar'
import React from 'react'
import Footer from '../components/Footer'

const Layaout = ({children}) => {
    return (
        <div className= 'mainContainer'>
            <Navbar/>
            <main> {children}</main>
            <Footer/>
        </div>
    
   );
};

export default Layaout;

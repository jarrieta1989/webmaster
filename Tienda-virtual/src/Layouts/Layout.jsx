import Navbar from '../components/Navbar'
import React from 'react'
import Footer from '../components/Footer'

const Layaout = ({children}) => {
    return (
        <div className= 'mainContainer1'>
            <Navbar/>
            <main> {children}</main>
            <Footer/>
        </div>
    
   );
};

export default Layaout;

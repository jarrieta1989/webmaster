import Navbar2 from '../components/Navbar2'
import React from 'react'
import Footer from '../components/Footer'

const Layaout2 = ({children}) => {
    return (
        <div className= 'mainContainer1'>
            <Navbar2/>
            <main> {children}</main>
            <Footer/>
        </div>
   );
};

export default Layaout2;        
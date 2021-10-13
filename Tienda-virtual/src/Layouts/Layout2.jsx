import Navbar2 from '../components/Navbar2'
import React from 'react'
import Footer from '../components/footer'

const Layaout2 = ({children}) => {
    return (
        <div className= 'mainContainer'>
            <Navbar2/>
            <main> {children}</main>
            <Footer/>
        </div>
   );
};

export default Layaout2;        
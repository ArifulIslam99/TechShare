import React from 'react';
import notfound from '../../images/404.webp'
import Footer from '../Shared/Footer/Footer';

const Notfound = () => {
    return (
        <div>
            <img className='img-fluid' src={notfound} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Notfound;
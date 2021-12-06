import React from 'react';

const Footer = () => {

    const footer = {
        backgroundColor: 'black',
        width:'100%',
        bottom: 0,
        
    }
    return (
        <div style={footer}>
            <footer className="text-secondary p-2">All Rights Reserved 2021 © TechShare Bangladesh</footer>
        </div>
    );
};

export default Footer;
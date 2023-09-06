// import React from 'react';


const Footer = () => {
    return (
        <footer>
            <div className="contactIcons">
                <a href="https://dewwwe.com/" className="icon solid style2 fa-link"></a>
                <a href="tel:+330769201157" className="icon solid style2 fa-phone"></a>
                <a href="mailto:nazliozcubukcuoglu@gmail.com" className="icon solid style2 fa-envelope"></a>
                <a href="https://linkedin.com/in/nazli-oz/" className="icon brands style2 fa-linkedin"></a>
            </div>
            <p>&copy; 2023. made by Nazli with ♥</p>
        </footer>
    )
}



export const Menu = () => {
    return (
        <header >
            <nav>
                <a href="/">Home</a>
                <a href="#Projects">Projects</a>
                <button className="button Secondary"><a href=""> Contact</a></button>
            </nav>
        </header >

    )
}

export default Footer

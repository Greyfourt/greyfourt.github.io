'use client'

import Icon from "./Icons"
import { usePathname } from "next/navigation";


const Footer = () => {
    return (
        <footer>
            <div className="contactIcons">
                <a href="https://dewwwe.com/"><Icon
                    type="link" />
                </a>
                <a href="tel:+330769201157"><Icon
                    type="phone" />
                </a>
                <a href="mailto:nazliozcubukcuoglu@gmail.com">
                    <Icon type="mail" />
                </a>
                <a href="https://linkedin.com/in/nazli-oz/"> <Icon type="linkedin" />
                </a>
            </div>
            <p>&copy; 2023. made by Nazli with ♥</p>
        </footer>
    )
}

export const Menu = () => {

    const currentRoute = usePathname()

    const menuItem = () => {

    }

    return (
        <header >
            <nav>
                <a href="/" className={currentRoute === "/" ? "selected" : ""}>Home</a>
                <a href="/projects" className={currentRoute === "/" ? "selected" : ""}>Projects</a>
                <button className={`button Secondary ${currentRoute === "/" ? "selected" : ""}`}><a href=""> Contact</a></button>
            </nav>
        </header >
    )
}

export default Footer

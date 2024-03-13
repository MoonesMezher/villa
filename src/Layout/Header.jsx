import { useState } from "react";
import TopSection from "../components/TopSection/TopSection";
import NavBar from "../components/NavBar/NavBar";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const links = [
        {
            href: '/', name: 'Home'
        },
        {
            href: '/properties', name: 'Properties'
        },
        {
            href: '/single-property', name: 'Property Details'
        },
        {
            href: '/contact-us', name: 'Contact Us'
        }
    ]; 

    window.onscroll = function() { 
        setTimeout(() => {
            setIsScroll(window.scrollY > 0)
        }, 500);
    };

    return (
        <header className={`sticky top-0 left-0 z-50 bg-white ${isScroll && 'shadow-sm shadow-neutral-400'}`}>
            <TopSection isScroll={isScroll}/>
            <hr/>
            <NavBar isVisible={isVisible} setIsVisible={setIsVisible} links={links} logo={'VILLA'} />
        </header>
    )
}

export default Header
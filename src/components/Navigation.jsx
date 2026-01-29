import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsSunFill, BsMoonFill, BsGlobe } from 'react-icons/bs';
import chargingIcon from '/charging.png';
import './Navigation.css';

const Navigation = ({ t, language, setLanguage, theme, setTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand href="#home" className="brand">
                    <img src={chargingIcon} alt="Logo" className="brand-logo" />
                    <span className="brand-text">EV Calculator</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#calculator">{t.nav.calculator}</Nav.Link>
                        <Nav.Link href="#vehicles">{t.nav.vehicles}</Nav.Link>
                        <Nav.Link href="#prices">{t.nav.prices}</Nav.Link>

                        <Button
                            variant="outline-light"
                            size="sm"
                            className="ms-3 icon-btn"
                            onClick={toggleLanguage}
                            title={t.nav.language}
                        >
                            <BsGlobe /> {language.toUpperCase()}
                        </Button>

                        <Button
                            variant="outline-light"
                            size="sm"
                            className="ms-2 icon-btn"
                            onClick={toggleTheme}
                            title={t.nav.theme}
                        >
                            {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;

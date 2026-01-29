import { Container, Row, Col } from 'react-bootstrap';
import { BsLightningChargeFill, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import './Footer.css';

const Footer = ({ t }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="g-4">
                    <Col lg={4}>
                        <div className="footer-brand">
                            <img src="/charging.png" alt="Logo" className="footer-logo" />
                            <h5>EV Calculator</h5>
                        </div>
                        <p className="footer-description">
                            {t.footer.description}
                        </p>
                    </Col>

                    <Col lg={4}>
                        <h6 className="footer-title">{t.nav.calculator}</h6>
                        <ul className="footer-links">
                            <li><a href="#calculator">{t.nav.calculator}</a></li>
                            <li><a href="#vehicles">{t.nav.vehicles}</a></li>
                            <li><a href="#prices">{t.nav.prices}</a></li>
                        </ul>
                    </Col>

                    <Col lg={4}>
                        <h6 className="footer-title">Social</h6>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="GitHub">
                                <BsGithub size={24} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <BsTwitter size={24} />
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <BsLinkedin size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="footer-divider" />

                <Row>
                    <Col className="text-center">
                        <p className="footer-copyright">
                            © {currentYear} EV Calculator. {t.footer.rights}
                        </p>
                        <p className="footer-disclaimer">
                            {t.footer.disclaimer}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

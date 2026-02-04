import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowDown } from 'react-icons/bs';
import heroImage from '/hero.jpg';
import './Hero.css';

const Hero = ({ t }) => {
    const scrollToCalculator = () => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center min-vh-100">
                    <Col lg={6} className="hero-content">
                        <h1 className="hero-title">
                            {t.hero.title}
                            <span className="hero-subtitle-inline">{t.hero.subtitle}</span>
                        </h1>
                        <p className="hero-description">
                            {t.hero.description}
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            className="hero-cta"
                            onClick={scrollToCalculator}
                        >
                            {t.hero.cta}
                            <BsArrowDown className="ms-2" />
                        </Button>
                    </Col>
                    <Col lg={6} className="hero-image-col">
                        <div className="hero-image-wrapper">
                            <img
                                src={heroImage}
                                alt="Toyota bZ4X"
                                className="hero-image"
                            />
                            <div className="hero-image-glow"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="hero-wave">
                <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="var(--wave-color)"
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;

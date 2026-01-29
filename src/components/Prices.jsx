import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsLightningChargeFill, BsFuelPumpFill, BsClock, BsHouseFill } from 'react-icons/bs';
import './Prices.css';

const Prices = ({ t }) => {
    return (
        <section id="prices" className="prices-section">
            <Container>
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">{t.prices.title}</h2>
                    <p className="section-subtitle">{t.prices.subtitle}</p>
                </div>

                {/* Electric Charging */}
                <div className="mb-5">
                    <h3 className="price-category-title">
                        <BsLightningChargeFill className="me-2 text-primary" />
                        {t.prices.charging.title}
                    </h3>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="price-card charging-card h-100">
                                <Card.Body>
                                    <div className="price-icon home-charging">
                                        <BsHouseFill size={28} />
                                    </div>
                                    <Card.Title className="price-title">
                                        {t.prices.charging.home.title}
                                    </Card.Title>
                                    <div className="price-amount">{t.prices.charging.home.price}</div>
                                    <div className="price-time">
                                        <BsClock className="me-2" />
                                        {t.prices.charging.home.time}
                                    </div>
                                    <p className="price-description">
                                        {t.prices.charging.home.description}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="price-card charging-card featured h-100">
                                <div className="featured-badge">Popular</div>
                                <Card.Body>
                                    <div className="price-icon medium-charging">
                                        <BsLightningChargeFill size={28} />
                                    </div>
                                    <Card.Title className="price-title">
                                        {t.prices.charging.medium.title}
                                    </Card.Title>
                                    <div className="price-amount">{t.prices.charging.medium.price}</div>
                                    <div className="price-time">
                                        <BsClock className="me-2" />
                                        {t.prices.charging.medium.time}
                                    </div>
                                    <p className="price-description">
                                        {t.prices.charging.medium.description}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="price-card charging-card h-100">
                                <Card.Body>
                                    <div className="price-icon fast-charging">
                                        <BsLightningChargeFill size={28} />
                                    </div>
                                    <Card.Title className="price-title">
                                        {t.prices.charging.fast.title}
                                    </Card.Title>
                                    <div className="price-amount">{t.prices.charging.fast.price}</div>
                                    <div className="price-time">
                                        <BsClock className="me-2" />
                                        {t.prices.charging.fast.time}
                                    </div>
                                    <p className="price-description">
                                        {t.prices.charging.fast.description}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* Fuel Prices */}
                <div>
                    <h3 className="price-category-title">
                        <BsFuelPumpFill className="me-2 text-danger" />
                        {t.prices.fuel.title}
                    </h3>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="price-card fuel-card h-100">
                                <Card.Body>
                                    <div className="price-icon fuel-icon">
                                        <BsFuelPumpFill size={28} />
                                    </div>
                                    <Card.Title className="price-title">
                                        {t.prices.fuel.gasoline95.title}
                                    </Card.Title>
                                    <div className="price-amount">{t.prices.fuel.gasoline95.price}</div>
                                    <p className="price-description">
                                        {t.prices.fuel.gasoline95.description}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="price-card fuel-card h-100">
                                <Card.Body>
                                    <div className="price-icon fuel-icon">
                                        <BsFuelPumpFill size={28} />
                                    </div>
                                    <Card.Title className="price-title">
                                        {t.prices.fuel.gasoline98.title}
                                    </Card.Title>
                                    <div className="price-amount">{t.prices.fuel.gasoline98.price}</div>
                                    <p className="price-description">
                                        {t.prices.fuel.gasoline98.description}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="price-card fuel-card h-100">
                                <Card.Body>
                                    <div className="price-icon fuel-icon">
                                        <BsFuelPumpFill size={28} />
                                    </div>
                                    <Card.Title className="price-title">
                                        {t.prices.fuel.diesel.title}
                                    </Card.Title>
                                    <div className="price-amount">{t.prices.fuel.diesel.price}</div>
                                    <p className="price-description">
                                        {t.prices.fuel.diesel.description}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Prices;

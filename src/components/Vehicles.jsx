import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { BsLightningChargeFill, BsFuelPumpFill, BsSpeedometer2 } from 'react-icons/bs';
import { electricVehicles, gasolineVehicles } from '../data/vehicles';
import './Vehicles.css';

const Vehicles = ({ t }) => {
    return (
        <section id="vehicles" className="vehicles-section">
            <Container>
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">{t.vehicles.title}</h2>
                    <p className="section-subtitle">{t.vehicles.subtitle}</p>
                </div>

                {/* Electric Vehicles */}
                <div className="mb-5">
                    <h3 className="vehicle-category-title">
                        <BsLightningChargeFill className="me-2 text-primary" />
                        {t.vehicles.electric}
                    </h3>
                    <Row className="g-4">
                        {electricVehicles.map(vehicle => (
                            <Col key={vehicle.id} md={6} lg={3}>
                                <Card className="vehicle-card electric-card h-100">
                                    <div className="vehicle-image-container">
                                        <Card.Img variant="top" src={`${import.meta.env.BASE_URL}${vehicle.image.startsWith('/') ? vehicle.image.slice(1) : vehicle.image}`} className="vehicle-image" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="vehicle-name">{vehicle.name}</Card.Title>
                                        <div className="vehicle-stats">
                                            <div className="stat-item consumption-highlight">
                                                <BsSpeedometer2 className="stat-icon" />
                                                <div>
                                                    <div className="stat-label">{t.vehicles.consumption}</div>
                                                    <div className="stat-value">{vehicle.consumption} <span className="unit">kWh/100km</span></div>
                                                </div>
                                            </div>
                                            <div className="stat-item">
                                                <div>
                                                    <div className="stat-label">{t.vehicles.range}</div>
                                                    <div className="stat-value">{vehicle.range} km</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Gasoline Vehicles */}
                <div>
                    <h3 className="vehicle-category-title">
                        <BsFuelPumpFill className="me-2 text-danger" />
                        {t.vehicles.gasoline}
                    </h3>
                    <Row className="g-4">
                        {gasolineVehicles.map(vehicle => (
                            <Col key={vehicle.id} md={6} lg={3}>
                                <Card className="vehicle-card gas-card h-100">
                                    <div className="vehicle-image-container">
                                        <Card.Img variant="top" src={`${import.meta.env.BASE_URL}${vehicle.image.startsWith('/') ? vehicle.image.slice(1) : vehicle.image}`} className="vehicle-image" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="vehicle-name">{vehicle.name}</Card.Title>
                                        <div className="vehicle-stats">
                                            <div className="stat-item consumption-highlight gas">
                                                <BsSpeedometer2 className="stat-icon" />
                                                <div>
                                                    <div className="stat-label">{t.vehicles.consumption}</div>
                                                    <div className="stat-value">{vehicle.consumption} <span className="unit">L/100km</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Vehicles;

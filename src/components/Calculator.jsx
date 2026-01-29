import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { BsLightningChargeFill, BsFuelPumpFill, BsPiggyBankFill } from 'react-icons/bs';
import './Calculator.css';

const Calculator = ({ t }) => {
    const [formData, setFormData] = useState({
        kilometers: 100000,
        electricCost: 0.12,
        gasolineCost: 1.45,
        electricConsumption: 13.9,
        gasConsumption: 7.5,
        planMoves: false,
        scrappage: false
    });

    const [results, setResults] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'planMoves' && !checked) {
            setFormData(prev => ({
                ...prev,
                planMoves: false,
                scrappage: false
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : parseFloat(value) || 0
            }));
        }
    };

    const calculateSavings = () => {
        const electricTotal = (formData.kilometers / 100) * formData.electricConsumption * formData.electricCost;
        const gasTotal = (formData.kilometers / 100) * formData.gasConsumption * formData.gasolineCost;
        const baseSavings = gasTotal - electricTotal;

        let planMovesBonus = 0;
        let scrappageBonus = 0;

        if (formData.planMoves) {
            planMovesBonus = 4000;
            if (formData.scrappage) {
                scrappageBonus = 3000;
            }
        }

        const totalSavings = baseSavings + planMovesBonus + scrappageBonus;

        setResults({
            electricTotal,
            gasTotal,
            baseSavings,
            planMovesBonus,
            scrappageBonus,
            totalSavings
        });
    };

    const resetForm = () => {
        setFormData({
            kilometers: 100000,
            electricCost: 0.12,
            gasolineCost: 1.45,
            electricConsumption: 13.9,
            gasConsumption: 7.5,
            planMoves: false,
            scrappage: false
        });
        setResults(null);
    };

    return (
        <section id="calculator" className="calculator-section">
            <Container>
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">{t.calculator.title}</h2>
                    <p className="section-subtitle">{t.calculator.subtitle}</p>
                </div>

                <Row className="g-4">
                    <Col lg={6}>
                        <Card className="calculator-card h-100">
                            <Card.Body>
                                <h4 className="mb-4">{t.calculator.title}</h4>

                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>{t.calculator.kilometersLabel}</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="kilometers"
                                            value={formData.kilometers}
                                            onChange={handleChange}
                                            min="0"
                                            step="1000"
                                        />
                                    </Form.Group>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <BsLightningChargeFill className="me-2 text-primary" />
                                                    {t.calculator.electricCostLabel}
                                                </Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="electricCost"
                                                    value={formData.electricCost}
                                                    onChange={handleChange}
                                                    min="0"
                                                    step="0.01"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <BsFuelPumpFill className="me-2 text-danger" />
                                                    {t.calculator.gasolineCostLabel}
                                                </Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="gasolineCost"
                                                    value={formData.gasolineCost}
                                                    onChange={handleChange}
                                                    min="0"
                                                    step="0.01"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>{t.calculator.electricConsumptionLabel}</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="electricConsumption"
                                                    value={formData.electricConsumption}
                                                    onChange={handleChange}
                                                    min="0"
                                                    step="0.1"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>{t.calculator.gasConsumptionLabel}</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="gasConsumption"
                                                    value={formData.gasConsumption}
                                                    onChange={handleChange}
                                                    min="0"
                                                    step="0.1"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className="plan-moves-section p-3 mb-3">
                                        <Form.Check
                                            type="checkbox"
                                            name="planMoves"
                                            id="planMoves"
                                            label={
                                                <span>
                                                    {t.calculator.planMoves}
                                                    <a
                                                        href="https://www.idae.es/ayudas-y-financiacion/para-movilidad-y-vehiculos/programa-moves-iii"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="ms-2 text-decoration-none"
                                                    >
                                                        ({t.calculator.planMovesInfo})
                                                    </a>
                                                </span>
                                            }
                                            checked={formData.planMoves}
                                            onChange={handleChange}
                                            className="mb-2"
                                        />

                                        <Form.Check
                                            type="checkbox"
                                            name="scrappage"
                                            id="scrappage"
                                            label={`${t.calculator.scrappage} (${t.calculator.scrappageBonus})`}
                                            checked={formData.scrappage}
                                            onChange={handleChange}
                                            disabled={!formData.planMoves}
                                            className="ms-4"
                                        />
                                    </div>

                                    <div className="d-grid gap-2">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            onClick={calculateSavings}
                                            className="calculate-btn"
                                        >
                                            <BsPiggyBankFill className="me-2" />
                                            {t.calculator.calculate}
                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            onClick={resetForm}
                                        >
                                            {t.calculator.reset}
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="results-card h-100">
                            <Card.Body>
                                <h4 className="mb-4">{t.calculator.results}</h4>

                                {results ? (
                                    <div className="results-content">
                                        <div className="result-item mb-3">
                                            <div className="result-label">
                                                <BsLightningChargeFill className="me-2 text-primary" />
                                                {t.calculator.electricTotal}
                                            </div>
                                            <div className="result-value text-primary">
                                                €{results.electricTotal.toFixed(2)}
                                            </div>
                                        </div>

                                        <div className="result-item mb-3">
                                            <div className="result-label">
                                                <BsFuelPumpFill className="me-2 text-danger" />
                                                {t.calculator.gasTotal}
                                            </div>
                                            <div className="result-value text-danger">
                                                €{results.gasTotal.toFixed(2)}
                                            </div>
                                        </div>

                                        <hr />

                                        <div className="result-item mb-3">
                                            <div className="result-label fw-bold">
                                                {t.calculator.totalSavings}
                                            </div>
                                            <div className="result-value fw-bold text-success">
                                                €{results.baseSavings.toFixed(2)}
                                            </div>
                                        </div>

                                        {results.planMovesBonus > 0 && (
                                            <div className="result-item mb-2">
                                                <div className="result-label text-muted">
                                                    + {t.calculator.planMovesBonus}
                                                </div>
                                                <div className="result-value text-success">
                                                    €{results.planMovesBonus.toFixed(2)}
                                                </div>
                                            </div>
                                        )}

                                        {results.scrappageBonus > 0 && (
                                            <div className="result-item mb-3">
                                                <div className="result-label text-muted">
                                                    + {t.calculator.scrappageBonus}
                                                </div>
                                                <div className="result-value text-success">
                                                    €{results.scrappageBonus.toFixed(2)}
                                                </div>
                                            </div>
                                        )}

                                        {(results.planMovesBonus > 0 || results.scrappageBonus > 0) && (
                                            <>
                                                <hr />
                                                <div className="result-item final-savings">
                                                    <div className="result-label fw-bold fs-5">
                                                        <BsPiggyBankFill className="me-2" />
                                                        {t.calculator.finalSavings}
                                                    </div>
                                                    <div className="result-value fw-bold fs-4 text-success">
                                                        €{results.totalSavings.toFixed(2)}
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        <Alert variant="info" className="mt-4 mb-0">
                                            <small>{t.footer.disclaimer}</small>
                                        </Alert>
                                    </div>
                                ) : (
                                    <div className="text-center text-muted py-5">
                                        <BsPiggyBankFill size={64} className="mb-3 opacity-25" />
                                        <p>{t.calculator.subtitle}</p>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Calculator;

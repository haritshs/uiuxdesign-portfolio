import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom';
import mango from '../assets/mango.png';
import staycation from '../assets/staycation.png';
import React from 'react';

function Work() {
    const [goToFullWorks, setGoToFullWorks] = React.useState(false);

    if (goToFullWorks) {
        return <Navigate to="/works"/>
    }
  return (
    <div className="scroll-container">
    <section id="work" className="scroll-area">
        <div class="background-text">
            <div class="line">Port</div>
            <div class="line">Folio</div>
        </div>
            <div className="work">
                <Container>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Title className="title">MANGO - FAHION LANDING PAGE</Card.Title>
                                    <Card.Text className="subtitle">
                                    WEB DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={mango} />
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">STAYCATION - FAHION LANDING PAGE</Card.Title>
                                    <Card.Text className="subtitle">
                                    WEB DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={staycation} />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">MANGO - FAHION LANDING PAGE</Card.Title>
                                    <Card.Text className="subtitle">
                                    WEB DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={mango} />
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">STAYCATION - FAHION LANDING PAGE</Card.Title>
                                    <Card.Text className="subtitle">
                                    WEB DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={staycation} />
                            </Card>
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <Button className="btn-more" onClick={() => {setGoToFullWorks(true); }}>View More</Button>
                    </div>
                    
                </Container>
            </div>
    </section>
    </div>
  );
}

export default Work;
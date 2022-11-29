import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import mango from '../assets/mango.png';
import staycation from '../assets/staycation.png';
import slevess from '../assets/slevees.png';
import sneaker from '../assets/sneakers.png';
import level from '../assets/level-up.png';
import jobfinder from '../assets/jobfinder.png';
import bank from '../assets/bankapp.png';
import todolist from '../assets/todolist.png';
import seaonic from '../assets/seasonic.png';
import money from '../assets/money.png';
import letsfly from '../assets/letsfly.png';
import japan from '../assets/japanese-food.png';

const FullWorks = () => {
    return (
        <section id="fullwork" className="scroll-area">
        <div class="background-text">
            <div class="line">Port</div>
            <div class="line">Folio</div>
        </div>
            <div className="fullwork">
                <Container>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Title className="title">THETA SLEVEES - NFT LANDING PAGE</Card.Title>
                                    <Card.Text className="subtitle">
                                    WEB DESIGN \ HTML CSS BOOTSTRAP 5
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={slevess} />
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">SNEAKERS - MOILE APP DESIGN</Card.Title>
                                    <Card.Text className="subtitle">
                                    MOBILE APP DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={sneaker} />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">LEVEL UP - ONLINE STUDY CLASS APP</Card.Title>
                                    <Card.Text className="subtitle">
                                    UI/UX DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={level} />
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">JOB FINDER - MOBILE APP DESIGN</Card.Title>
                                    <Card.Text className="subtitle">
                                    MOBILE APP DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={jobfinder} />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">MOBILE BANK - MOBILE APP DESIGN</Card.Title>
                                    <Card.Text className="subtitle">
                                    MOBILE APP DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={bank} />
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">TODO LIST - MOBILE APP DESIGN</Card.Title>
                                    <Card.Text className="subtitle">
                                    MOBILE APP DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={todolist} />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">SEASONIC - NFT MARKETPLACE</Card.Title>
                                    <Card.Text className="subtitle">
                                    MOBILE APP DESIGN
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={seaonic} />
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">MONEY - E WALLET APP</Card.Title>
                                    <Card.Text className="subtitle">
                                    UI/UX \ FLUTTER
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={money} />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">LETSFLY (TRAVEL) - MOBILE APP </Card.Title>
                                    <Card.Text className="subtitle">
                                    UI/UX \ FLUTTER
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={letsfly} />
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">JAPANESE FOOD - MOBILE APP</Card.Title>
                                    <Card.Text className="subtitle">
                                    UI/UX \ FLUTTER
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={japan} />
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
    </section>
    )
}

export default FullWorks
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
import sushi from '../assets/sushiku.png';
import nft from '../assets/nft.png';
import React, { useRef, useEffect} from "react";
import { Navigate } from 'react-router-dom';

const FullWorks = () => {
    const [goToHome, setGoToHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to="/"/>
    };
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
                                    <div data-aos="fade-down">
                                        <Card.Title className="title">MANGO - FAHION LANDING PAGE</Card.Title>
                                    </div>
                                    <div data-aos="fade-down">
                                        <Card.Text className="subtitle">WEB DESIGN</Card.Text>
                                    </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={mango} />
                                </div>
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <div data-aos="fade-down">
                                        <Card.Title className="title">STAYCATION - TRAVEL WEB APP DESIGN</Card.Title>
                                    </div>
                                    <div data-aos="fade-down">
                                        <Card.Text className="subtitle">WEB DESIGN</Card.Text>
                                    </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={staycation} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <div data-aos="fade-down">
                                        <Card.Title className="title">SUSHIKU - F&B LANDING PAGE</Card.Title>
                                    </div>
                                    <div data-aos="fade-down">
                                        <Card.Text className="subtitle"> WEB DESIGN \ HTML CSS BOOTSTRAP 5</Card.Text>
                                    </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={sushi} />
                                </div>
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <div data-aos="fade-down">
                                        <Card.Title className="title">NFT MARKETPLACE - WEB APP DESIGN</Card.Title>
                                    </div>
                                    <div data-aos="fade-down">
                                        <Card.Text className="subtitle">WEB DESIGN</Card.Text>
                                    </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={nft} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card className="card">
                                <Card.Body>
                                    <div data-aos="fade-down">
                                        <Card.Title className="title">THETA SLEVEES - NFT LANDING PAGE</Card.Title>
                                    </div>
                                    <div data-aos="fade-down">
                                        <Card.Text className="subtitle"> WEB DESIGN \ HTML CSS BOOTSTRAP 5 </Card.Text>
                                    </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={slevess} />
                                </div>
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">SNEAKERS - MOILE APP DESIGN</Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">MOBILE APP DESIGN </Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={sneaker} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">LEVEL UP - ONLINE STUDY CLASS APP</Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">UI/UX DESIGN </Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={level} />
                                </div>
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">JOB FINDER - MOBILE APP DESIGN</Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">MOBILE APP DESIGN </Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={jobfinder} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">MOBILE BANK - MOBILE APP DESIGN</Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">MOBILE APP DESIGN </Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={bank} />
                                </div>
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">TODO LIST - MOBILE APP DESIGN</Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">MOBILE APP DESIGN </Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={todolist} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">SEASONIC - NFT MARKETPLACE</Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">MOBILE APP DESIGN</Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={seaonic} />
                                </div>
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">MONEY - E WALLET APP</Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">UI/UX \ FLUTTER </Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={money} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">LETSFLY (TRAVEL) - MOBILE APP </Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">UI/UX \ FLUTTER</Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={letsfly} />
                                </div>
                            </Card>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                <div data-aos="fade-down">
                                    <Card.Title className="title">JAPANESE FOOD - MOBILE APP</Card.Title>
                                </div>
                                <div data-aos="fade-down">
                                    <Card.Text className="subtitle">UI/UX \ FLUTTER</Card.Text>
                                </div>
                                </Card.Body>
                                <div data-aos="zoom-in-up">
                                    <Card.Img variant="top" src={japan} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <Button className="btn-more" onClick={() => {setGoToHome(true); }}>Back</Button>
                    </div>
                </Container>
            </div>
    </section>
    )
}

export default FullWorks
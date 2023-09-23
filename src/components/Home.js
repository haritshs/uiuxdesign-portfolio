import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useRef, useEffect} from "react";
import mango from '../assets/mango.png';
import staycation from '../assets/staycation.png';
import sushi from '../assets/sushiku.png';
import nft from '../assets/nft.png';
import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom';
import profil from '../assets/profile.jpg';
import useScrollSnap from 'react-use-scroll-snap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 10 });

    const [goToFullWorks, setGoToFullWorks] = React.useState(false);

    if (goToFullWorks) {
        return <Navigate to="/works"/>
    };

    return (
        <div ref={scrollRef}>
            <div>
                <section id="home">
                    <div className="background-text">
                        <div className="line">Wel</div>
                        <div className="line">Come</div>
                    </div>
                    <div className="home">
                        <Container className="">
                            <Row className="row">
                                <Col className="col-3"></Col>
                                <Col className="col-9">
                                    <div data-aos="fade-down">
                                        <h3>HELLO, WELCOME TO MY PORTFOLIO 👋</h3>
                                    </div>
                                    <div data-aos="fade-down">
                                        <h1>HARITS HARU SUSENO</h1>
                                    </div>
                                    <div data-aos="fade-down">
                                        <h3>UI/UX DESIGNER</h3>
                                    </div>
                                    <div className="d-flex flex-row text-center mt-4">
                                        <div data-aos="zoom-in" className="rounded-logo me-3">
                                            <a href="https://www.instagram.com/designwithsen/" target="_blank" rel="noreferrer">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                                            </a>
                                        </div>
                                        <div data-aos="zoom-in" className="rounded-logo me-3">
                                            <a href="https://www.linkedin.com/in/haritsharususeno/" target="_blank" rel="noreferrer">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                            </a>
                                        </div>
                                        <div data-aos="zoom-in" className="rounded-logo">
                                            <a href="https://dribbble.com/haritshs" target="_blank" rel="noreferrer" >
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>

            <div>
                <section id="about">
                    <div className="background-text">
                        <div className="line">ab</div>
                        <div className="line">out</div>
                    </div>
                    <div className="about">
                        <Container className="">
                                <Row className="row">
                                    <Col className="col-3">
                                    </Col>
                                    <Col className="col-9">
                                        <div data-aos="fade-down">
                                            <h2 className="mb-3">HI, MY NAME IS HARITS</h2>
                                        </div>
                                        <div data-aos="fade-down">
                                            <p >Hi, my name is Harits Haru Suseno, "I am a recent graduate with a bachelor's degree in Computer Engineering, who has a deep passion for User Interface (UI) and User Experience (UX) design. I have been involved in several web and mobile application design and development projects. I am a creative individual who believes that good design can transform user experiences into something extraordinary. I am highly enthusiastic about learning and growing in the role of a UI/UX Designer, and I am ready to contribute to creating captivating and functional design solutions." Currently I'm working as a UI/UX Designer at PT. Lautan Natural Krimerindo since February 2023. I'm responsible for wireframes, visual design and interactive prototyping.</p>
                                        </div>
                                        <div data-aos="fade-down">
                                            <h2 className="mb-3">MY COMPETENCIES & SKILLS</h2>
                                        </div>
                                        <div data-aos="fade-down">
                                            <h3 className="mb-2">UI/UX DESIGNER</h3>
                                        </div>
                                        <div data-aos="fade-down">
                                            <p><span><h4>Design System</h4></span>Develop and maintain design guidelines and standards to ensure design consistency across products.</p>
                                            <p><span><h4>User Research</h4></span>Conduct user research to understand user behavior, needs, and preferences. Use this research to inform design decisions.</p>
                                            <p><span><h4>Wireframing and Prototyping</h4></span>Create wireframes, mockups, and interactive prototypes to visualize design concepts and user flows.</p>
                                            <p><span><h4>UI Design</h4></span>Design visually appealing and user-friendly interfaces for web and mobile applications. Ensure consistency in design elements such as typography, colors, and icons.</p>
                                            <p><span><h4>Usability Testing</h4></span>Conduct usability testing to gather feedback and iterate on designs to improve user experience.</p>
                                        </div>
                                        {/* <div data-aos="fade-down">
                                            <h3 className="mb-2">FRONTEND WEB DEVELOPER</h3>
                                        </div>
                                        <div data-aos="fade-down">
                                            <p>Implemented websites, or landing pages from concept through deployment. Build user-friendly, responsive apps for the browser. write code (HTML, JavaScript, CSS, Bootstrap).</p>
                                        </div>
                                        <div data-aos="fade-down">
                                            <h3 className="mb-2">FLUTTER DEVELOPER</h3>
                                        </div>
                                        <div data-aos="fade-down">
                                            <p>into high quality UI code, Dart programming language, Firebase, State Management Bloc.</p>
                                        </div> */}
                                        
                                    </Col>
                                </Row>
                        </Container>
                    </div>
                </section>
            </div>

            <div>
                <section id="work">
                    <div className="background-text">
                        <div className="line">Port</div>
                        <div className="line">Folio</div>
                    </div>
                    <div className="work">
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
                            <div className="text-center mt-5">
                                <Button className="btn-more" onClick={() => {setGoToFullWorks(true); }}>View More</Button>
                            </div>
                            
                            
                        </Container>
                    </div>
                </section>
            </div>

            <div>
                <section id="contact">
                    <div className="background-text">
                        <div className="line">Con</div>
                        <div className="line">Tact</div>
                    </div>
                    <div className="contact">
                        <Container>
                            <Row>
                                <Col className="col-6">
                                    <div data-aos="zoom-in-up" className="profile-pic text-center">
                                        <img src={profil} alt="Harits Suseno" className="img-fluid"/>
                                    </div>
                                </Col>
                                <Col className="col-6">
                                    <div data-aos="fade-down" className="mb-3">
                                        <h3 >I'D LOVE TO HEAR FROM YOU</h3>
                                    </div>
                                    <div data-aos="fade-down" className="mb-4">
                                        <p>I'm always open for interesting conversations, new projects and new challenges.</p>
                                    </div>
                                    <div data-aos="fade-down" className="mb-3">
                                        <h2 >Harits Haru Suseno</h2>
                                    </div>
                                    <div data-aos="fade-down" className="mb-4">
                                        <p>harits.hs@gmail.com</p>
                                    </div>
                                    <div className="d-flex flex-row text-center">
                                        <div data-aos="zoom-in" className="rounded-logo me-3">
                                            <a href="https://www.instagram.com/designwithsen/" target="_blank" rel="noreferrer">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                                            </a>
                                        </div>
                                        <div data-aos="zoom-in" className="rounded-logo me-3">
                                            <a href="https://www.linkedin.com/in/haritsharususeno/" target="_blank" rel="noreferrer">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                            </a>
                                        </div>
                                        <div data-aos="zoom-in" className="rounded-logo me-3">
                                            <a href="https://dribbble.com/haritshs" target="_blank" rel="noreferrer" >
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>
                                            </a>
                                        </div>
                                        <div data-aos="zoom-in" className="rounded-logo">
                                            <a href="https://github.com/haritshs" target="_blank" rel="noreferrer" >
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
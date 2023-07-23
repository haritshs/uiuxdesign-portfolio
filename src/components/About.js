import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="scroll-container">
        <section id="about" className="scroll-area">
            <div class="background-text">
                <div class="line">ab</div>
                <div class="line">out</div>
            </div>
            <div className="about">
                <Container className="">
                        <Row className="row">
                            <Col className="col-3">
                            </Col>
                            <Col className="col-9">
                                <h2 className="mb-3">HI, MY NAME IS HARITS</h2>
                                <p >Hi, my name is Harits Haru Suseno, a recent graduate with a bachelor's degree in Informatics Engineering and currently seeking a position as a UI Designer or Software Engineer. Has experience in several web and mobile application design and development projects. Creative person, can work in team, like to learn something new.</p>

                                <p className="mb-5">I now focus on what I enjoy most: User Interface design for mobile applications or websites on any device and platform. Frontend Developer, building the client-side of websites or mobile app with modern style and features.</p>
                                <h2 className="mb-3">MY COMPETENCIES & SKILLS</h2>
                                <h3 className="mb-2">UI/UX DESIGNER</h3>
                                <p>wireframes, interactive prototypes, User Interface design, component, style guide, compositing, consistency and design principles.</p>
                                <h3 lassName="mb-2">FRONTEND WEB DEVELOPER</h3>
                                <p>Implemented websites, or landing pages from concept through deployment. Build user-friendly, responsive apps for the browser. write code (HTML, JavaScript, CSS, Bootstrap, React.js.).</p>
                                <h3 lassName="mb-2">FLUTTER DEVELOPER</h3>
                                <p>Translate and Build the designs and Wireframes into high quality UI code, Dart programming language, Firebase, State Management Bloc.</p>
                            </Col>
                        </Row>
                </Container>
            </div>
        </section>
        </div>
    )
}

export default About
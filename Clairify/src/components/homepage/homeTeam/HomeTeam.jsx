import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './HomeTeam.scss'
import { LinkContainer } from 'react-router-bootstrap'
import SceneTeam from '../splineSceneTeam/SceneTeam';

const HomeTeam = () => {
    return (
        <>
            <section className="home-team">
                <Row className="home-team-container m-0">
                    <Col md={5} className="p-0">
                        <Container className="home-team-container-text d-flex align-items-center">
                            <Container className="home-team-container-text-content">
                                <h1 className="title">Our Team </h1>
                                <p className="text">Our tutoring team consists of University, College, and Highschool Students from all around the world!</p>
                                <p className="text">Many of our tutors are also designers and developers for Clairify, creating awesome free tools, graphics, and resources for you to use!</p>
                                <LinkContainer to="/team">
                                    <Button className="team-button">Meet the Team</Button>
                                </LinkContainer>
                            </Container>
                        </Container>
                    </Col>
                    <Col md={7} className="p-0">
                        <Container className="home-team-container-scene">
                            <SceneTeam />
                        </Container>
                    </Col>
                </Row>
            </section>
            <section className="home-join">
                <Row className="home-join-container m-0">
                    
                    <Col md={7} className="p-0">
                        <Container className="home-join-container-scene">
                            <SceneTeam />
                        </Container>
                    </Col>
                    <Col md={5} className="p-0">
                        <Container className="home-join-container-text d-flex align-items-center">
                            <Container className="home-join-container-text-content">
                                <h1 className="title">Join Us</h1>
                                <p className="text">Become a tutor and help our community grow! Meet new people from around the world and help bring free education to those who need it.</p>
                                <p className="text">Teaching is the best way to learn!</p>
                                <LinkContainer to="/apply">
                                    <Button className="apply-button">Apply Today</Button>
                                </LinkContainer>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default HomeTeam
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './HomeAbout.scss'
import { LinkContainer } from 'react-router-bootstrap'
import { BiLogoDiscordAlt } from 'react-icons/bi';
import SceneLanding from '../splineScenes/SceneLanding';

const HomeAbout = () => {
  return (
      <section className="home-about">
      <Row className="home-about-container m-0">
        <Col md={7} className="p-0">
          <Container className="home-about-container-scene">
            <div className="foreground-1">
            <SceneLanding/>
            </div>
          </Container>
        </Col>
        <Col md={5} className="p-0">
          <Container className="home-about-container-text d-flex align-items-center" >
            <Container className="home-about-container-text-content">
              <h1 className="title">About Us</h1>
              <p className="text">Clairify is a non-profit organization devoted to helping students receive the education, mentorship, and clarification they need with school.</p>
              <p className="text">We aim to create accesssible educational materials for high-school and univerisity students, completely free of charge.</p>
            </Container>
          </Container>
        </Col>
      </Row>
    </section>
  )
}

export default HomeAbout

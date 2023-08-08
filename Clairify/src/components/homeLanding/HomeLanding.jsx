import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './HomeLanding.scss'
import { LinkContainer } from 'react-router-bootstrap'
import { BiLogoDiscordAlt } from 'react-icons/bi';
import SceneLanding from '../splineScenes/SceneLanding';


const HomeLanding = () => {
  return (
    <section className="home-landing">
      <Row className="home-landing-container m-0">
        <Col md={5} className="p-0">
          <Container className="home-landing-container-text d-flex align-items-center" >
            <Container className="home-landing-container-text-content">
              <h1 className="title">Access a community of tutors, for free </h1>
              <p className="text">The best notes for all subjects, collected, and curated for your studying.</p>
              <LinkContainer to="/discord">
                <Button className="discord-button"><BiLogoDiscordAlt  className="discord-icon"/> Join our Discord Server</Button>
              </LinkContainer>
            </Container>
          </Container>
        </Col>
        <Col md={7} className="p-0">
          <Container className="home-landing-container-scene">
            <div className="foreground-1"></div>
            <div className="foreground-2"></div>
            <SceneLanding/>
          </Container>
        </Col>
      </Row>
    </section>
  )
}

export default HomeLanding

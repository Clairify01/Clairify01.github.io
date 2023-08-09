import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './HomeeND.scss'
import { LinkContainer } from 'react-router-bootstrap'
import SceneEnd from '../splineSceneEnd/SceneEnd';


const HomeEnd = () => {
  return (
    <section className="home-end">
      <Row className="home-end-container m-0">
        <Col md={3} className="p-0">
          <Container className="home-discord-container-text d-flex align-items-center" >
            <Container className="home-discord-container-text-content">
              <h1 className="title">Check us out</h1>
              <p className="text">Visit our Discord Server and ask some questions. Free for all to use!</p>
              <p className="text">Need clarification? Setup a One-on-One to clear your confusion!</p>
              <LinkContainer to="/discord">
                <Button className="discord-button">Join our Discord</Button>
              </LinkContainer>
            </Container>
          </Container>
        </Col>
        <Col md={6} className="p-0">
          <Container className="home-end-container-scene">
            <SceneEnd/>
          </Container>
        </Col>
        <Col md={3} className="p-0">
          <Container className="home-donate-container-text d-flex align-items-center" >
            <Container className="home-donate-container-text-content">
              <h1 className="title">Like what we do?</h1>
              <p className="text">If you like what we’re doing, consider supporting us!</p>
              <p className="text">Your kind donations allow us to keep our services up and running!</p>
              <LinkContainer to="/donate">
                <Button className="donate-button">Buy us a Coffee</Button>
              </LinkContainer>
            </Container>
          </Container>
        </Col>
      </Row>
    </section>
  )
}

export default HomeEnd

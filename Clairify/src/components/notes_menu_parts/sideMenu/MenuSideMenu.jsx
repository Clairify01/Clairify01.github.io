import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import './menuSideMenu.scss'

const MenuSideMenu = () => {
  return (
    <div className="menu-sidemenu">  
      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Unit 1</Accordion.Header>
          <Accordion.Body>
            link here
            link here
            link here
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Unit 2</Accordion.Header>
          <Accordion.Body>
            link here
            link here
            link here
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Unit 3</Accordion.Header>
          <Accordion.Body>
            link here
            link here
            link here
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Unit 4</Accordion.Header>
          <Accordion.Body>
            link here
            link here
            link here
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default MenuSideMenu

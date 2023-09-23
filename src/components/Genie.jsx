import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';

export const Genie = () => {
  const [activeKey, setActiveKey] = useState('service');

  return (
    <div className='container'>
      <h2>How can I help you today ?</h2>
      <Nav variant="tabs" activeKey={activeKey}>
        <Nav.Item>
          <Nav.Link eventKey="service" onClick={() => setActiveKey('service')} >Book a service</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="appoinment" onClick={() => setActiveKey('appoinment')}>Get an appoinment</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )

}
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';

import BookService from './BookService'
import BookAppoinment from './BookAppoinment'

export const Genie = () => {
  const [activeKey, setActiveKey] = useState('service');

  return (
    <div className='container'>
      <h2>How can I help you today ?</h2>
      <div className='row justify-content-center mt-4'>
        <Nav variant="tabs" activeKey={activeKey}>
          <Nav.Item>
            <Nav.Link eventKey="service" onClick={() => setActiveKey('service')} >Book a service</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="appoinment" onClick={() => setActiveKey('appoinment')}>Get an appoinment</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {activeKey === 'service' ?  <BookService/> : <BookAppoinment/>}
    </div>
  )

}
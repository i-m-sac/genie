
import Card from 'react-bootstrap/Card';
import plumber1 from '../assets/plumber.png'
import React, { useEffect, useState } from 'react';

const services = {
  plumbing: [{
    imgLink: '',
    title: 'Plumbing'
  }, {
    imgLink: '',
    title: 'Others'
  }, {
    imgLink: '',
    title: 'Whole Day'
  }],
  dental: [{
    title: 'Cleaning'
  }, {
    title: 'Checkup'
  }],
  saloon: [{
    title: 'Gents Haircut'
  }, {
    title: 'Hair and Beard'
  }],
  electrician: [{
    title: 'Wiring repair'
  }, {
    title: 'Setup new wiring'
  }]
}

const Services = (props) => {

  const [chosen, choose] = useState('')

  if (!props.service) return null
  const { service, chooseService } = props
  const items = services[service.value]
  const cards = []
  items.forEach(item => {
    cards.push(
      <a  className='col-3 m-0' onClick={() => { choose(item.title); chooseService(item.title)}}>
        <Card className={chosen === item.title ? 'border border-info' : ''} >
          {/* <Card.Img className='card-img-top' style={{ objectFit: 'cover', height: '18rem' }} src={plumber1} /> */}
          <Card.Body>
            <Card.Text style={{ 'text-decoration': 'none !important' }}>{item.title}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    )
  })
  return (
    <div className="mt-3 card-deck justify-content-center">
      {cards}
    </div>
  )
}

export default Services
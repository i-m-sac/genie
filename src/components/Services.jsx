
import Card from 'react-bootstrap/Card';
import plumber1 from '../assets/plumber.png'
import React, { useEffect, useState } from 'react';

const services = {
  plumbing: [{
    imgLink: '',
    title: 'Water leaks'
  }, {
    imgLink: '',
    title: 'Clogs'
  }, {
    imgLink: '',
    title: 'New installations'
  }, {
    title: 'Emergency'
  }],
  dental: [{
    title: 'Cleaning'
  }, {
    title: 'Checkup'
  }, {
    title: 'Emergency'
  }],
  saloon: [{
    title: 'Gents Haircut'
  }, {
    title: 'Hair and Beard'
  }, {
    title: 'Makeup'
  }, {
    title: 'Threading'
  }, { 
    title: 'Nails'
  }],
  electrician: [{
    title: 'Wiring repair'
  }, {
    title: 'Installation'
  }, {
    title: 'Audit'
  }, {
    title: 'Emergency'
  }],
  mechanic: [{
    title: 'Car Servicing'
  }, {
    title: 'Car Repair'
  }, {
    title: 'Bike Servicing'
  }, {
    title: 'Bike Repair'
  }, {
    title: 'e-Bike Servicing'
  }, {
    title: 'e-Bike Repair'
  }],
  optician: [{
    title: 'Checkup'
  }, {
    title: 'Driver\'s Eye test'
  }],
  housekeeper: [{
    title: 'Cleaning'
  }, {
    title: 'Gardening'
  }, {
    title: 'Ironing'
  }]
}

const Services = (props) => {

  console.log('CHoseenasdas as', props.service)

  const [chosen, choose] = useState('')

  if (!props.service) return null
  const { service, chooseService } = props
  const items = services[service.value]
  const cards = []
  items.forEach(item => {
    cards.push(
      <a  className=' m-0' onClick={() => { choose(item.title); chooseService(item.title)}}>
        <Card className={chosen === item.title ? 'border border-primary' : ''} >
          {/* <Card.Img className='card-img-top' style={{ objectFit: 'cover', height: '18rem' }} src={plumber1} /> */}
          <Card.Body>
            <Card.Text style={{ 'text-decoration': 'none !important' }}>{item.title}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    )
  })
  return (
    <div className="mt-3 justify-content-center">
      <div>
        <h3 className=''>What service are you looking for ?</h3>
      </div>
      <br />
      <div className='card-deck justify-content-center'>
        {cards}
      </div>
    </div>
  )
}

export default Services
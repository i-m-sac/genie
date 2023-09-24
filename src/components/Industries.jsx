import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const industries = [
  { label: 'Plumber', value: 'plumbing' },
  { label: 'Electrician', value: 'electrician'},
  { label: 'Dental', value: 'dental'},
  { label: 'Saloon', value: 'saloon'},
  { label: 'Car Mechanic', value: 'car_mechanic'},
  { label: 'Bike Mechanic', value: 'bike_mechanic'},
  { label: 'Optician', value: 'optician'}
]

const Industries = (props) => { 
  const [search, updateSearch] = useState('');
  const [ind, setInd] = useState('')

  const choose = (industry) => {
    setInd(industry)
    props.chooseIndustry(industry)
  }

  const logger = (e) => {
    console.log('Loggerer', e)
  }

  let cards = industries

  if (ind) {
    cards = cards.filter(card => card.label === ind.label)
  }

  cards = cards.filter(i => i.label.toLowerCase().includes(search.toLowerCase())).map(i => {
    return <a onClick={(e) => { choose(i) }}>
      <Card className={ind.label === i.label ? 'border border-primary' : ''}>
        <div className='card-body'>{i.label}</div>
      </Card>
    </a>
  })

  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <input disabled={ind} className="form-control col-6" type="search" placeholder="What service are you looking for" onChange={(e) => updateSearch(e.target.value)} value={search} />
      </div>
      <div className='card-deck mt-3 justify-content-center'>
        {cards}
      </div>

    </div>
  )

}

export default Industries
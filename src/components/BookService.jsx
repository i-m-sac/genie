import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import Services from './Services'
import Schedule from './Schedule'

const industries = [
  { label: 'Plumber', value: 'plumbing' },
  { label: 'Electrician', value: 'electrician'}
]

const BookService = () => {
  const [chosenIndustry, setIndustry] = useState('');
  const [choosenService, setService] = useState('')
  const [choosenSchedule, setSchedule] = useState('')
  const [step, setStep] = useState(0)


  const handleScroll = (y = 200) => {
    console.log('Handlee Scrolll', y)
    setTimeout(()=> {
      window.scrollTo({
        top: y,
        behavior: "smooth"
      })
    }, 100)
    
  }

  const chooseIndustry = (industry) => {
    setIndustry(industry)
    setStep(1)
  }

  const chooseService = (service) => {
    setService(service)
    handleScroll(1000)
    setStep(2)
  }

  const chooseSchedule = (schedule) => {
    setSchedule(schedule)
    handleScroll(1500)
  }

  return (
    <div className="container mt-4">
      <div className='row d-flex justify-content-center '>
        <Select 
            placeholder='What service are you looking for ?'
            className=""
            width="50%"
            classNamePrefix="select"
            isClearable={true}
            isSearchable={true}
            name="color"
            options={industries}
            onChange={(e) => { chooseIndustry(e) }}
          />
      </div>
      {chosenIndustry && <Services service={chosenIndustry} chooseService={chooseService} />}
      { choosenService &&  <Schedule confirmSchedule={chooseSchedule} /> }
      { choosenSchedule && <button className='mt-3 btn btn-primary'>Confirm your booking</button> }

    </div>
  )
}

export default BookService
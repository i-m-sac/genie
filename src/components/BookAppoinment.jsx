import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import Services from './Services'
import Schedule from './Schedule'


const industries = [
  { label: 'Dentist', value: 'dental' },
  { label: 'Saloon', value: 'saloon'}
]

const BookAppoinment = () => {
  const [chosenIndustry, setIndustry] = useState('');
  const [choosenService, setService] = useState('')
  const [choosenSchedule, setSchedule] = useState('')
  const [booked, setBooking] = useState(false)
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

  const submitApptRequest = () => {
    setIndustry('')
    setService('')
    setSchedule('')
    setBooking(true)
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

  const bookingElement = <div>
    <h3 className=' alert alert-success'>Thank you for scheduling with us. Always happy to serve you.</h3>
  </div>

  return (
    <div className="container mt-4">
      <div className='row d-flex justify-content-center '>
        {
          !booked &&
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
        }
      </div>
      {chosenIndustry && <Services service={chosenIndustry} chooseService={chooseService} />}
      { choosenService &&  <Schedule confirmSchedule={chooseSchedule} /> }
      { choosenSchedule && <button onClick={submitApptRequest} className='mt-3 btn btn-primary'>Confirm your appoinment</button> }
      { booked && bookingElement}

    </div>
  )
}

export default BookAppoinment
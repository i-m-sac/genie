import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import Services from './Services'
import Schedule from './Schedule'
import Address from './Address'
import Industries from './Industries';

const industries = [
  { label: 'Plumber', value: 'plumbing' },
  { label: 'Electrician', value: 'electrician'}
]

const BookService = () => {
  const [chosenIndustry, setIndustry] = useState('');
  const [choosenService, setService] = useState('')
  const [choosenSchedule, setSchedule] = useState('')
  const [choosenAddress, setAddress] = useState('')
  const [booked, setBooking] = useState(false)
  const [step, setStep] = useState(0)


  const handleScroll = (y = 200) => {
    setTimeout(()=> {
      window.scrollTo({
        top: y,
        behavior: "smooth"
      })
    }, 100)
    
  }

  const submitServiceRequest = () => {
    setIndustry('')
    setService('')
    setSchedule('')
    setAddress('')
    setBooking(true)
  }

  const chooseIndustry = (industry) => {
    console.log('SetIndusgtry', industry)
    setIndustry(industry)
    setStep(1)
    console.log('ChosenIndyus', chosenIndustry)
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
    <h3 className=' alert alert-success'>Thank you for booking with us. Always happy to serve you.</h3>
  </div>

  return (
    <div className="container mt-4 justify-content-center">
      <div className='row d-flex justify-content-center '>
        {/* {
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
        } */}
      </div>
      { !booked && <Industries chooseIndustry={chooseIndustry} /> }
      {chosenIndustry && <Services service={chosenIndustry} chooseService={chooseService} />}
      { choosenService &&  <Schedule confirmSchedule={chooseSchedule} /> }
      { choosenSchedule && <Address selectAddress={choosenAddress} /> }
      { choosenSchedule && <button className='mt-3 btn btn-primary' onClick={submitServiceRequest}>Confirm your booking</button> }
      { booked && bookingElement}
    </div>
  )
}

export default BookService
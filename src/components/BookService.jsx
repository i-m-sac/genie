import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import Services from './Services'

const options = [
  { label: 'Plumber', value: 'plumbing' },
  { label: 'Electrician', value: 'electrician'}
]

const BookService = () => {
  const [chosenService, setService] = useState('');

  const chooseService = (service) => {
    console.log('service', service)
    setService(service)
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
            options={options}
            onChange={(e) => { chooseService(e) }}
          />
      </div>
      {chosenService && <Services service={chosenService} />}


    </div>
  )
}

export default BookService
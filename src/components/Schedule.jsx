import { Scheduler } from "@aldabil/react-scheduler";
import Select from 'react-select';
import React, { useEffect, useState } from 'react';

const events = [
  {
    event_id: 1,
    title: "BUSY",
    editable: false,
    draggable: false,
    start: new Date("2023/09/24 09:00"),
    end: new Date("2023/09/24 10:00"),
    color: 'grey',
    admin_id: 1
  },
  {
    event_id: 2,
    title: "BUSY",
    editable: false,
    draggable: false,
    start: new Date("2023/09/24 13:00"),
    end: new Date("2023/09/24 14:00"),
    color: 'grey'
  },
  {
    event_id: 3,
    title: "BUSY",
    start: new Date("2023/09/25 13:00"),
    allDay: true,
    end: new Date("2023/09/25 14:00"),
    editable: false,
    draggable: false,
    color: 'grey'
  },
]

const genies = [ {
  label: 'Any', value: 'Any'
},{ label: 'Mark', value: 'Mark'
}, { label: 'Peter', value: 'Peter'},
{ label: 'John', value: 'John'}]

const Schedule = (props) => {

  const [chosenGenie, setGenie] = useState('');

  const eventCreated = async (e) => {
    console.log('EventCreated', e)
    e.event_id = Date.now()
    events.push(e)
    props.confirmSchedule(e)
    return e
  }

  const handleScroll = (y = 200) => {
    console.log('Handlee Scrolll', y)
    setTimeout(()=> {
      window.scrollTo({
        top: y,
        behavior: "smooth"
      })
    }, 100)
    
  }

  const chooseGenie = (e) => {
    console.log('chosenGe', e)
    setGenie(e.value)
    events.pop()
    handleScroll(1800)
  }

  const view = 'week'
  return (
    <div className="my-2 ">
      <div className='row d-flex justify-content-center '>
        <Select 
              placeholder='Available Genies'
              className="w-25 mt-3"
              width="50%"
              classNamePrefix="select"
              isSearchable={true}
              name="color"
              isDisabled={!chooseGenie}
              options={genies}
              onChange={(e) => { chooseGenie(e) }}
            />
      </div>
      <br />
      

      {chosenGenie && <Scheduler
        className="mt-2"
        view={view}
        events={events}
        onConfirm={eventCreated}
        viewerTitleComponent={()=> { return 'Custom Event'}}
        fields={ [
          {
            name: "genie",
            type: "select",
            options: [

              { id: 1, text: "John", value: 1},
              { id: 3, text: "Mark", value: 3},
              { id: 2, text: "Peter", value: 2}
            ],
            config: { label: 'Fellow Genie', required: true }
          }
        ]}
        // resources= {resources}
      />}
    </div>
  )
}

export default Schedule
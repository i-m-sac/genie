
import Card from 'react-bootstrap/Card';
import plumber1 from '../assets/plumber.png'

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
  }]
}

const Services = (props) => {
  console.log('Propsss', props.service)
  if (!props.service) return null
  const { service } = props
  const items = services[service.value]
  const cards = []
  items.forEach(item => {
    cards.push(
      <Card >
        <Card.Img className='card-img-top' src={plumber1} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  })
  console.log('Carddd', cards)
  return (
    <div className="mt-2 card-deck">
      {cards}
    </div>
  )
}

export default Services
import './Events.css'
import Event from './Event'

export default function Events({eventsList}) {
  return (
    <div className='events__wrapper'>
        {/* {eventsList.type} */}
        {eventsList.map((item) => <Event key={item.id} {...item} />)}
    </div>
  )
}

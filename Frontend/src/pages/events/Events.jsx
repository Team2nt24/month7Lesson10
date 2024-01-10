import './Events.css'
import Event from './Event'
import { useGlobalContext } from '../../context'

export default function Events() {
const {eventsList} = useGlobalContext();
console.log(eventsList);

  return (
    <div className='events__wrapper'>
        {eventsList.map((item) => {
          <Event key={item.id} {...item} />
        })}
    </div>
  )
}

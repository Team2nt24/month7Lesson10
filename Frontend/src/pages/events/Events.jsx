import Event from './Event'

export default function Events({eventsList}) {
  return (
    <div>
        {/* {eventsList.type} */}
        {eventsList.map((item) => <Event key={item.id} {...item} />)}
    </div>
  )
}

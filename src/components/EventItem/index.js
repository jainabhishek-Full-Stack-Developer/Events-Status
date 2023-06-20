import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'eventImage active' : 'eventImage'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="eventItem">
      <button type="button" className="eventButton" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem

import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEvent = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="noActiveEventDes">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosed = () => (
    <div className="viewContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrationsClosedImage"
      />
      <h1 className="registrationsClosedHeading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrationsClosedDes">
        Stay tuned. We will reopen the registrations soon !
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="viewContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registeredImg"
      />
      <h1 className="registeredHeading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="viewContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegisterImg"
      />
      <p className="yetToRegisterDes">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yetToRegisterBtn">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registrationStatusContainer">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEvent

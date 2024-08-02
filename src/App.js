import { useState, useEffect } from "react"
import { getAppointments, postAppointment } from './api/apiCalls';
import './App.css';
import Form from './Components/Form/Form'
import Appointments from './Components/Appointments/Appointments'


function App() {
  const [appointments, setAppointment] = useState([])

  useEffect(() => {
    getAppointments().then(fetchedAppointments => {
      if (fetchedAppointments) {
        setAppointment(fetchedAppointments)
      }
    })
  }, [])

  function addAppointment(newAppointment) {
    postAppointment(newAppointment)
    .then(postedAppointment => {
      setAppointment([...appointments, postedAppointment])
    })
    .catch(error => {
      console.log('Error posting appointment')
    })
  }
const deleteAppointment = (id) => {
  const filteredAppointments = appointments.filter((appointment) => appointment.id !== id)
  setAppointment(filteredAppointments)
}

  return (
    <div className="App">
     <h1>Appointments!</h1>
     <Form addAppointment={addAppointment}/>
     <Appointments appointments={appointments} deleteAppointment={deleteAppointment}/>
    </div>
  );
}

export default App;

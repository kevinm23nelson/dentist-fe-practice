import React from 'react'
import { useState } from 'react'
import './Form.css'

function Form({addAppointment}) {
    const [pet, setPet] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    function submitAppointment(event) {
        event.preventDefault()
        const newAppointment = {
            id: Date.now(),
            pet,
            date,
            time
        };
        addAppointment(newAppointment)
        clearInput()
    }

    function clearInput() {
        setPet("")
        setDate("")
        setTime("")
    }

    return (
        <form>
            <input required
                type='text'
                placeholder='Pet Name'
                name='pet'
                value={pet}
                onChange={event => setPet(event.target.value)}
            />
            <input required
                type='text'
                placeholder='Date (Month, Day)'
                name='date'
                value={date}
                onChange={event => setDate(event.target.value)}
            />
            <input required
                type='text'
                placeholder='Time'
                name='time'
                value={time}
                onChange={event => setTime(event.target.value)}
            />
            <button onClick={submitAppointment}>SUBMIT</button>
        </form>
    )
}

export default Form
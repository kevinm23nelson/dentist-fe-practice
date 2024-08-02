export const getAppointments = () => {
    return fetch('http://localhost:3001/api/appointments')
    .then(response => response.json())
    .catch(error => {
        console.log(error.message)
        return []
    })
}

export const postAppointment = (newAppointment) => {
    return fetch('http://localhost:3001/api/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAppointment)
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Error with POST')
        }
        return response.json()
    })
    .catch(error => {
        console.log(error.message)
        throw error
    })
}
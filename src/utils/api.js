// tutors is dummy code for dev purposes only
import tutors from './tutors.js'

async function create(data) {
  let response = await fetch('/.netlify/functions/tutors-create', {
    body: JSON.stringify(data),
    method: 'POST'
  })
  response = await response.json()

  return response
}

async function read(tutorId) {
  let response = await fetch(`/.netlify/functions/tutors-delete/${tutorId}`, {
    method: 'POST',
  })
  response = await response.json()

  return response
}

async function readAll() {
  // DEV CODE
  return JSON.stringify({ tutors })


  /* ACTUAL CODE
  let response = await fetch('/.netlify/functions/tutors-read-all')
  response = await response.json()
  
  return response
  */
}

async function getTutor(school, subject) {
  // DEV CODE
  const index = Math.floor(Math.random() * tutors.length)
  const tutor = tutors[index]
  return tutor
}

async function update(tutorId, data) {
  let response = await fetch(`/.netlify/functions/tutors-update/${tutorId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  })
  response = await response.json()

  return response
}

async function deleteTutor(tutorId) {
  let response = await fetch(`/.netlify/functions/tutors-delete/${tutorId}`, {
    method: 'POST',
  })
  response = response.json()

  return response
}

export default {
  create: create,
  read: read,
  readAll: readAll,
  getTutor: getTutor,
  update: update,
  delete: deleteTutor,
}
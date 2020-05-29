const url = 'https://ako-tutor.netlify.app'

async function create(data) {
  let response = await fetch(url + '/.netlify/functions/tutors-create', {
    body: JSON.stringify(data),
    method: 'POST'
  })
  response = await response.json()

  return response
}

async function read(tutorId) {
  let response = await fetch(url + `/.netlify/functions/tutors-delete/${tutorId}`, {
    method: 'POST',
  })
  response = await response.json()

  return response
}

async function readAll() {
  let response = await fetch(url + '/.netlify/functions/tutors-read-all')
  response = await response.json()
  
  return response
}

async function update(tutorId, data) {
  let response = await fetch(url + `/.netlify/functions/tutors-update/${tutorId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  })
  response = await response.json()

  return response
}

async function deleteTutor(tutorId) {
  let response = await fetch(url + `/.netlify/functions/tutors-delete/${tutorId}`, {
    method: 'POST',
  })
  response = response.json()

  return response
}

export default {
  create: create,
  read: read,
  readAll: readAll,
  update: update,
  delete: deleteTutor,
}
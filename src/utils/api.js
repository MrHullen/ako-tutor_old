const url = 'https://ako-tutor.netlify.app'

function create(data) {
  console.log(data)
  return fetch(url + '/.netlify/functions/tutors-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

function read(tutorId) {
  return fetch(url + `/.netlify/functions/tutors-delete/${tutorId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

function readAll() {
  return fetch(url + '/.netlify/functions/tutors-read-all').then((response) => {
    return response.json()
  })
}

function update(tutorId, data) {
  return fetch(url + `/.netlify/functions/tutors-update/${tutorId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

function deleteTutor(tutorId) {
  return fetch(url + `/.netlify/functions/tutors-delete/${tutorId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

export default {
  create: create,
  read: read,
  readAll: readAll,
  update: update,
  delete: deleteTutor,
}
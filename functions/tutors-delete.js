const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event, context) => {

  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  })

  const id = event.queryStringParameters.id || null;

  console.log(`Function 'tutors-delete' invoked. delete id: ${id}`)

  return client.query(q.Delete(q.Ref(`classes/tutors/${id}`)))
    .then((response) => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
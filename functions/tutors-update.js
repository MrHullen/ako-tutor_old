const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = (event, context) => {
  
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  }) 

  const id = event.queryStringParameters.id || null;
  const data = JSON.parse(event.body)

  console.log(`Function 'tutors-update' invoked. update id: ${id}`)
  
  return client.query(q.Update(q.Ref(`classes/tutors/${id}`), {data}))
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
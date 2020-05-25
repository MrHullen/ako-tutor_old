const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = (event, context) => {

  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  })

  console.log(`Function 'tutor-read-all' invoked`)

  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_tutors'))))
    .then((response) => {
      const tutorRefs = response.data
      console.log('Tutor refs', tutorRefs)
      console.log(`${tutorRefs.length} tutors found`)

      const getAllTutorDataQuery = tutorRefs.map((ref) => {
        return q.Get(ref)
      })

      return client.query(getAllTutorDataQuery).then((ret) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
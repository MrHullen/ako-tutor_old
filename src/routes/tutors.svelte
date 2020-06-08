  <script>
    let tutors

    onMount(async () => {
      const response = await api.readAll()
      const data = await JSON.parse(response)
      tutors = data.tutors
      console.log('tutors[0]: ' + JSON.stringify(tutors[0]))
    })
  </script>
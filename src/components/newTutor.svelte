<script>
  import api from '../utils/api'

  let newTutor = {
    id: 0,
    name: ''
  }

  function createTutor() {
    api
      .create(newTutor)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('An API error occurred', error)
      })
  }
</script>

<section class="section content">
  <h1>New Tutor</h1>
  <label>
    ID:
    <input type="number" bind:value={newTutor.id}>
  </label>
  <label>
    Name:
    <input type="text" bind:value={newTutor.name}>
  </label>
  <button on:click={createTutor}>Create</button>
</section>

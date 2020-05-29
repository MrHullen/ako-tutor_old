<script>
  import api from '../../utils/api'

  let tutor = {
    firstName: '',
    lastName: '',
    email: '',
    slug: Math.floor(Math.random() * 1000000),
    bio: '',
    subjects: []
  }

  async function createTutor() {
    try {
      console.log(await api.create(tutor))
    } catch (error) {
      console.log("An API error occurred: ", error)
    }
  }
</script>

<svelte:head>
  <title>Ako: Sign up</title>
</svelte:head>

<section class="section content">
  <h2 class="title">New Tutor</h2>

  <form on:submit|preventDefault={createTutor}>
    <label class="label">
      <input
        required
        class="input"
        type="text"
        bind:value={tutor.firstName}
        placeholder="First name" />
    </label>
    <label class="label">
      <input
        required
        class="input"
        type="text"
        bind:value={tutor.lastName}
        placeholder="Last name" />
    </label>
    <label class="label">
      <input
        required
        class="input"
        type="email"
        bind:value={tutor.email}
        placeholder="Email" />
    </label>
    <input
      disabled={
        !tutor.firstName || 
        !tutor.lastName || 
        !tutor.email }
      class="button is-success"
      type="submit"
      value="Register" />
  </form>

</section>

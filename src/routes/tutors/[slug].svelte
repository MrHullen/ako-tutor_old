<script context="module">
  export async function preload({ params, query }) {
    const response = await this.fetch(`tutors/${params.slug}.json`)
    const data = await response.json()

    if (response.status === 200) {
      console.log(`Fetched tutor: ${data.firstName} ${data.lastName}`)
      return { tutor: data }
    } else {
      this.error(response.status, data.message)
    }
  }
</script>

<script>
  export let tutor
</script>

<svelte:head>
  <title>Ako: Tutor</title>
</svelte:head>

<section class="section content">
  <h1>{tutor.firstName} {tutor.lastName}</h1>

  <div class="content">
    {@html tutor.bio}
  </div>
</section>

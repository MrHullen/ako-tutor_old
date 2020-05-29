<script context="module">
  export async function preload({ params, query }) {
    const response = await this.fetch(`tutors.json`)
    const data = await response.json()

    if (response.status === 200) {
      return { tutors: data }
    } else {
      this.error(response.status, data.message)
    }
  }
</script>

<script>
  export let tutors
</script>

<svelte:head>
  <title>Ako: Tutors</title>
</svelte:head>

<section class="section content">
  <h1>Tutors</h1>

  <ul class="list">
    {#each tutors as tutor}
      <li class="list-item">
        <a rel="prefetch" href="tutors/{tutor.slug}">{tutor.name}</a>
      </li>
    {/each}
  </ul>

</section>


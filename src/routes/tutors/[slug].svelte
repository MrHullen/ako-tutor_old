<script context="module">
  export async function preload({ params, query }) {
    const response = await this.fetch(`tutors/${params.slug}.json`)
    const data = await response.json()

    if (response.status === 200) {
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
  <title>Ako: {tutor.firstName}</title>
</svelte:head>

<section class="section content">
  <h1 class="title">{tutor.firstName} {tutor.lastName}</h1>

  <div>
    {@html tutor.bio}
  </div>

  <ul class="list">
    {#each tutor.subjects as subject}
      <li class="list-item">{subject}</li>
    {/each}
  </ul>
  
</section>

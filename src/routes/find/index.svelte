<script context="module">
  export async function preload({ params, query }) {
    const response = await this.fetch(`find.json`)
    const data = await response.json()

    if (response.status === 200) {
      return { tutors: data }
    } else {
      this.error(response.status, data.message)
    }
  }
</script>

<script>
  import { fly } from 'svelte/transition'

 export let tutors

  let stage = 0
  let school
  let subject

  let schools = [
    "Rangi Ruru Girls' School",
    "Shirley Boys' High School"
  ]

  let subjects = [
    'English',
    'Mathematics',
    'Science',
    'Art'
  ]
</script>

<style>
  #parent {
    display: grid;
    grid: "dropdown" 1fr
         / 1fr;
  }

  .stage {
    grid-area: dropdown;
    place-self: center;
  }
</style>

<svelte:head>
  <title>Ako: Tutors</title>
</svelte:head>

<section class="section content">
  <h1 class="title">Find a tutor</h1>

  <div id="parent">
    {#if stage === 0}
      <div
        class="stage field has-addons"
        out:fly="{{ y: -150, duration: 1000 }}">
        <div class="control">
          <div class="select is-medium">
            <select bind:value={school}>
              {#each schools as school}
                <option value={school}>{school}</option>
              {/each}
            </select>
          </div>
        </div>
        <div class="control">
          <button
            class="button is-primary is-medium"
            on:click={ () => { stage++ }}>
            Select
          </button>
        </div>
      </div>
    {:else if stage === 1}
      <div
        class="stage field has-addons"
        in:fly="{{ y: 150, duration: 1000 }}"
        out:fly="{{ y: -150, duration: 1000 }}">
        <div class="control">
          <div class="select is-medium">
            <select bind:value={subject}>
              {#each subjects as subject}
                <option value={subject}>{subject}</option>
              {/each}
            </select>
          </div>
        </div>
        <div class="control">
          <button
            class="button is-primary is-medium"
            on:click={ () => { stage++ }}>
            Select
          </button>
        </div>
      </div>
    {:else}
      <div
        class="stage"
        in:fly="{{ y: 150, duration: 1000 }}">
        Your recommended tutor is...
        {tutors[Math.floor(Math.random() * tutors.length)].name}
      </div>
    {/if}

  </div>

<!--
  <ul class="list">
    {#each tutors as tutor}
      <li class="list-item">
        <a rel="prefetch" href="tutor/{tutor.slug}">{tutor.name}</a>
      </li>
    {/each}
  </ul>
-->

</section>


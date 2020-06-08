<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import api from '../../utils/api'

  let schools = []
  let subjects = []

  onMount(async () => {
    schools = await api.getSchools()
    subjects = await api.getSubjects()
	})

  let step = 0
  let school
  let subject
  let tutorName

  async function findTutor() {
    let tutor = await api.getTutor(school, subject)
    tutorName = tutor.firstName + ' ' + tutor.lastName
  }
</script>

<style>
  #parent {
    display: grid;
    grid: "dropdown" 1fr
         / 1fr;
  }

  .step {
    grid-area: dropdown;
    place-self: center;
  }
</style>

<section class="section content">

  <h1 class="title has-text-centered">Find a tutor</h1>

  <div id="parent">
    {#if step === 0}
      <div
        class="step field has-addons"
        out:fly|local="{{ y: -150, duration: 1000 }}">
        <div class="control">
          <div class="select is-medium">
            <select bind:value={school}>
              {#each schools as school}
                <option value={school}>{school}</option>
              {:else}
                <option>Finding schools...</option>
              {/each}
            </select>
          </div>
        </div>
        <div class="control">
          <button
            class="button is-primary is-medium"
            on:click={ () => { step++ }}>
            Select
          </button>
        </div>
      </div>
    {:else if step === 1}
      <div
        class="step field has-addons"
        in:fly="{{ y: 150, duration: 1000 }}"
        out:fly|local="{{ y: -150, duration: 1000 }}">
        <div class="control">
          <div class="select is-medium">
            <select bind:value={subject}>
              {#each subjects as subject}
                <option value={subject}>{subject}</option>
              {:else}
                <option>Finding subjects...</option>
              {/each}
            </select>
          </div>
        </div>
        <div class="control">
          <button
            class="button is-primary is-medium"
            on:click={ () => { findTutor(), step++ }}>
            Select
          </button>
        </div>
      </div>
    {:else}
      <div
        class="step"
        in:fly="{{ y: 150, duration: 1000 }}">
        Your recommended tutor is...
        {tutorName}
      </div>
    {/if}
  </div>

</section>


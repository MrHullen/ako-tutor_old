<script>
  import { stores } from "@sapper/app"
  const { session } = stores()

  const user = session.user

  let disabled = true

  function toggleEdit() {
    disabled = !disabled
  }
</script>

<style>
  input {
    width: fit-content;
    border: none;
  }

  input:disabled {
  background: inherit;
  border: inherit;
}

  button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
</style>

<svelte:head>
  <title>Ako: {user.firstName}</title>
</svelte:head>

<section class="section">

  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        My Profile
      </div>
      <div class="card-header-icon" aria-label="Edit my profile">
        <button
          class="icon"
          on:click={toggleEdit}
          aria-label="Edit my profile"
        >
          <i class="fas fa-edit" aria-hidden="true" title="Edit my profile"></i>
        </button>
        
      </div>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Placeholder" />
          </figure>
        </div>
        <div class="media-content">
          <span>
            <input
              class="title is-4"
              bind:value={user.firstName}
              {disabled}
              type="text">
            <input
              class="title is-4"
              bind:value={user.lastName}
              {disabled}
              type="text">
          </span>
          <p class="subtitle is-6">{user.email}</p>
        </div>
      </div>

      <div class="content">
        <h2 class="subtitle">About me</h2>
        <input
          bind:value={user.bio}
          {disabled}
          type="text"
        >
      </div>

      <div class="content">
        <h2 class="subtitle">Subjects</h2>
        <ul class="list">
          {#each user.subjects as subject}
            <li class="list-item">{subject}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

</section>

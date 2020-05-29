<script>
  export let segment

  let active = false

  function toggle() {
    active = !active
  }
</script>

<style>
  .script {
    font-family: 'Pacifico', cursive;
    font-size: 2em;
  }
</style>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
</svelte:head>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a
    class="navbar-item script has-text-primary"
    href="https://ako-tutor.netlify.app">
      Ako Tutor
    </a>

    <a
      on:click={toggle}
      role="button"
      class="navbar-burger burger"
      class:is-active={active}
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div
    class="navbar-menu"
    class:is-active={active}>
    <div class="navbar-start">
      <a
        class="navbar-item"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        Home
      </a>

      <a
        class="navbar-item"
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">
        About
      </a>

      <a
        class="navbar-item"
        rel="prefetch"
        aria-current={segment === 'tutors' ? 'page' : undefined}
        href="tutors">
        Tutors
      </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a
            class="button is-primary"
            aria-current={segment === 'tutors/sign-up' ? 'page' : undefined}
            href="tutors/sign-up">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">Log in</a>
        </div>
      </div>
    </div>
  </div>
</nav>

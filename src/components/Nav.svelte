<script>
  import { stores } from '@sapper/app'
  const { session } = stores()

  import { onMount } from 'svelte'

  onMount( () => {
    session.user = false
  })

  export let segment

  let active = false

  function toggle() {
    active = !active
  }
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a
    class="navbar-item has-text-primary is-family-secondary is-size-3"
    href=".">
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
        class:is-active={segment === undefined ? 'page' : undefined}
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        Home
      </a>

      <a
        class="navbar-item"
        class:is-active={segment === 'about' ? 'page' : undefined}
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">
        About
      </a>

      <a
        class="navbar-item"
        class:is-active={segment === 'find' ? 'page' : undefined}
        aria-current={segment === 'find' ? 'page' : undefined}
        rel="prefetch"
        href="find">
        Find a tutor
      </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        {#if session.user}
          <div class="buttons">
            <button
              class="button is-light"
              on:click={
                () => { session.user = false }
              }>
              Log out</button>
          </div>
        {:else}
          <div class="buttons">
            <a
              class="button is-primary"
              aria-current={segment === 'sign-up' ? 'page' : undefined}
              href="sign-up">
              <strong>Sign up</strong>
            </a>

            <a
              class="button is-light"
              aria-current={segment === 'login' ? 'page' : undefined}
              href="login">Log in</a>
          </div>
        {/if}
      </div>
    </div>
  </div>
</nav>

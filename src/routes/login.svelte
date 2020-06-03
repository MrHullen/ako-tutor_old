<script>
  import { stores } from '@sapper/app'
  const { session } = stores()

  import api from '../utils/api'
  import { goto } from '@sapper/app'

  let emptyEmail = false
  let emptyPassword = false
  let isLoading = false
  let isSuccess = false
  let rememberMe = true

  let user = {
    email: '',
    password: ''
  }

  async function handleSubmit() {
    if (!user.email || !user.password) {
      emptyEmail = user.email ? false : true
      emptyPassword = user.password ? false : true
    } else {
      isLoading = true

      // temporary code for UI feel...
      setTimeout(() => {
        isSuccess = true
        session.user = true
      }, 1000)

      setTimeout(() => {
        goto('/')
      }, 2000)
    
      /* Actual login code...
      try {
        const response = await fetch("/read",
        {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        if (response.status === 201) {
          isSuccess = true
          session.user = true
          setTimeout(() => {
            goto('/')
          }, 1000)
        }
      } catch (error) {
        console.log("An API error occurred: ", error)
        // TODO: handle error in UI
      }
      */
    }
  }
</script>

<style>
  .field, label {
    margin-bottom: 0 !important;
  }
  
  p {
    margin-top: 0 !important;
  }

  a {
    float: right;
  }
</style>

<svelte:head>
  <title>Ako: Login</title>
</svelte:head>

<section class="section content">
  <h2 class="title">Login</h2>

  <form on:submit|preventDefault={handleSubmit}>

    <div class="field">
      <label class="label">Email
        <div class="control has-icons-left">
          <input
            class="input"
            class:is-danger={emptyEmail}
            type="email"
            bind:value={user.email}
            placeholder="your email" />
          <span class="icon is-small is-left" >
            <i class="fas fa-envelope" aria-hidden="true" />
          </span>
        </div>
      </label>
      <p class="help is-danger has-text-right">
        &nbsp;
        {#if emptyEmail}This field is required{/if}
      </p>
    </div>

    <div class="field">
      <label class="label">Password
        <div class="control has-icons-left">
          <input
            class="input"
            class:is-danger={emptyPassword}
            type="password"
            bind:value={user.password}
            placeholder="your password" />
          <span class="icon is-small is-left">
            <i class="fas fa-key" aria-hidden="true" />
          </span>
        </div>
      </label>
      <p class="help is-danger has-text-right">
        &nbsp;
        {#if emptyPassword}This field is required{/if}
      </p>
    </div>

    <div class="field">
      <div class="control">
        <button
          class="button is-success"
          type="submit">
          {#if isSuccess}
            Success &nbsp;
            <i class="fas fa-check"></i>
          {:else if isLoading}
            Logging in... &nbsp;
            <i class="fas fa-spin fa-cog"></i>
          {:else}Login{/if}
        </button>
        <!-- TODO: Create forgot password functionality -->
        <a class="has-text-grey" href="/">Forgot password</a>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input
          type="checkbox"
          bind:checked={rememberMe} />
          Remember me
        </label>
      </div>
    </div>
  </form>

</section>

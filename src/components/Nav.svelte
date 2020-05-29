<script>
  export let segment
</script>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        home
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">
        about
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'tutors' ? 'page' : undefined}
        href="tutors">
        tutors
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'tutors' ? 'page' : undefined}
        href="tutors/register">
        register
      </a>
    </li>
  </ul>
</nav>

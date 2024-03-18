<script lang="ts">
  import "../app.css";
  import toc from '../toc.json';

  export let next: any;
</script>

<div>
  <nav>
    <ul>
      {#each toc as { title, pages }}
        <li>
          {title}
          <ul>
            {#each pages as { title, slug }}
              <li>
                <a href={slug}>{title}</a>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  <slot></slot>

  <footer>
    <h1>{next.title}</h1>
  </footer>
</div>

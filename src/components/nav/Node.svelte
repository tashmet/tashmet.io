<script lang="ts">
  export let node: any;
  export let slug: string;
</script>

{#if node.type === 'heading'}
  <h1 class="font-bold text-sm mt-6 mb-2">
    {node.text}
  </h1>
{:else if node.type === 'list'}
  <ul>
    {#each node.children as child}
      <svelte:self node={child} slug={slug} />
    {/each}
  </ul>
{:else if node.type == 'listItem'}
  <li class="text-sm pl-4 ml-2 py-2 border-l {node.children[0].url === slug ? 'border-active bg-active-light' : ''}">
    {#each node.children as child}
      <svelte:self node={child} slug={slug} />
    {/each}
  </li>
{:else if node.type == 'link'}
  <a class="hover:text-active {node.url === slug ? 'text-active' : 'text-slate-600'}" href={node.url}>{node.text}</a>
{/if}

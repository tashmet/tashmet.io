<script lang="ts">
  import Node from "./Node.svelte";

  export let nodes: any[] = [];
  export let slug: string;
</script>

<nav class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-40rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
  <div class="">
    {#each nodes as node}
      <Node node={node} slug={slug}/>
    {/each}
  </div>
</nav>

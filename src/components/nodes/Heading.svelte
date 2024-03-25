<script lang="ts">
	export let level: number;

  let slotObj: any;

  const generateId = (textContent: string) => textContent
    .trim()
    .replace(/\W+/g, '-')
    .toLowerCase();

</script>

{#if level === 1}
  <h1 class="text-sm font-500 -mt-12 pt-16" style="color: #1faec8;" id={slotObj ? generateId(slotObj.textContent) : ''}>
    <a class="group relative border-none lg:-ml-2 lg:pl-2" href={slotObj ? '#' + generateId(slotObj.textContent) : ''}>
      <span bind:this={slotObj}><slot/></span>
    </a>
  </h1>
{:else if level === 2}
  <h2 class="text-lg font-bold -mt-12 pt-16" id={slotObj ? generateId(slotObj.textContent) : ''}>
    <a class="group relative border-none lg:-ml-2 lg:pl-2" href={slotObj ? '#' + generateId(slotObj.textContent) : ''}>
      <span bind:this={slotObj}><slot/></span>
    </a>
  </h2>
{:else if level === 3}
  <h3><slot/></h3> 
{:else if level === 4}
  <h4><slot/></h4> 
{:else if level === 5}
  <h5><slot/></h5> 
{:else}
  <h6><slot/></h6> 
{/if}

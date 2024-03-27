<script lang="ts">
  export let title: string;
  export let description: string;
  export let mirror: boolean = false;
  export let expanded: boolean = false;
</script>

<section class="showcase py-12 bg-white">
  <div class="showcase-container max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <div class="showcase-grid grid lg:grid-cols-12">
      <div class={`${expanded ? 'lg:col-span-4' : 'lg:col-span-6'} order-2 ${!mirror ? 'lg:order-1' : ''}`}>
        <div class={`showcase-content ${mirror ? '' : 'border-l'} border-teal-400 p-8`}>
          <h1 class="text-xl font-bold mb-4">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div class={`${expanded ? 'lg:col-span-8' : 'lg:col-span-6'} order-1 ${!mirror ? 'lg:order-2' : ''}`}>
        <slot/>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  :global(.hero + .showcase .showcase-grid) {
    @apply -mt-32
  }
  :global(.hero + .showcase .showcase-content) {
    @apply lg:mt-32
  }
  :global(.section .showcase-container) {
    @apply max-w-7xl mx-auto px-0 sm:px-0 md:px-0
  }
</style>

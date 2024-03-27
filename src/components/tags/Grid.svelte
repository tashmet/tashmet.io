<script lang="ts">
  export let cols: number;
</script>

<section class="py-12 bg-white">
  <div class="grid lg:grid-cols-2 gap-12">
    <slot/>
  </div>
</section>

<!--
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
-->

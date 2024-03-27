<script lang="ts">
	export let background: string;
</script>

<section class="section py-12" style={`background: ${background}`}>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <slot/>
  </section>
</section>

<style lang="postcss">
  :global(.section p) {
    @apply mt-6 text-sm text-slate-600 max-w-3xl;
  }
  :global(.section h1) {
    @apply text-teal-400 font-bold tracking-tight dark:text-white
  }
  :global(.section h2) {
    @apply text-stone-700 font-extrabold text-2xl tracking-tight dark:text-white
  }
</style>

<script lang="ts">
  //export let actions: any;
</script>

<section class="hero py-12 bg-[#dff6f8] pb-56">
  <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
    <slot/>
    <!--
    {#each actions as action}
      <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
        <a href={action.href} class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
          {action.title}
        </a>
      </div>
    {/each}
    -->
  </div>
</section>

<style lang="postcss">
  :global(.hero p) {
    @apply mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto;
  }
  :global(.hero h1) {
    @apply text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white
  }
</style>

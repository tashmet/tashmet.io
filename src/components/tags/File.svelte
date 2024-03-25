<script lang="ts">
	export let title: string;
</script>

<div class="file flex flex-col">
  <div class="file-container flex bg-[#4e7477]">
    <div class="flex text-xs p-4 pb-2 rounded-t-md mt-2 shadow-xl" style="background: var(--code-bg); color: var(--code-title); border-color: var(--code-title)">
      <span class="material-symbols-outlined -mt-1 mr-2">
        draft
      </span>
      {title}
    </div>
  </div>

  <slot></slot>
</div>

<style lang="postcss">
  :global(.file pre) {
    margin-top: 0;
    margin-bottom: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :global(.editor .file-container) {
    @apply rounded-t-none
  }
  :global(.file-container) {
    @apply rounded-t-lg
  }
</style>

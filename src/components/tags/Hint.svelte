<script lang="ts">
	export let style: string;
</script>

<div class="flex rounded-md border my-4">
  <div class="p-4 my-2">
    <span class="material-symbols-outlined">
    info
    </span>
  </div>
  <div class="p-4">
    <slot></slot>
  </div>
</div>

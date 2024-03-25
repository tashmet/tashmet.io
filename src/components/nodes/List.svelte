<script lang="ts">
	export let ordered: boolean;
  export let marker: any;
</script>

<ul class="ml-6 my-4 max-w-md space-y-1 list-disc list-inside dark:text-gray-400 text-xs" style="color: #00000082;">
  <slot/>
</ul>

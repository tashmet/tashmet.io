<script lang="ts">
	export let href: string;
</script>

<a class="anchor text-active hover:border-b border-active" href={href}>
  <slot/>
</a>

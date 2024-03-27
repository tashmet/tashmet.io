<script lang="ts">
  export let title: string;
  export let icon: string;

	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const { registerTab, selectedTab } = getContext<any>(TABS);
  const tab = { title, icon };

  registerTab(tab);
</script>

{#if $selectedTab === tab }
	<slot></slot>
{/if}

<script context="module">
	export const TABS = '';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const tabs = writable<any[]>([]);
	const selectedTab = writable<any>(undefined);

	setContext(TABS, {
		registerTab: (tab: any) => {
      if ($selectedTab === undefined) {
        selectedTab.set(tab);
      }
      tabs.update(items => items.concat(tab));
		},

		selectTab: (tab: any) => {
      selectedTab.set(tab);
		},

		selectedTab,
	});
</script>

<ul class="flex mt-12">
  {#each $tabs as tab}
    <li class="px-12 text-center">
      <button on:click={() => selectedTab.set(tab)}>
        {#if tab.icon}
          <span class={`material-symbols-outlined text-5xl ${tab === $selectedTab ? 'text-teal-500' : 'text-black'}`}>
            {tab.icon}
          </span>
        {/if}
        {#if tab.title}
          <h3 class={`font-bold text-sm ${tab === $selectedTab ? 'text-teal-500' : 'text-black'}`}>{tab.title}</h3>
        {/if}
      </button>
    </li>
  {/each}
</ul>

<slot/>

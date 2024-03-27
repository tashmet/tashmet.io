<script lang="ts">
  import "../app.css";
  import Navigation from "../components/nav/index.svelte";
  import site from '../site.json';
  import toc from '../toc.json';

  const nodes = toc.ast;

  export let topic: any;
  export let slug: any;
  export let title: any;
  export let description: any;
  export let headings: any[] = [];
  export let prev: any;
  export let next: any;
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
  <Navigation nodes={nodes} slug={slug}/>

  <div class="lg:pl-[19.5rem]">
    <div class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
      <header class="mb-2">
        <h2 class="text-active">{topic}</h2>
        <h1 class="text-3xl font-bold">{title}</h1>
        <p class="text-lg text-slate-500">{description}</p>
      </header>

      <div class="my-16">
        <slot/>
      </div>

      <nav class={`flex ${prev ? 'justify-between' : 'justify-end'}`}>
        {#if prev}
          <a class="text-sm text-slate-800 hover:text-active font-bold flex" href={prev.slug}>
            <span class="-mt-0.5 material-symbols-outlined">chevron_left</span>
            <span>{prev.title}</span>
          </a>
        {/if}
        {#if next}
          <a class="text-sm text-slate-800 hover:text-active font-bold flex" href={next.slug}>
            <span>{next.title}</span>
            <span class="-mt-0.5 material-symbols-outlined">chevron_right</span>
          </a>
        {/if}
      </nav>

      <footer class="border-t my-4 py-8">
        <p>{site.name}</p>
      </footer>
    </div>
  </div>

  <div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
    <div class="hidden lg:block fixed z-20 overflow-y-auto h-full">
      <h1 class="font-semibold text-lg pb-4">On this page</h1>
      <ul class="">
        {#each headings as {depth, title}}
          <li class="{depth === 1 ? 'text-sm font-medium mt-4' : 'flex text-xs font-light mt-1'}">
            {#if depth > 1}
            <span class="material-symbols-outlined">
              chevron_right
            </span>
            {/if}
            <a class="table align-middle" href={'#' + title.trim().replace(/\W+/g, '-').toLowerCase()}>{title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

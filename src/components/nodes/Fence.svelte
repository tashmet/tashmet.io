<script lang="ts">
  import hljs from 'highlight.js';

	export let language: string = 'shell';
	export let content: string;
  export let process: boolean;

  $: html = hljs.highlight(content.trim(), { language }).value;
</script>

<pre class="text-white p-4 my-4 rounded-md text-sm overflow-x-auto" style="background: var(--code-bg)">
  <code class="language-typescript">{@html html}</code>
</pre>

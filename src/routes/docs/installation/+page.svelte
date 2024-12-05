<script>
	import Cli from '$lib/components/site/cli.svelte';
	import Code from '$lib/components/site/code.svelte';
	import PageHeader from '$lib/components/site/page-header.svelte';
	import { scrollToId } from '$lib/helper.ts';
</script>

<div class="sticky top-4">
	<aside class="absolute right-0 flex w-64 flex-col gap-2 text-sm">
		<p class="mb-1 text-left text-xl font-semibold">On this page</p>
		<button on:click={() => scrollToId('1')} class="text-left font-semibold"
			>Setup your project</button
		>
		<button on:click={() => scrollToId('1.1')} class="ml-4 text-left">Create SvelteKit App</button>
		<button on:click={() => scrollToId('1.2')} class="ml-4 text-left">Add Tailwind CSS</button>
		<button on:click={() => scrollToId('1.3')} class="ml-4 text-left">Initialize lomer-ui</button>
		<button on:click={() => scrollToId('1.4')} class="ml-4 text-left">Configure tailwind</button>
		<button on:click={() => scrollToId('1.5')} class="ml-4 text-left">That's it!</button>
	</aside>
</div>

<div class="flex flex-col gap-4 pr-80">
	<PageHeader title="Installation" sub="Docs">
		<p>
			Guide to use <span class="font-mono">lomer-ui</span> in SvelteKit.
		</p>
	</PageHeader>

	<p id="1" class="mb-4 mt-8 text-2xl">Setup your project</p>
	<p id="1.1" class="mb-1 text-xl"><span class="font-mono">1.</span> Create SvelteKit App</p>
	<div class="ml-2 border-l pb-8 pl-6 dark:border-zinc-700">
		<Cli code="npx sv create my-app" />
	</div>

	<p id="1.2" class="mb-1 text-xl"><span class="font-mono">2.</span> Add Tailwind CSS</p>
	<div class="ml-2 border-l pb-8 pl-6 dark:border-zinc-700">
		<Cli code="npx sv add tailwindcss" />
	</div>

	<p id="1.3" class="mb-1 text-xl"><span class="font-mono">3.</span> Initialize lomer-ui</p>
	<div class="ml-2 border-l pb-8 pl-6 dark:border-zinc-700">
		<Cli code="npx lomer-ui init" />
	</div>

	<p id="1.4" class="mb-1 text-xl">
		<span class="font-mono">4.</span> Configure tailwind.config.ts
	</p>
	<div class="ml-2 border-l pb-8 pl-6 dark:border-zinc-700">
		<Code
			code={`import type { Config } from 'tailwindcss';` +
				`\n\nexport default {` +
				`\n\tcontent: ['./src/**/*.{html,js,svelte,ts}'],` +
				`\n\ttheme: { extend: {} },` +
				`\n\tplugins: [],` +
				`\n\tsafelist: ['dark'],` +
				`\n\tdarkMode: ['class']` +
				`\n} satisfies Config;`}
			language="javascript"
		/>
	</div>

	<p id="1.5" class="text-xl"><span class="font-mono">5.</span> That's it!</p>

	<p>Run this command to add button component.</p>
	<div class="">
		<Cli code="lomer-ui add button" />
	</div>
	<p class="mt-2">Import and use it.</p>
	<div class="flex flex-col gap-2">
		<Code code={`import Button from '$lib/components/ui/button.svelte'`} language="javascript" />
		<Code code={`<Button>Button</Button>`} language="xml" />
	</div>
</div>

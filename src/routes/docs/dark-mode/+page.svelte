<script>
	import Cli from '$lib/cli.svelte';
	import Code from '$lib/code.svelte';
	import { scrollToId } from '$lib/helper.ts';
	import { Link } from '$lib/index.ts';
	import Screen from '$lib/screen.svelte';
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<div class="sticky top-0">
	<aside class="absolute right-0 flex w-64 flex-col gap-2 text-sm">
		<p class="mb-1 text-left text-xl font-semibold">On this page</p>
		<button on:click={() => scrollToId('0')} class="text-left font-semibold">Usage</button>
		<button on:click={() => scrollToId('1')} class="ml-2 text-left">Install mode-watcher</button>
		<button on:click={() => scrollToId('2')} class="ml-2 text-left"
			>Add ModeWatcher component</button
		>
		<button on:click={() => scrollToId('3')} class="ml-2 text-left">That's it</button>
	</aside>
</div>

<div class="pr-80">
	<p class="text-zinc-500">Docs</p>
	<p class="font-mono text-3xl">Dark Mode</p>
	<p class="text-zinc-500">
		Adding dark mode to your site using <Link
			class="font-mono underline"
			href="https://mode-watcher.svecosystem.com/"
			target="_blank">mode-watcher</Link
		>.
	</p>

	<p id="0" class="mb-4 mt-8 text-2xl">Usage</p>
	<p id="1" class="mb-1 text-xl"><span class="font-mono">1.</span> Install mode-watcher</p>
	<div class="ml-2 border-l pb-8 pl-6 dark:border-zinc-700">
		<Cli code="npm install mode-watcher" />
	</div>

	<p id="2" class="mb-1 text-xl"><span class="font-mono">2.</span> Add ModeWatcher component</p>
	<div class="ml-2 flex flex-col gap-2 border-l pb-8 pl-6 dark:border-zinc-700">
		<p>
			Add the <span class="rounded bg-zinc-200 px-1 dark:bg-zinc-800">{`<ModeWatcher />`}</span>
			component to your root
			<span class="rounded bg-zinc-200 px-1 dark:bg-zinc-800">+layout.svelte</span> file.
		</p>
		<Code code={`import { ModeWatcher } from "mode-watcher";`} language="javascript" />
		<Code code={`<ModeWatcher />\n<slot />`} language="xml" />
	</div>

	<p id="3" class="mb-1 text-xl"><span class="font-mono">3.</span> That's it</p>
	<div class="ml-2 flex flex-col gap-2 pb-8 pl-6 dark:border-zinc-700">
		<p>
			Here's an example of how to use the <span class="rounded bg-zinc-200 px-1 dark:bg-zinc-800"
				>toggleMode</span
			>
			function and <span class="rounded bg-zinc-200 px-1 dark:bg-zinc-800">$mode</span> to toggle:
		</p>
		<Screen class="flex justify-center p-8">
			<Button size="icon" on:click={toggleMode}>
				{#if $mode === 'light'}
					<Icon icon="line-md:moon-to-sunny-outline-loop-transition" width={24} height={24} />
				{:else}
					<Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" width={24} height={24} />
				{/if}
			</Button>
		</Screen>
		<Code
			code={`import Button from '$lib/components/ui/button.svelte';` +
				`\nimport Icon from '@iconify/svelte';` +
				`\nimport { toggleMode, mode } from 'mode-watcher';`}
			language="javascript"
		/>
		<Code
			code={`<Button size="icon" on:click={toggleMode}>` +
				`\n\t{#if $mode === 'light'}` +
				`\n\t\t<Icon \n\t\t\ticon="line-md:moon-to-sunny-outline-loop-transition" \n\t\t\twidth={24} \n\t\t\theight={24} \n\t\t/>` +
				`\n\t{:else}` +
				`\n\t\t<Icon \n\t\t\ticon="line-md:sunny-outline-to-moon-alt-loop-transition" \n\t\t\twidth={24} \n\t\t\theight={24} \n\t\t/>` +
				`\n\t{/if}` +
				`\n</Button>`}
			language="xml"
		/>
	</div>
</div>

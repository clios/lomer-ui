<script>
	import Icon from '@iconify/svelte';
</script>

<p class="font-mono text-3xl">Message</p>

<div class="my-4 flex max-w-[600px] flex-col gap-1 rounded-md border p-4 dark:border-zinc-700">
	<div class="flex justify-between">
		<p class="font-mono text-xl font-semibold">Hello World!</p>
		<p class="mb-2 text-zinc-500">December 08, 2024</p>
	</div>
	<p>
		Today I want to share my personal svelte library,
		<span
			class="rounded border border-zinc-950 bg-zinc-50 px-2 font-mono dark:border-zinc-50 dark:bg-zinc-950"
			>lomer-ui</span
		>
	</p>
	<p>Install it as a dependency or just copy-paste components.</p>
	<p>As a freelance developer, I'm using it to build websites.</p>
	<p>You can use it for free and no need for attribution.</p>
	<p class="flex items-center">
		Just let me know if you do. I'd <Icon class="mx-1 inline-block text-red-500" icon="mdi:heart" />
		to see it.
	</p>
	<p class="mt-1 text-right italic">- lomer</p>
</div>

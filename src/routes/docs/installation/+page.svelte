<script>
	import Cli from '$lib/cli.svelte';
	import Link from '$lib/link.svelte';
	import Icon from '@iconify/svelte';
</script>

<p class="font-mono text-3xl">Installation</p>
<p>Choose your setup</p>

<p class="mb-1 mt-8 text-2xl">For quick and easy set up.</p>
<Cli code="npm install lomer-ui" language="shell" />

<p class="mt-8 text-2xl">For building your own component.</p>
<p class="mt-4 text-xl">1. Create SvelteKit App</p>
<p>Use the SvelteKit CLI to create a new project.</p>
<Cli code="npm create svelte@latest my-app" language="shell" />

<p class="mt-4 text-xl">2. Add Tailwind CSS</p>
<p>Use the Svelte CLI to add Tailwind CSS to your project.</p>
<Cli code="npx sv add tailwindcss" language="shell" />

<p class="mt-4 text-xl">3. Install dependencies</p>
<Cli code="npm install" language="shell" />

<!-- <Link href="https://svelte.dev/docs/kit/creating-a-project" target="_blank" class="mt-4 text-xl">
	Create SvelteKit App <Icon icon="mdi:open-in-new" />
</Link>
<Link href="https://tailwindcss.com/docs/guides/sveltekit" target="_blank" class="mt-4 text-xl">
	Install Tailwind CSS with SvelteKit
</Link> -->

<script>
	import Button from '$lib/components/ui/button.svelte';
	import CopyCLI from '$lib/components/copy-c-l-i.svelte';
	import Dialog from '$lib/components/ui/dialog.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/components/ui/link.svelte';
	import Screen from '$lib/components/screen.svelte';
	import SvelteSyntax from '$lib/components/templates/svelte-syntax.svelte';
	import { goto } from '$app/navigation';

	let isOpenDialog = $state(false);
</script>

<svelte:head>
	<title>lomer-ui</title>
</svelte:head>

<Dialog class="max-w-96" title="Hi devs," isOpen>
	<p class="text-muted mt-4">
		I'm currently rebuilding this project to provide a better experience.
	</p>
	<p class="text-muted mt-4">Will be back soon.</p>
	<p class="text-muted mt-4">Clios, lomer-ui dev.</p>
</Dialog>

<div class="mx-auto flex w-full max-w-[1200px] flex-col gap-16">
	<section class="flex justify-between lg:text-xl">
		<p class="flex items-end text-sm">
			<span>Svelte</span>
			<span class="text-primary mb-[1px] pl-1 text-sm">v5</span>
			<span class="text-muted px-2 text-sm">&</span>
			<span>Tailwind CSS</span>
			<span class="text-primary mb-[1px] pl-1 text-sm">v4</span>
		</p>

		<Link
			class="items-center text-sm no-underline sm:flex"
			href="https://github.com/sponsors/clios"
			target="_blank"
		>
			<span class="hidden sm:inline">Sponsor</span>
			<Icon class="text-primary inline size-6" icon="mdi:heart-outline" />
		</Link>
	</section>

	<section class="text-muted lg:text-xl">
		<p class="text-center">
			<span>Standalone components for </span>
			<span class="text-orange-500">Svelte</span>
			<br class="sm:hidden" />
			<span>powered by</span>
			<span class="text-cyan-500">Tailwind CSS</span>
		</p>
	</section>

	<div class="grid place-content-center lg:text-xl">
		<p class="text-primary text-center text-3xl lg:text-4xl">lomer-ui</p>
		<p class="text-muted text-center">Keep It Simply Styled</p>
		<div class="mt-8 flex justify-center gap-4">
			<Button class="text-nowrap" onclick={() => goto('/docs/introduction')}>
				Get Started
			</Button>

			<Button
				variant="secondary"
				onclick={() =>
					window.open('https://github.com/clios/lomer-ui', '_blank')}
			>
				<Icon icon="mdi:github" width={24} height={24} />
				GitHub</Button
			>
		</div>
	</div>

	<section class="text-muted text-center lg:text-xl">
		<p>
			A dead-simple <span class="text-fg font-semibold">CLI tool</span>
			to
			<span class="text-fg font-semibold">instant</span>ly
			<br class="sm:hidden" />
			kickstart your
			<span class="text-fg font-semibold">components</span>.
		</p>
		<p class="mt-8 sm:mt-0">
			No extra UI libraries required.<br class="sm:hidden" /> Just clean,
			standalone code <br class="sm:hidden" />
			<span class="text-fg font-semibold">ready to use</span>.
		</p>
	</section>

	<section
		class="text-muted flex flex-col items-center gap-2 text-center lg:text-xl"
	>
		<p>
			<span class="text-fg font-semibold">Start</span>
			<span>building your own <br class="sm:hidden" /> components</span>
			<span class="text-fg font-semibold">with CLI</span>.
		</p>
		<CopyCLI code="npx lomer-ui add" />
		<p>That's it!</p>
	</section>
</div>

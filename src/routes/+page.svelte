<script>
	import Button from '$lib/button.svelte';
	import CardCreateAnAccount from './card__create-an-account.svelte';
	import CardNotifications from './card__notifications.svelte';
	import CardPaymentMethod from './card__payment-method.svelte';
	import Icon from '@iconify/svelte';
	import Screen from '$site/screen.svelte';
	import { goto } from '$app/navigation';
</script>

<Screen class="p-8" lineColor="#71717A10">
	<p class="font-semibold">Beta Version</p>
	<p class="font-mono text-6xl">lo<span class="font-serif">m</span>er-ui</p>
	<p class="text-2xl font-semibold">Another build your component library.</p>
	<p class="text-2xl font-semibold">Fix it. Tune it. Keep it. Dead simple.</p>

	<div class="my-8 flex gap-4">
		<Button onclick={() => goto('/docs/installation')}>Get Started</Button>
		<Button variant="secondary">
			<Icon icon="mdi:github" width={24} height={24} />
			GitHub</Button
		>
	</div>

	<p class="mt-16 flex items-center text-4xl font-semibold">
		<Icon icon="devicon:svelte" />
		<span>SvelteKit + </span>
		<Icon class="ml-4 mr-2" icon="devicon:tailwindcss" />
		<span>Tailwind CSS</span>
	</p>

	<div class="mt-4 flex gap-4">
		<CardNotifications />
		<CardCreateAnAccount />
		<CardPaymentMethod />
	</div>
</Screen>

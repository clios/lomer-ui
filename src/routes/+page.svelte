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
	<p class="mb-2 text-6xl">lomer-ui</p>
	<p class="mb-1 text-xl">
		A dead-simple CLI tool to instantly kickstart your own components.
	</p>
	<p class="text-xl">
		No underlying UI libraries required, just clean and standalone code ready
		for use.
	</p>

	<div class="mb-8 mt-10 flex gap-4">
		<Button onclick={() => goto('/docs/installation')}>Get Started</Button>
		<Button
			variant="secondary"
			onclick={() => window.open('https://github.com/clios/lomer-ui', '_blank')}
		>
			<Icon icon="mdi:github" width={24} height={24} />
			GitHub</Button
		>
	</div>

	<p class="mt-16 flex items-center text-4xl font-semibold">
		<span>Svelte</span>
		<Icon class="mx-4" icon="mdi:plus" />
		<span>Tailwind CSS</span>
	</p>

	<div class="mt-4 flex gap-4">
		<CardNotifications />
		<CardCreateAnAccount />
		<CardPaymentMethod />
	</div>
</Screen>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { twMerge } from 'tailwind-merge';
	import { fade } from 'svelte/transition';

	type Props = {
		class?: string;
		command?: string;
	};

	let { class: className, command }: Props = $props();

	let copyMessage = $state('');
	let pre;

	// Copy command to clipboard
	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(command || '');
			copyMessage = 'Copied!';
			setTimeout(() => (copyMessage = ''), 2000); // Reset message after 2 seconds
		} catch (err) {
			console.error('Failed to copy command:', err);
			copyMessage = 'Failed to copy!';
		}
	}
</script>

<div class={twMerge('relative flex flex-col text-sm', className)}>
	<!-- Copy Button -->
	<div class="absolute top-2 right-2">
		<Button
			class="outline-none"
			size="icon"
			variant="ghost"
			onclick={copyToClipboard}
		>
			{#if copyMessage}
				<div in:fade>
					<Icon class="text-teal-500" icon="mdi:check" />
				</div>
			{:else}
				<div in:fade={{ delay: 300 }}>
					<Icon icon="mdi:clipboard-outline" />
				</div>
			{/if}
		</Button>
	</div>

	<!-- Highlighted Command -->
	<pre
		class="bg-card overflow-hidden rounded border px-4 py-2 text-left"
		bind:this={pre}><p>{command}</p></pre>
</div>

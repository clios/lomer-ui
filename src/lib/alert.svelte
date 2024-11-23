<script lang="ts">
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';

	export let title: string;
	export let message: string;
	export let variant: 'default' | 'destructive' = 'default';
</script>

{#if message}
	<div
		class={clsx(
			'rounded-md border p-4 text-left',
			variant === 'default' && 'border-zinc-500',
			variant === 'destructive' && 'border-red-500 text-red-500'
		)}
	>
		<div class="flex gap-2">
			{#if variant === 'default'}
				<Icon class="animate-pulse" icon="mdi:terminal-line" width="24" />
			{:else}
				<Icon icon="mdi:error-outline" width="24" />
			{/if}
			<p class="font-semibold">{title}</p>
		</div>
		<div class="pl-8">
			{message}
		</div>
	</div>
{/if}

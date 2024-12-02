<script lang="ts">
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';
	import Button from './button.svelte';

	export let title: string;
	export let icon: string = 'mdi:terminal-line';
	export let variant: 'default' | 'destructive' = 'default';
	export let isClosable: boolean = false;
	export let isOpen: boolean = true;
	export { className as class };

	let className = '';
</script>

{#if isOpen}
	<div
		class={clsx(
			'relative w-full rounded-md border p-4 text-left',
			variant === 'default' && 'border-zinc-500',
			variant === 'destructive' && 'border-red-500 text-red-500',
			className
		)}
	>
		{#if isClosable}
			<Button
				class="absolute right-2 top-2"
				variant="ghost"
				edge="circle"
				size="icon"
				on:click={() => (isOpen = false)}
			>
				<Icon icon="line-md:close-circle-filled" width={24} height={24} />
			</Button>
		{/if}
		<div class="flex gap-2">
			<Icon {icon} width={24} height={24} />
			<p class="font-semibold">{title}</p>
		</div>
		<div class="pl-8">
			<slot />
		</div>
	</div>
{/if}

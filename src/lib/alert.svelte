<script lang="ts">
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';

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
			<button
				class={clsx(
					'absolute right-2 top-2 rounded-full',
					'bg-zinc-50/0 text-zinc-950 dark:bg-zinc-950/0 dark:text-zinc-50', // color
					'border border-zinc-50/0 dark:border-zinc-50/0', // color
					'active:outline-2 active:outline-offset-0', // color
					'outline-cyan-500 hover:outline hover:outline-1', // hover
					'focus:outline focus:outline-1 focus:outline-offset-2', // focus
					'focus:outline-cyan-500 focus:ring-offset-1', // focus
					'disabled:focus:outline-none' // focus
				)}
				on:click={() => (isOpen = false)}
			>
				<Icon icon="line-md:close-circle-filled" width={24} height={24} />
			</button>
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

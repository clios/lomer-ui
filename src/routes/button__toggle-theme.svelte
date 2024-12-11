<script>
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<Button variant="ghost" edge="sharp" size="icon" on:click={toggleMode}>
	{#if $mode === 'light'}
		<Icon
			icon="line-md:moon-to-sunny-outline-loop-transition"
			width={24}
			height={24}
		/>
	{:else}
		<Icon
			icon="line-md:sunny-outline-to-moon-alt-loop-transition"
			width={24}
			height={24}
		/>
	{/if}
</Button>

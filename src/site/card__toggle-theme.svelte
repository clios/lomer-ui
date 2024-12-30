<script>
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<div class="mt-4 ml-4">
	<p class="text-sm text-zinc-500 dark:text-zinc-400">Explore in</p>
	<div class="mt-1 flex items-center gap-2">
		<Button class="gap-2" variant="inverted" size="small" onclick={toggleMode}>
			{#if $mode === 'light'}
				<Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
				Light Mode
			{:else}
				<Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
				Dark Mode
			{/if}
		</Button>
	</div>
</div>

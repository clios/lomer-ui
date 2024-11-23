<script lang="ts">
	import clsx from 'clsx';

	export let value: string | undefined | null;
	export let placeholder: string = 'N/A';
	export let ellipsis: boolean = false;
	export { className as class };

	let className = '';
</script>

<p
	class={clsx(
		ellipsis && 'overflow-hidden text-ellipsis whitespace-nowrap', // ellipsis
		className
	)}
>
	{#if value}
		{value}
	{:else}
		{placeholder}
	{/if}
</p>

<script lang="ts">
	import clsx from 'clsx';
	import { fade } from 'svelte/transition';

	export { className as class };

	let className = '';
</script>

<form
	class={clsx('flex flex-col gap-8 py-4 sm:py-8', className)}
	in:fade={{ delay: 400 }}
	out:fade={{ duration: 200 }}
	on:submit
	{...$$restProps}
>
	<slot />
</form>

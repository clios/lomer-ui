<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export { className as class };
	let className = '';
</script>

<div
	class="mb-8 overflow-hidden rounded border border-zinc-300 dark:border-zinc-700"
>
	<p
		class="bg-zinc-300 px-4 py-1 text-zinc-950 dark:bg-zinc-700 dark:text-zinc-50"
	>
		Preview
	</p>
	<div class={twMerge('flex justify-center p-8', className)}>
		<slot />
	</div>
</div>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let lineColor = '#71717a10'; // Default color of the grid lines
	export { className as class };

	let className = '';
</script>

<div
	class={twMerge('relative p-8', className)}
	style="
	background-image: linear-gradient({lineColor} 1px, transparent 1px),
	linear-gradient(90deg, {lineColor} 1px, transparent 1px);
	background-size: 1rem 1rem;"
>
	<slot />
</div>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let lineColor = '#71717a30'; // Default color of the grid lines
	export { className as class };

	let className = '';
</script>

<div
	class={twMerge('relative', className)}
	style="
	background-image: linear-gradient({lineColor} 1px, transparent 1px),
	linear-gradient(90deg, {lineColor} 1px, transparent 1px);
	background-size: 1rem 1rem;"
>
	<div
		class="to-bg pointer-events-none absolute top-0 h-8 w-full bg-gradient-to-t from-transparent sm:h-16"
	></div>
	<div
		class="to-bg pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-l from-transparent sm:w-16"
	></div>
	<div class={twMerge('px-12 py-12', className)}>
		<slot />
	</div>
	<div
		class="to-bg pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent sm:w-16"
	></div>
	<div
		class="to-bg pointer-events-none absolute bottom-0 h-8 w-full bg-gradient-to-b from-transparent sm:h-16"
	></div>
</div>

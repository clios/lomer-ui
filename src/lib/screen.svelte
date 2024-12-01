<script lang="ts">
	import clsx from 'clsx';

	export let size = '1rem'; // Default size of the grid box
	export let lineColor = '#71717a15'; // Default color of the grid lines
	export { className as class };

	let className = '';
</script>

<div
	class={clsx('relative', className)}
	style="
		background-image: linear-gradient({lineColor} 1px, transparent 1px),
			linear-gradient(90deg, {lineColor} 1px, transparent 1px);
		background-size: {size} {size};
	"
>
	<slot />
</div>

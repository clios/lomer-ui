<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let id;
	export { className as class };

	let className = '';
</script>

<p {id} class={twMerge('pt-4 font-semibold md:text-xl', className)}>
	<slot />
</p>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let id;
	export { className as class };

	let className = '';
</script>

<p {id} class={twMerge('pt-4 text-xl font-semibold', className)}>
	<slot />
</p>

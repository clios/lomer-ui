<script lang="ts">
	import clsx from 'clsx';

	export let id;
	export { className as class };

	let className = '';
</script>

<p {id} class={clsx('pt-4 text-xl font-semibold', className)}>
	<slot />
</p>

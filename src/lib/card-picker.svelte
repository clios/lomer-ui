<script lang="ts">
	import clsx from 'clsx';

	export let name: string;
	export let value: (string | boolean) | null = '';
	export let variant: 'default' = 'default';
	export let radioValue: string | boolean | null;
	export let disabled = false;

	export { className as class };

	let className = '';
</script>

<div class={clsx(variant === 'default' && 'relative')}>
	<input
		class={clsx(variant === 'default' && 'peer hidden appearance-none')}
		id={name + '-' + radioValue}
		{name}
		type="radio"
		value={radioValue}
		{disabled}
		bind:group={value}
	/>

	<label
		class={clsx(
			'flex rounded p-2 hover:cursor-pointer', // base
			'hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500', // hover
			'border dark:border-zinc-700', // border
			'shadow-sm dark:shadow-none', // shadow
			'peer-checked:outline peer-checked:hover:outline-2 peer-checked:hover:outline-offset-0', // checked
			className
		)}
		for={name + '-' + radioValue}
	>
		<slot />
	</label>
</div>

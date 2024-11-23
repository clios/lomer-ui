<script lang="ts">
	export let name: string;
	export let label: string;
	export let group: (string | boolean) | null = '';
	export let value: string | boolean | null;
	export let disabled = false;
</script>

<label class="relative flex items-center gap-3 hover:cursor-pointer hover:text-cyan-500">
	<input
		type="radio"
		class="hover:cursor-pointer focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-cyan-500"
		bind:group
		{value}
		{name}
		{disabled}
	/>
	{label}
</label>

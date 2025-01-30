<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	let checked = $state(false);
</script>

<Checkbox label="I agree without reading" bind:checked>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aspernatur
	numquam quam placeat libero maxime dolorum?
</Checkbox>

<p class="text-primary mt-4">Checked: {checked}</p>

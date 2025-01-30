<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Field from '$lib/components/ui/field.svelte';
</script>

<Field class="flex flex-col gap-2">
	<Checkbox label="Disabled checkbox" disabled checked />
	<Checkbox label="Disabled checkbox" disabled />
</Field>

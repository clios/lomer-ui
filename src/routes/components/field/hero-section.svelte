<script lang="ts">
	import Field from '$lib/components/core/field.svelte';
	import Input from '$lib/components/core/input.svelte';
	import Screen from '$lib/components/screen.svelte';
</script>

<Screen class="flex justify-center">
	<div
		class="flex flex-col gap-4 rounded-sm border bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
	>
		<Field label="Email">
			<Input type="email" placeholder="me@example.com" />
		</Field>
	</div>
</Screen>

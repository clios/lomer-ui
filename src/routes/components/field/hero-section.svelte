<script lang="ts">
	import Field from '$lib/field.svelte';
	import Input from '$lib/input.svelte';
	import Screen from '$site/screen.svelte';
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

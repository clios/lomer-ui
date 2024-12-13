<script lang="ts">
	import Field from '$lib/field.svelte';
	import Icon from '@iconify/svelte';
	import Input from '$lib/input.svelte';
	import { Button } from '$lib/index.js';
</script>

<div
	class="h-min w-96 rounded-md border bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
>
	<p class="text-2xl font-semibold">Create an account</p>
	<p class="mb-4 text-zinc-500">Sign up with</p>

	<div class="my-4 flex gap-4">
		<Button class="w-full justify-center" variant="secondary">
			<Icon icon="mdi:github" width={24} height={24} /> Github
		</Button>
		<Button class="w-full justify-center" variant="secondary">
			<Icon icon="mdi:google" width={24} height={24} /> Google
		</Button>
	</div>

	<div
		class="relative my-4 flex items-center justify-center gap-2 text-zinc-500"
	>
		<div class=" w-full border-b dark:border-zinc-700"></div>
		<p class="whitespace-nowrap">or create account by</p>
		<div class=" w-full border-b dark:border-zinc-700"></div>
	</div>

	<Field class="my-4" label="Email">
		<Input placeholder="lomer@example.com" />
	</Field>

	<Field class="my-4" label="Password">
		<Input type="password" />
	</Field>

	<Button class="mt-6 w-full justify-center">Create account</Button>
</div>

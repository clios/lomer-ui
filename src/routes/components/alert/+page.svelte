<script lang="ts">
	import Code from '$lib/code.svelte';
	import Screen from '$lib/screen.svelte';
	import Alert from '$lib/alert.svelte';
	import Button from '$lib/button.svelte';

	let isOpen = true;
</script>

<h1 class="font-mono text-3xl font-bold">Alert</h1>
<p>A component that looks like an alert.</p>
<Code code={`import { Alert } from 'lomer-ui'`} language="javascript" />

<p class="border-b pb-1 text-2xl font-semibold">Example</p>
<Screen>
	<div class="grid grid-cols-[1fr_1fr] gap-4 pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="flex items-center px-8">
			<Alert title="Notice">Your bill is due tomorrow.</Alert>
		</div>
		<div class="grid items-center">
			<Code code={`<Alert title="Notice">Your bill is due tomorrow.</Alert>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">Custom Icon</p>
<Screen>
	<div class="grid grid-cols-[1fr_1fr] gap-4 pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="flex items-center px-8">
			<Alert title="Notice" icon="mdi:error-outline">Your bill is due tomorrow.</Alert>
		</div>
		<div class="grid items-center">
			<Code
				code={`<Alert` +
					`\n\ttitle="Notice"` +
					`\n\ticon="mdi:error-outline"` +
					`\n>` +
					`\n\tYour bill is due tomorrow.` +
					`\n</Alert>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">Destructive</p>
<Screen>
	<div class="grid grid-cols-[1fr_1fr] gap-4 pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="flex items-center px-8">
			<Alert title="Important" variant="destructive">Your bill is due today</Alert>
		</div>
		<div class="grid items-center">
			<Code
				code={`<Alert title="Important" variant="destructive" >` +
					`\n\tYour bill is due today` +
					`\n</Alert>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">Closable</p>
<Screen>
	<div class="grid grid-cols-[1fr_1fr] gap-4 pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="flex flex-col items-center justify-center gap-4 px-8">
			<Button on:click={() => (isOpen = true)}>Open alert</Button>
			<Alert title="Notice" bind:isOpen isClosable>Your bill is due tomorrow.</Alert>
		</div>
		<div class="grid items-center">
			<Code
				code={`import { Alert, Button } from 'lomer-ui'` +
					`\n\nlet isOpen = true` +
					`\n\nfunction openAlert() {` +
					`\n\tisOpen = true` +
					`\n}`}
				language="typescript"
			/>
			<Code
				code={`<Button on:click={openAlert}>Open alert</Button>` +
					`\n\n<Alert ` +
					`\n\ttitle="Notice" ` +
					`\n\tbind:isOpen` +
					`\n\tisClosable` +
					`\n>` +
					`\n\tYour bill is due tomorrow.` +
					`\n</Alert>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

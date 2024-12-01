<script lang="ts">
	import Code from '$lib/code.svelte';
	import Screen from '$lib/screen.svelte';
	import Dialog from '$lib/dialog.svelte';
	import Button from '$lib/button.svelte';

	let isOpen = false;
</script>

<h1 class="font-mono text-3xl font-bold">Dialog</h1>
<p>A component that looks like a dialog.</p>
<Code code={`import { Dialog } from 'lomer-ui'`} language="javascript" />

<p class="border-b pb-1 text-2xl font-semibold">Example</p>
<Screen>
	<div class="grid grid-cols-[1fr_1fr] gap-4 pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="flex flex-col items-center justify-center gap-4 px-8">
			<Button on:click={() => (isOpen = true)}>Open dialog</Button>
			<Dialog title="Let me say something" bind:isOpen>
				<p>Your bill is due tomorrow.</p>
				<div class="mt-4 flex justify-end gap-2">
					<Button variant="outline">Yes</Button>
					<Button>Pay now</Button>
				</div>
			</Dialog>
		</div>
		<div class="grid items-center">
			<Code
				code={`import { Dialog, Button } from 'lomer-ui'` +
					`\n\nlet isOpen = false` +
					`\n\nfunction openDialog() {` +
					`\n\tisOpen = true` +
					`\n}`}
				language="typescript"
			/>
			<Code
				code={`<Button on:click={openDialog}>Open dialog</Button>` +
					`\n\n<Dialog title="Let me say something" bind:isOpen>` +
					`\n\t<p>Your bill is due tomorrow.</p>` +
					`\n\t<div class="mt-4 flex justify-end gap-2">` +
					`\n\t\t<Button variant="outline">Yes</Button>` +
					`\n\t\t<Button>Pay now</Button>` +
					`\n\t</div>` +
					`\n</Dialog>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

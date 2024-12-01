<script lang="ts">
	import Code from '$lib/code.svelte';
	import Screen from '$lib/screen.svelte';
	import Drawer from '$lib/drawer.svelte';
	import Button from '$lib/button.svelte';

	let isOpen = false;
	let isOpenNoBackdrop = false;
</script>

<h1 class="font-mono text-3xl font-bold">Drawer</h1>
<p>A component that looks like a drawer.</p>
<Code code={`import { Drawer } from 'lomer-ui'`} language="javascript" />

<p class="border-b pb-1 text-2xl font-semibold">Examples</p>
<Screen>
	<div class="grid grid-cols-[1fr_1fr] gap-4 pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="flex flex-col items-center justify-center gap-4 px-8">
			<Button on:click={() => (isOpen = true)}>Open drawer</Button>
			<Drawer title="Let me say something" bind:isOpen>
				<p class="p-8">Your bill is due tomorrow.</p>
				<div class="flex justify-end gap-4 px-8 pb-4">
					<Button variant="outline">Yes</Button>
					<Button>Pay now</Button>
				</div>
			</Drawer>
		</div>
		<div class="grid items-center">
			<Code
				code={`import { Drawer, Button } from 'lomer-ui'` +
					`\n\nlet isOpen = false` +
					`\n\nfunction openDrawer() {` +
					`\n\tisOpen = true` +
					`\n}`}
				language="typescript"
			/>
			<Code
				code={`<Button on:click={openDrawer}>Open drawer</Button>` +
					`\n\n<Drawer title="Let me say something" bind:isOpen>` +
					`\n\t<p class="p-8">Your bill is due tomorrow.</p>` +
					`\n\t<div class="flex justify-end gap-4 px-8 pb-4">` +
					`\n\t\t<Button variant="outline">Yes</Button>` +
					`\n\t\t<Button>Pay now</Button>` +
					`\n\t</div>` +
					`\n</Drawer>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">No Backdrop</p>
<Screen>
	<div class="grid grid-cols-[1fr_1fr] gap-4 pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="flex flex-col items-center justify-center gap-4 px-8">
			<Button on:click={() => (isOpenNoBackdrop = true)}>Open drawer</Button>
			<Drawer title="Let me say something" bind:isOpen={isOpenNoBackdrop} noBackdrop>
				<p class="p-8">Your bill is due tomorrow.</p>
				<div class="flex justify-end gap-4 px-8 pb-4">
					<Button variant="outline">Yes</Button>
					<Button>Pay now</Button>
				</div>
			</Drawer>
		</div>
		<div class="grid items-center">
			<Code
				code={`import { Drawer, Button } from 'lomer-ui'` +
					`\n\nlet isOpen = false` +
					`\n\nfunction openDrawer() {` +
					`\n\tisOpen = true` +
					`\n}`}
				language="typescript"
			/>
			<Code
				code={`<Button on:click={openDrawer}>Open drawer</Button>` +
					`\n\n<Drawer title="Let me say something" bind:isOpen>` +
					`\n\t<p class="p-8">Your bill is due tomorrow.</p>` +
					`\n\t<div class="flex justify-end gap-4 px-8 pb-4">` +
					`\n\t\t<Button variant="outline">Yes</Button>` +
					`\n\t\t<Button>Pay now</Button>` +
					`\n\t</div>` +
					`\n</Drawer>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

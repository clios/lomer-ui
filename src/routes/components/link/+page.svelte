<script lang="ts">
	import Link from '$lib/link.svelte';
	import Code from '$lib/code.svelte';
	import Screen from '$lib/screen.svelte';
</script>

<h1 class="font-mono text-3xl font-bold">Link</h1>
<p>A component that looks like a link.</p>
<Code code={`import { Link } from 'lomer-ui'`} language="javascript" />

<p class="pb-1 text-xl font-semibold">Examples</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Link href="#">Link</Link>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Link href="#">Link</Link>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">List Item</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Link href="#" variant="list-item">List Item 1</Link>
			<Link href="#" variant="list-item">List Item 2</Link>
			<Link href="#" variant="list-item">List Item 3</Link>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code
				code={`<Link href="#" variant="list-item">List Item 1</Link>` +
					`\n<Link href="#" variant="list-item">List Item 2</Link>` +
					`\n<Link href="#" variant="list-item">List Item 3</Link>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

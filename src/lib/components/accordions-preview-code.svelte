<script lang="ts">
	import Accordion from './core/accordion.svelte';
	import type { Snippet } from 'svelte';

	type Props = { preview?: Snippet; children?: Snippet };

	let { preview, children }: Props = $props();
</script>

<div class="rounded-card overflow-hidden border">
	<Accordion class="border-b" title="Preview" isOpen>
		{@render preview?.()}
	</Accordion>
	<Accordion title="Code">
		{@render children?.()}
	</Accordion>
</div>

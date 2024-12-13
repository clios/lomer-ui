<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet };
	let { children }: Props = $props();
</script>

<span class="font-mono italic text-orange-600 dark:text-orange-400">
	{@render children?.()}
</span>

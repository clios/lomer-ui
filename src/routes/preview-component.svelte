<script lang="ts">
	import Link from '$lib/link.svelte';
	import Preview from '$site/preview.svelte';
	import Icon from '@iconify/svelte';

	let { children, title, href } = $props();
</script>

<div class="flex flex-col gap-2">
	<Link class="no-underline" {href}>
		<div class="flex items-center gap-1">
			<Icon class="inline" icon="material-symbols:link" width={24} />
			<span>{title}</span>
		</div>
	</Link>

	<Preview class="h-60 items-center">
		{@render children?.()}
	</Preview>
</div>

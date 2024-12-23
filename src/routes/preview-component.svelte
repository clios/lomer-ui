<script lang="ts">
	import Link from '$lib/link.svelte';
	import Preview from '$site/preview.svelte';
	import Icon from '@iconify/svelte';

	let { children, title, href } = $props();
</script>

<div
	class="flex flex-col gap-2 sm:w-[calc(100vw-2rem)] md:w-[calc(100vw-8rem)] lg:h-full lg:w-full"
>
	<Link class="no-underline" {href}>
		<div class="flex items-center gap-1">
			<Icon class="inline" icon="material-symbols:link" width={24} />
			<span>{title}</span>
		</div>
	</Link>

	<Preview class="flex w-full items-center lg:h-72">
		{@render children?.()}
	</Preview>
</div>

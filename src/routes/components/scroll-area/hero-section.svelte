<script lang="ts">
	import Screen from '$site/screen.svelte';
	import ScrollArea from '$lib/scroll-area.svelte';
</script>

<Screen class="flex justify-center">
	<ScrollArea class="h-80 w-72 rounded border dark:border-zinc-700">
		<p class="my-2 pl-4">Start</p>
		{#each Array(40) as _, i}
			<p class="my-2 pl-4">Line {i}</p>
		{/each}
		<p class="my-2 pl-4">End</p>
	</ScrollArea>
</Screen>

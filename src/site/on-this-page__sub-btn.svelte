<script lang="ts">
	import { scrollToId } from './helper.ts';

	export let title: string;
	export let id: string;
</script>

<button
	on:click={() => scrollToId(id)}
	class="pl-4 text-left text-zinc-500 hover:text-cyan-500 dark:text-zinc-400"
>
	{title}
</button>

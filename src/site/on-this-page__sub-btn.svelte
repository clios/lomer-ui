<script lang="ts">
	import { scrollToId } from './helper.ts';

	export let title: string;
	export let id: string;
</script>

<button
	on:click={() => scrollToId(id)}
	class="pl-4 text-left hover:text-cyan-500"
>
	{title}
</button>

<script lang="ts">
	import { scrollToId } from './helper.ts';

	export let title: string;
	export let id: string;
</script>

<button
	on:click={() => scrollToId(id)}
	class="text-left font-semibold hover:text-cyan-500">{title}</button
>

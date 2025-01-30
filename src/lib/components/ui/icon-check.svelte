<script lang="ts">
	import { circInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	type Props = { class?: string };
	let { class: className }: Props = $props();
</script>

<svg
	class={twMerge(className)}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 -4 32 31"
	fill="none"
>
	<path
		in:draw={{ duration: 150, easing: circInOut }}
		stroke-width="7"
		d="M1 16L8 23L30.5 0.5"
		stroke="currentColor"
	/>
</svg>

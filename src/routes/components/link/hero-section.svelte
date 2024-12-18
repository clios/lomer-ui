<script lang="ts">
	import Link from '$lib/link.svelte';
	import Screen from '$site/screen.svelte';
</script>

<Screen>
	<div class="flex justify-center gap-8">
		<Link href="#">lomer-ui</Link>
		<Link class="no-underline" href="#">lomer-ui</Link>
		<Link class="no-underline" href="#" caret>lomer-ui</Link>
	</div>
</Screen>

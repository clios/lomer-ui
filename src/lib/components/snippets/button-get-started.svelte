<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button.svelte';
</script>

<Button class="text-nowrap" onclick={() => goto('/docs/introduction')}>
	Get Started
</Button>

<script>
	import Button from '$lib/components/ui/button.svelte';
	import Icon from '@iconify/svelte';
</script>

<Button
	variant="secondary"
	onclick={() => window.open('https://github.com/clios/lomer-ui', '_blank')}
>
	<Icon icon="mdi:github" width={24} height={24} />
	GitHub</Button
>

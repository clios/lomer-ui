<script lang="ts">
	import Button from '$lib/button.svelte';
	import Screen from '$site/screen.svelte';
	import Icon from '@iconify/svelte';
</script>

<Screen class="flex flex-wrap justify-center gap-4 p-8">
	<Button>Primary</Button>
	<Button variant="secondary">Secondary</Button>
	<Button variant="destructive">Destructive</Button>
	<Button variant="ghost">Ghost</Button>
	<Button variant="outline">Outline</Button>
	<Button>
		<Icon icon="mdi:power" width={24} height={24} /> Power
	</Button>
	<Button size="icon">
		<Icon icon="mdi:power" width={24} height={24} />
	</Button>
	<Button edge="sharp">Sharp</Button>
	<Button edge="circle">Full round</Button>
	<Button isLoading>Loading</Button>
	<Button isDisabled>Disabled</Button>
	<Button size="small">Small</Button>
</Screen>

<script lang="ts">
	import Button from '$lib/button.svelte';
	import Checkbox from '$lib/checkbox.svelte';
	import Icon from '@iconify/svelte';
</script>

<div
	class="w-96 rounded-md border bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
>
	<div class="flex justify-between">
		<div>
			<p class="text-xl font-semibold">Notifications</p>
			<p class="mb-4 text-zinc-500">You have 3 unread messages.</p>
		</div>
		<Icon icon="mdi:bell-ring-outline" width={30} height={30} />
	</div>

	<div class="rounded border p-4 dark:border-zinc-700">
		<Checkbox>
			<p class="font-semibold">Push Notifications</p>
			<div class="text-zinc-500">Send notifications to device.</div>
		</Checkbox>
	</div>

	<div class="my-4 flex items-start">
		<Icon class="text-cyan-500" icon="icon-park-outline:dot" height="24" />
		<div>
			<p class="font-semibold">Your call has been confirmed.</p>
			<div class="text-zinc-500">1 hour ago</div>
		</div>
	</div>
	<div class="my-4 flex items-start">
		<Icon class="text-cyan-500" icon="icon-park-outline:dot" height="24" />
		<div>
			<p class="font-semibold">You have a new message!</p>
			<div class="text-zinc-500">1 hour ago</div>
		</div>
	</div>
	<div class="my-4 flex items-start">
		<Icon class="text-cyan-500" icon="icon-park-outline:dot" height="24" />
		<div>
			<p class="font-semibold">Your subscription is expiring soon!</p>
			<div class="text-zinc-500">2 hours ago</div>
		</div>
	</div>

	<Button class="w-full justify-center">
		<Icon icon="material-symbols:check" width={24} height={24} /> Mark all as read
	</Button>
</div>

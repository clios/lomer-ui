<script lang="ts">
	import Radio from '$lib/components/ui/radio.svelte';
	import Screen from '$lib/components/screen.svelte';

	let value = $state('');
</script>

<Screen class="flex justify-center p-8">
	<div class="w-40">
		<p class="mb-2">Choose your plan</p>
		<div class="mb-4 flex flex-col">
			<Radio bind:value radioValue="free">Free</Radio>
			<Radio bind:value radioValue="pro">Pro</Radio>
			<Radio bind:value radioValue="enterprise">Enterprise</Radio>
		</div>
		<p>Value: {value || 'N/A'}</p>
	</div>
</Screen>

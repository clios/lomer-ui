<script lang="ts">
	export let title = '';
	export let sub = '';
</script>

<div>
	<p class="text-sm text-zinc-500 dark:text-zinc-300">{sub}</p>
	<p class="font-mono text-3xl font-semibold">{title}</p>
	<div class="text-zinc-500 dark:text-zinc-300">
		<slot />
	</div>
</div>

<script lang="ts">
	export let title = '';
	export let sub = '';
	export let info = '';
</script>

<div>
	<p class="text-sm text-zinc-500 dark:text-zinc-300">{sub}</p>
	<p
		class="font-mono text-2xl font-semibold text-cyan-600 md:text-3xl dark:text-cyan-500"
	>
		{title}
	</p>
	<p class="text-zinc-500 dark:text-zinc-300">{info}</p>
</div>

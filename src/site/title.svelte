<script lang="ts">
	export let id;
</script>

<p
	{id}
	class="mt-8 border-b border-zinc-300 pt-4 pb-1 text-2xl font-semibold dark:border-zinc-700"
>
	<slot />
</p>

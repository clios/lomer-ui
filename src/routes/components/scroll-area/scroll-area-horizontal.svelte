<script lang="ts">
  import ScrollArea from '$lib/components/base/scroll-area.svelte';
</script>

<div class="rounded border px-4">
  <ScrollArea class="flex w-40 pt-4 pb-2">
    {#each Array(40) as _, i}
      <p class="mx-2">{i}</p>
    {/each}
  </ScrollArea>
</div>

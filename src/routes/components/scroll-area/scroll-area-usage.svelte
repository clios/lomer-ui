<script lang="ts">
  import ScrollArea from '$lib/components/base/scroll-area.svelte';
</script>

<div class="rounded border py-4">
  <ScrollArea class="h-52 w-40 px-4">
    {#each Array(40) as _, i}
      <p>Line {i}</p>
    {/each}
  </ScrollArea>
</div>

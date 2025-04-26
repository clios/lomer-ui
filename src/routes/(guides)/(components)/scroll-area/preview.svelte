<script lang="ts">
  import ScrollArea from '$lib/components/base/scroll-area.svelte';
</script>

<ScrollArea class="h-52 w-40 border">
  <p>Start</p>
  {#each Array(40) as _, i}
    <p>Line {i}</p>
  {/each}
  <p>End</p>
</ScrollArea>

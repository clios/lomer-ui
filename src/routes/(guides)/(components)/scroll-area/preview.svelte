<script lang="ts">
  import ScrollArea from '$lib/components/base/scroll-area.svelte';
</script>

<ScrollArea class="border w-40 h-52">
  <p>Start</p>
  {#each Array(40) as _, i}
    <p>Line {i}</p>
  {/each}
  <p>End</p>
</ScrollArea>

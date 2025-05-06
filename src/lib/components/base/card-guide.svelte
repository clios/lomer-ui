<script>
  import Link from '$lib/components/base/link.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import { PaneGroup, Pane, PaneResizer } from 'paneforge';

  let { src } = $props();
  let clientWidth = $state();
</script>

<div class="flex justify-between">
  <Paragraph>Open in <Link href={src} target="_blank">new tab.</Link></Paragraph>
  <Paragraph>
    {#if clientWidth <= 640}
      <span class="text-teal-500">Mobile Screen {clientWidth}px</span>
    {:else if clientWidth <= 768}
      <span class="text-fuchsia-500">Tablet Screen {clientWidth}px</span>
    {:else}
      <span class="text-cyan-500">Desktop Screen {clientWidth}px</span>
    {/if}
  </Paragraph>
</div>
<div class="w-screen -translate-x-4 sm:w-full sm:translate-none">
  <PaneGroup direction="horizontal" class="border-muted-fg w-full border-y border-dotted sm:border-x">
    <Pane
      defaultSize={100}
      class="relative min-h-52 bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--color-border:var(--color-fg)]/10 dark:[--color-border:var(--color-fg)]/5"
    >
      <!-- svelte-ignore a11y_missing_attribute -->
      <iframe bind:clientWidth class="h-full w-full" {src}></iframe>
    </Pane>
    <PaneResizer class="border-muted-fg relative flex w-4 items-center justify-center">
      <div class="bg-fg z-10 h-12 w-2 rounded border"></div>
    </PaneResizer>
    <Pane defaultSize={0} class="">
      <div
        class="relative h-full w-full overflow-hidden bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--color-border:var(--color-fg)]/10 dark:[--color-border:var(--color-fg)]/5"
      ></div>
    </Pane>
  </PaneGroup>
</div>

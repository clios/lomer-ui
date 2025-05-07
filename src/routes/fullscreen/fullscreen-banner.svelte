<script lang="ts">
  import Banner from '$lib/components/base/banner.svelte';
  import Button from '$lib/components/base/button.svelte';
  import IconMoon from '$lib/components/icons/icon-moon.svelte';
  import IconSun from '$lib/components/icons/icon-sun.svelte';
  import SectionExplore from '../section-explore.svelte';
  import { mode, toggleMode } from 'mode-watcher';

  type Props = { open: boolean };
  let { open = $bindable(true) }: Props = $props();
</script>

<div class="h-[calc(3.5rem+1px)] border-b border-dotted">
  <Banner
    bind:open
    class="border-none bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed px-4 [--color-border:var(--color-fg)]/15 dark:[--color-border:var(--color-fg)]/15"
  >
    <div class="flex h-10 w-full items-center gap-2">
      <Button variant="ghost" size="icon" onclick={toggleMode}>
        {#if $mode === 'light'}
          <IconSun />
        {:else}
          <IconMoon />
        {/if}
      </Button>
      <SectionExplore placement="left" />
    </div>
  </Banner>
</div>

<script>
  import { hotkey } from '$lib/actions/hotkey.svelte.ts';
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';

  let { isOpen = $bindable() } = $props();
  let innerWidth = $state(0);

  $effect(() => {
    if (innerWidth < 1026) {
      isOpen = false;
    } else {
      isOpen = true;
    }
  });
</script>

<svelte:window bind:innerWidth />

<Button
  class="hover:bg-fg/5 active:bg-fg/15 absolute right-0 h-full outline-none"
  variant="ghost"
  edge="sharp"
  title="Sidebar (Ctrl + B)"
  onclick={() => (isOpen = !isOpen)}
>
  {#if isOpen}
    <Icon icon="line-md:menu-fold-left" />
  {:else}
    <Icon icon="line-md:menu-fold-right" />
  {/if}

  <!-- HOT KEY -->
  <div
    class="hidden"
    use:hotkey={{
      code: 'KeyB',
      ctrlKey: true,
      onKeydown: () => (isOpen = !isOpen)
    }}
  ></div>
</Button>

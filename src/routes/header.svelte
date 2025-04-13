<script>
  import Button from '$lib/components/base/button.svelte';
  import ButtonToggleSidebar from './button-toggle-sidebar.svelte';
  import Icon from '@iconify/svelte';
  import Link from '$lib/components/base/link.svelte';
  import { mode, toggleMode } from 'mode-watcher';
  import IconSun from '$lib/components/icons/icon-sun.svelte';
  import IconMoon from '$lib/components/icons/icon-moon.svelte';

  let { isOpen = $bindable(false) } = $props();
</script>

<header
  class="bg-bg/50 sticky top-0 z-20 flex justify-between border-b border-dotted p-2 backdrop-blur-sm lg:z-30"
>
  <div class="flex items-center gap-2">
    <ButtonToggleSidebar bind:isOpen />
    <Link href="/" class="text-fg no-underline outline-none">Lomer UI</Link>
  </div>
  <Button variant="ghost" edge="sharp" onclick={toggleMode}>
    {#if $mode === 'light'}
      <IconSun />
    {:else}
      <IconMoon />
    {/if}
  </Button>
</header>

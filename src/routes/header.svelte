<script>
  import Button from '$lib/components/base/button.svelte';
  import ButtonToggleSidebar from './button-toggle-sidebar.svelte';
  import IconMoon from '$lib/components/icons/icon-moon.svelte';
  import IconSun from '$lib/components/icons/icon-sun.svelte';
  import Link from '$lib/components/base/link.svelte';
  import { mode, toggleMode } from 'mode-watcher';

  let { open = $bindable(false) } = $props();
</script>

<header class="top-0 z-20 lg:z-30 sticky bg-bg/50 backdrop-blur-sm border-b border-dotted">
  <div class="justify-between mx-auto sm:px-4 container">
    <div class="flex justify-between p-2 sm:border-x border-dotted w-full">
      <div class="flex items-center gap-2">
        <ButtonToggleSidebar bind:open />
        <Link href="/" class="outline-none text-fg no-underline">Lomer UI</Link>
      </div>
      <Button variant="ghost" edge="sharp" onclick={toggleMode}>
        {#if $mode === 'light'}
          <IconSun />
        {:else}
          <IconMoon />
        {/if}
      </Button>
    </div>
  </div>
</header>

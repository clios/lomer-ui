<script>
  import Button from '$lib/components/base/button.svelte';
  import IconMenu from '$lib/components/icons/icon-menu.svelte';
  import IconMoon from '$lib/components/icons/icon-moon.svelte';
  import IconSun from '$lib/components/icons/icon-sun.svelte';
  import Link from '$lib/components/base/link.svelte';
  import { mode, toggleMode } from 'mode-watcher';

  let { open = $bindable(false) } = $props();
</script>

<header class="bg-bg/50 sticky top-0 z-20 border-b border-dotted backdrop-blur-sm lg:z-30">
  <div class="container mx-auto justify-between sm:px-4">
    <div class="flex w-full justify-between border-dotted p-2 sm:border-x">
      <div class="flex items-center gap-2">
        <Button class="xl:hidden" size="icon" variant="ghost" onclick={() => (open = !open)}>
          <IconMenu />
        </Button>
        <Link href="/" class="text-fg no-underline outline-none xl:pl-4">Lomer UI</Link>
      </div>
      <Button variant="ghost" size="icon" onclick={toggleMode}>
        {#if $mode === 'light'}
          <IconSun />
        {:else}
          <IconMoon />
        {/if}
      </Button>
    </div>
  </div>
</header>

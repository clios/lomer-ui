<script>
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';
  import Link from '$lib/components/base/link.svelte';
  import ButtonToggleSidebar from './button-toggle-sidebar.svelte';
  import { mode, toggleMode } from 'mode-watcher';
  import IconLomerUi from '$lib/components/icons/icon-lomer-ui.svelte';

  let { isOpen = $bindable(false) } = $props();
</script>

<header class="bg-bg/50 sticky top-0 z-20 border-b backdrop-blur-sm lg:z-30">
  <div class="relative container mx-auto flex h-10 items-center gap-4 border-x">
    <!-- BRANDING SECTION -->
    <div
      class="relative flex h-full w-full items-center gap-2 border-r px-2 sm:max-w-60 sm:min-w-60"
    >
      <IconLomerUi class="max-w-6 min-w-6" />

      <Link href="/" class="text-fg font-mono no-underline outline-none">
        lomer-ui
      </Link>
      <ButtonToggleSidebar bind:isOpen />
    </div>

    <!-- LINK SECTION -->
    <div class="hidden sm:flex sm:gap-4">
      <Link href="/docs/intro" class="text-fg text-sm no-underline">Docs</Link>
      <Link href="/components/accordion" class="text-fg text-sm no-underline">
        Components
      </Link>
    </div>

    <!-- TOGGLE MODE -->
    <Button
      class="hover:bg-fg/5 active:bg-fg/15 absolute right-0 hidden h-full outline-none sm:flex"
      variant="ghost"
      edge="sharp"
      onclick={toggleMode}
    >
      {#if $mode === 'light'}
        <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
      {:else}
        <Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
      {/if}
    </Button>
  </div>
</header>

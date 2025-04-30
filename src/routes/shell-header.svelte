<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Flex from '$lib/components/base/flex.svelte';
  import IconGithub from '$lib/components/icons/icon-github.svelte';
  import IconMenu from '$lib/components/icons/icon-menu.svelte';
  import IconMoon from '$lib/components/icons/icon-moon.svelte';
  import IconSun from '$lib/components/icons/icon-sun.svelte';
  import Link from '$lib/components/base/link.svelte';
  import SectionExplore from './section-explore.svelte';
  import { mode, toggleMode } from 'mode-watcher';

  let { open = $bindable(false) } = $props();
</script>

<header class="top-0 z-20 lg:z-30 sticky bg-bg/80 border-b border-dotted">
  <div class="top-0 -z-1 absolute backdrop-blur w-full h-full"></div>
  <div class="justify-between mx-auto sm:px-4 container">
    <div class="flex justify-between p-2 sm:border-x border-dotted w-full">
      <div class="flex items-center gap-2">
        <Button class="xl:hidden" size="icon" variant="ghost" onclick={() => (open = !open)}>
          <IconMenu />
        </Button>
        <Link href="/" class="xl:pl-4 outline-none text-fg no-underline">Lomer UI</Link>
      </div>
      <Flex class="gap-2 mr-2">
        <Button variant="ghost" size="icon" onclick={()=>window.open('https://github.com/clios/lomer-ui', "_blank")}>
          <IconGithub />
        </Button>
        <Button variant="ghost" size="icon" onclick={toggleMode}>
          {#if $mode === 'light'}
          <IconSun />
          {:else}
          <IconMoon />
          {/if}
        </Button>
        <SectionExplore />
      </Flex>
    </div>
  </div>
</header>
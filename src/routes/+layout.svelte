<script lang="ts">
  import '../app.css';
  import '@fontsource-variable/nunito-sans';
  import Header from './header.svelte';
  import Icon from '@iconify/svelte';
  import Link from '$lib/components/base/link.svelte';
  import Navigation from './navigation.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import { afterNavigate } from '$app/navigation';

  let { children } = $props();
  let isOpen = $state(false);
  let elPage: HTMLDivElement;

  afterNavigate(() => {
    elPage.scrollIntoView({ behavior: 'instant' });
  });
</script>

<ModeWatcher defaultMode="system" />

<div class="bg-bg w-screen h-screen overflow-auto text-fg">
  <div bind:this={elPage} id="page"></div>
  <Header bind:isOpen />
  <Navigation bind:isOpen />
  {@render children()}

  <div class="mx-auto sm:px-4 container">
    <div class="p-4 md:p-8 lg:p-16 w-full">
      <p class="flex items-center gap-2 mb-4">
        Share treats:
        <Link
          class="text-muted hover:text-primary transition-all"
          href="https://github.com/sponsors/clios"
          target="_blank"
        >
          <Icon class="size-6" icon="mdi:heart" />
        </Link>
        <Link class="text-muted hover:text-primary transition-all" href="https://ko-fi.com/clios" target="_blank">
          <Icon class="size-6" icon="raphael:coffee" />
        </Link>
      </p>
      <p class="italic">Copyright © 2025 - Cliemtor Fabros</p>
    </div>
  </div>
</div>

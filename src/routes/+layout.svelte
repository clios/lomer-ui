<script lang="ts">
  import '../app.css';
  import '@fontsource-variable/nunito-sans';
  import Navigation from './navigation.svelte';
  import Header from './header.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import { afterNavigate } from '$app/navigation';
  import Link from '$lib/components/base/link.svelte';
  import Icon from '@iconify/svelte';

  let { children } = $props();
  let isOpen = $state(false);
  let elPage: HTMLDivElement;

  afterNavigate(() => {
    elPage.scrollIntoView({ behavior: 'instant' });
  });
</script>

<ModeWatcher defaultMode="system" />

<div class="h-screen w-screen overflow-auto">
  <div bind:this={elPage} id="page"></div>
  <Header bind:isOpen />
  <Navigation bind:isOpen />
  {@render children()}

  <div class="container mx-auto sm:px-4">
    <div class="w-full p-4 md:p-8 lg:p-16">
      <p class="mb-4 flex items-center gap-2">
        Share treats:
        <Link href="https://github.com/sponsors/clios" target="_blank">
          <Icon class="text-muted size-6" icon="mdi:heart" />
        </Link>
        <Link href="https://ko-fi.com/clios" target="_blank">
          <Icon class="text-muted size-6" icon="raphael:coffee" />
        </Link>
      </p>
      <p class="text-muted italic">Copyright © 2025 - Cliemtor Fabros</p>
    </div>
  </div>
</div>

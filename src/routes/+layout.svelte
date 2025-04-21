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
  let open = $state(false);
  let elPage: HTMLDivElement;

  afterNavigate(() => {
    elPage.scrollIntoView({ behavior: 'instant' });
  });
</script>

<ModeWatcher defaultMode="system" />

<div class="bg-bg text-fg h-screen w-screen overflow-auto">
  <div bind:this={elPage} id="page"></div>
  <Header bind:open />
  <Navigation bind:open />
  {@render children()}

  <div class="container mx-auto sm:px-4">
    <div class="w-full p-4 md:p-8 lg:p-16">
      <p class="mb-4 flex items-center gap-2">
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

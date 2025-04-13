<script lang="ts">
  import '../app.css';
  import '@fontsource-variable/nunito-sans';
  import Navigation from './navigation.svelte';
  import Header from './header.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import { afterNavigate } from '$app/navigation';

  let { children } = $props();
  let isOpen = $state(true);
  let elPage: HTMLDivElement;

  afterNavigate(() => {
    elPage.scrollIntoView({ behavior: 'instant' });
  });
</script>

<ModeWatcher defaultMode="system" />

<div class="h-screen w-screen overflow-auto">
  <div bind:this={elPage} id="page"></div>
  <Header bind:isOpen />
  <div class="flex w-full">
    <Navigation bind:isOpen />
    <main class="relative flex w-full flex-col gap-16 p-4 2xl:mt-8">
      {@render children()}
    </main>
  </div>
</div>

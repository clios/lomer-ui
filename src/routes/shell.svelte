<script lang="ts">
  import ShellHeader from './shell-header.svelte';
  import ShellSidebar from './shell-sidebar.svelte';
  import ShellFooter from './shell-footer.svelte';
  import { afterNavigate } from '$app/navigation';

  let { children } = $props();
  let open = $state(false);
  let elPage: HTMLDivElement;

  afterNavigate(() => {
    elPage.scrollIntoView({ behavior: 'instant' });
  });
</script>

<div class="bg-bg w-screen h-screen overflow-auto text-fg">
  <div bind:this={elPage} id="page"></div>
  <ShellHeader bind:open />
  <ShellSidebar bind:open />
  {@render children()}
  <ShellFooter />
</div>

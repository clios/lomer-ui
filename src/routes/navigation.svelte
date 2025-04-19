<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/base/button.svelte';
  import Link from '$lib/components/base/link.svelte';
  import NavLink from './nav-link.svelte';
  import SectionExplore from './section-explore.svelte';
  import { fade, slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  let { isOpen = $bindable(false) } = $props();

  function handleRouting(url: string) {
    isOpen = false;
    goto(url);
  }
</script>

{#if isOpen}
  <nav
    in:slide={{ axis: 'x', duration: 150 }}
    out:slide={{ axis: 'x', duration: 150, delay: 150 }}
    class={twMerge('bg-bg absolute top-0 z-20 border-r sm:z-40')}
  >
    <div
      in:fade={{ delay: 150 }}
      out:fade={{ duration: 150 }}
      class="sticky top-[calc(3rem+1px)] flex h-screen w-screen flex-col gap-1 overflow-y-auto sm:w-80"
    >
      <SectionExplore />

      <p class="text-muted mt-4 pl-4 text-sm">Getting started</p>
      <Button onclick={() => handleRouting('/theming-structure')} class="ml-4 py-0" variant="ghost">
        Theming structure
      </Button>
      <Button onclick={() => handleRouting('/dark-mode-implementation')} class="ml-4 py-0" variant="ghost">
        Dark mode implementation
      </Button>

      <!-- <NavLink bind:isOpen href="/docs/intro" label="Intro" />
      <NavLink bind:isOpen href="/docs/setup" label="Setup" />
      <NavLink bind:isOpen href="/docs/dark-mode" label="Dark Mode" />
      <NavLink bind:isOpen href="/docs/theming" label="Theming" />
      <NavLink bind:isOpen href="/docs/cli" label="CLI" /> -->

      <p class="text-muted mt-4 pl-4 text-sm">Components</p>
      <NavLink bind:isOpen href="/accordion" label="Accordion" />
      <NavLink bind:isOpen href="/components/alert" label="Alert" />
      <NavLink bind:isOpen href="/components/avatar" label="Avatar" />
      <NavLink bind:isOpen href="/components/button" label="Button" />
      <NavLink bind:isOpen href="/components/checkbox" label="Checkbox" />
      <NavLink bind:isOpen href="/components/collapsible" label="Collapsible" />
      <NavLink bind:isOpen href="/components/dialog" label="Dialog" />
      <NavLink bind:isOpen href="/components/drawer" label="Drawer" />
      <NavLink bind:isOpen href="/components/dropdown" label="Dropdown" />
      <NavLink bind:isOpen href="/components/field" label="Field" />
      <NavLink bind:isOpen href="/components/input" label="Input" />
      <NavLink bind:isOpen href="/components/link" label="Link" />
      <NavLink bind:isOpen href="/components/link-button" label="Link Button" />
      <NavLink bind:isOpen href="/components/radio" label="Radio" />
      <NavLink bind:isOpen href="/components/scroll-area" label="Scroll Area" />
      <NavLink bind:isOpen href="/components/select" label="Select" />
      <NavLink bind:isOpen href="/components/switch" label="Switch" />
      <NavLink bind:isOpen href="/components/table" label="Table" />
      <NavLink bind:isOpen href="/components/tabs" label="Tabs" />
      <NavLink bind:isOpen href="/components/textarea" label="Textarea" />

      <p class="text-muted mt-4 pl-4 text-sm">Actions</p>
      <NavLink bind:isOpen href="/actions/escape-key" label="escape-key" />
      <NavLink bind:isOpen href="/actions/focus-trap" label="focus-trap" />
      <NavLink bind:isOpen href="/actions/hotkey" label="hotkey" />
      <NavLink bind:isOpen href="/actions/outside-click" label="outside-click" />
      <NavLink bind:isOpen href="/actions/vertical-navigation" label="vertical-navigation" />

      <p class="text-muted mt-4 pl-4 text-sm">Wrappers</p>
      <NavLink bind:isOpen href="/wrappers/mapbox" label="Mapbox" />

      <!-- <p class="mt-4 pl-4 text-muted text-sm">Packages</p>
      <NavLink bind:isOpen href="/packages/apexcharts" label="apexcharts" />
      <NavLink bind:isOpen href="/packages/cropperjs" label="cropperjs" />
      <NavLink bind:isOpen href="/packages/mapbox-gl" label="mapbox-gl" /> -->

      <div class="m-8 flex justify-end">
        <Link href="https://github.com/clios" target="_blank" class="text-fg font-mono italic no-underline">
          - Clios
        </Link>
      </div>
    </div>
  </nav>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    onclick={() => (isOpen = false)}
    class={twMerge(
      'fixed top-0 right-0 bottom-0 left-0 z-10 sm:z-30', // position
      'bg-bg/20 backdrop-blur-xs' // blur
    )}
    in:fade={{ duration: 300 }}
  ></div>
{/if}

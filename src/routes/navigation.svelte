<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Link from '$lib/components/base/link.svelte';
  import NavLink from './nav-link.svelte';
  import SectionExplore from './section-explore.svelte';
  import { fade, slide } from 'svelte/transition';
  import { goto } from '$app/navigation';
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
    class={twMerge('top-0 z-20 sm:z-40 absolute bg-bg border-r border-dotted')}
  >
    <div
      in:fade={{ delay: 150 }}
      out:fade={{ duration: 150 }}
      class="top-[calc(3rem+1px)] sticky flex flex-col gap-1 w-screen sm:w-80 h-screen overflow-y-auto"
    >
      <SectionExplore />

      <p class="mt-4 pl-4 text-muted text-sm">Set Up Your Own Foundation</p>
      <Button onclick={() => handleRouting('/theming-structure')} class="ml-4 py-0" variant="ghost">
        Theming Structure
      </Button>
      <Button onclick={() => handleRouting('/dark-mode-implementation')} class="ml-4 py-0" variant="ghost">
        Dark Mode Implementation
      </Button>

      <!-- <NavLink bind:isOpen href="/docs/intro" label="Intro" />
      <NavLink bind:isOpen href="/docs/setup" label="Setup" />
      <NavLink bind:isOpen href="/docs/dark-mode" label="Dark Mode" />
      <NavLink bind:isOpen href="/docs/theming" label="Theming" />
      <NavLink bind:isOpen href="/docs/cli" label="CLI" /> -->

      <p class="mt-4 pl-4 text-muted text-sm">Create Your Own Component</p>
      <NavLink bind:isOpen href="/accordion" label="Accordion" />
      <NavLink bind:isOpen href="/alert" label="Alert" />
      <!-- <NavLink bind:isOpen href="/components/avatar" label="Avatar" /> -->
      <!-- <NavLink bind:isOpen href="/components/button" label="Button" /> -->
      <!-- <NavLink bind:isOpen href="/components/checkbox" label="Checkbox" /> -->
      <!-- <NavLink bind:isOpen href="/components/collapsible" label="Collapsible" /> -->
      <!-- <NavLink bind:isOpen href="/components/dialog" label="Dialog" /> -->
      <!-- <NavLink bind:isOpen href="/components/drawer" label="Drawer" /> -->
      <!-- <NavLink bind:isOpen href="/components/dropdown" label="Dropdown" /> -->
      <!-- <NavLink bind:isOpen href="/components/field" label="Field" /> -->
      <!-- <NavLink bind:isOpen href="/components/input" label="Input" /> -->
      <!-- <NavLink bind:isOpen href="/components/link" label="Link" /> -->
      <!-- <NavLink bind:isOpen href="/components/link-button" label="Link Button" /> -->
      <!-- <NavLink bind:isOpen href="/components/radio" label="Radio" /> -->
      <!-- <NavLink bind:isOpen href="/components/scroll-area" label="Scroll Area" /> -->
      <!-- <NavLink bind:isOpen href="/components/select" label="Select" /> -->
      <!-- <NavLink bind:isOpen href="/components/switch" label="Switch" /> -->
      <!-- <NavLink bind:isOpen href="/components/table" label="Table" /> -->
      <!-- <NavLink bind:isOpen href="/components/tabs" label="Tabs" /> -->
      <!-- <NavLink bind:isOpen href="/components/textarea" label="Textarea" /> -->

      <!-- <p class="mt-4 pl-4 text-muted text-sm">Actions</p>
      <NavLink bind:isOpen href="/actions/escape-key" label="escape-key" />
      <NavLink bind:isOpen href="/actions/focus-trap" label="focus-trap" />
      <NavLink bind:isOpen href="/actions/hotkey" label="hotkey" />
      <NavLink bind:isOpen href="/actions/outside-click" label="outside-click" />
      <NavLink bind:isOpen href="/actions/vertical-navigation" label="vertical-navigation" />

      <p class="mt-4 pl-4 text-muted text-sm">Wrappers</p>
      <NavLink bind:isOpen href="/wrappers/mapbox" label="Mapbox" /> -->

      <!-- <p class="mt-4 pl-4 text-muted text-sm">Packages</p>
      <NavLink bind:isOpen href="/packages/apexcharts" label="apexcharts" />
      <NavLink bind:isOpen href="/packages/cropperjs" label="cropperjs" />
      <NavLink bind:isOpen href="/packages/mapbox-gl" label="mapbox-gl" /> -->

      <div class="flex justify-end m-8">
        <Link href="https://github.com/clios" target="_blank" class="font-mono text-fg no-underline italic">
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
      'top-0 right-0 bottom-0 left-0 z-10 sm:z-30 fixed', // position
      'bg-bg/20 backdrop-blur-xs' // blur
    )}
    in:fade={{ duration: 300 }}
  ></div>
{/if}

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  class="hidden xl:block top-0 left-0 z-30 fixed border-r border-dotted w-8 h-screen"
  onmousemove={() => (isOpen = true)}
  onclick={() => (isOpen = true)}
>
  <div
    class="relative bg-[size:10px_10px] bg-bg bg-fixed [--color-border:var(--color-fg)]/10 bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] dark:[--color-border:var(--color-fg)]/10 dark:border-muted-fg w-full h-full"
  >
    <div class="top-1/2 absolute backdrop-blur-3xl -rotate-90 translate-y-1/2">
      <p class="w-8 text-muted text-sm text-nowrap tracking-widest">
        /// <span class="text-fg">Navigate Here</span> ///
      </p>
    </div>
  </div>
</div>

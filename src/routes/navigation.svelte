<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Link from '$lib/components/base/link.svelte';
  import NavigationButton from './navigation-button.svelte';
  import SectionExplore from './section-explore.svelte';
  import { fade, slide } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { twMerge } from 'tailwind-merge';

  let { open = $bindable(false) } = $props();

  function handleRouting(url: string) {
    open = false;
    goto(url);
  }
</script>

{#if open}
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
      <!-- <SectionExplore /> -->

      <p class="mt-4 pl-4 text-muted text-sm">Set Up Your Own Foundation</p>

      <NavigationButton bind:open url="/theming-structure">Theming Structure</NavigationButton>
      <NavigationButton bind:open url="/dark-mode-implementation">Dark Mode Implementation</NavigationButton>

      <p class="mt-4 pl-4 text-muted text-sm">Create Your Own Component</p>
      <NavigationButton bind:open url="/accordion">Accordion</NavigationButton>
      <NavigationButton bind:open url="/alert">Alert</NavigationButton>
      <NavigationButton bind:open url="/avatar">Avatar</NavigationButton>

      <!-- <NavLink bind:open href="/components/button" label="Button" /> -->
      <!-- <NavLink bind:open href="/components/checkbox" label="Checkbox" /> -->
      <!-- <NavLink bind:open href="/components/collapsible" label="Collapsible" /> -->
      <!-- <NavLink bind:open href="/components/dialog" label="Dialog" /> -->
      <!-- <NavLink bind:open href="/components/drawer" label="Drawer" /> -->
      <!-- <NavLink bind:open href="/components/dropdown" label="Dropdown" /> -->
      <!-- <NavLink bind:open href="/components/field" label="Field" /> -->
      <!-- <NavLink bind:open href="/components/input" label="Input" /> -->
      <!-- <NavLink bind:open href="/components/link" label="Link" /> -->
      <!-- <NavLink bind:open href="/components/link-button" label="Link Button" /> -->
      <!-- <NavLink bind:open href="/components/radio" label="Radio" /> -->
      <!-- <NavLink bind:open href="/components/scroll-area" label="Scroll Area" /> -->
      <!-- <NavLink bind:open href="/components/select" label="Select" /> -->
      <!-- <NavLink bind:open href="/components/switch" label="Switch" /> -->
      <!-- <NavLink bind:open href="/components/table" label="Table" /> -->
      <!-- <NavLink bind:open href="/components/tabs" label="Tabs" /> -->
      <!-- <NavLink bind:open href="/components/textarea" label="Textarea" /> -->

      <!-- <p class="mt-4 pl-4 text-muted text-sm">Actions</p>
      <NavLink bind:open href="/actions/escape-key" label="escape-key" />
      <NavLink bind:open href="/actions/focus-trap" label="focus-trap" />
      <NavLink bind:open href="/actions/hotkey" label="hotkey" />
      <NavLink bind:open href="/actions/outside-click" label="outside-click" />
      <NavLink bind:open href="/actions/vertical-navigation" label="vertical-navigation" />

      <p class="mt-4 pl-4 text-muted text-sm">Wrappers</p>
      <NavLink bind:open href="/wrappers/mapbox" label="Mapbox" /> -->

      <!-- <p class="mt-4 pl-4 text-muted text-sm">Packages</p>
      <NavLink bind:open href="/packages/apexcharts" label="apexcharts" />
      <NavLink bind:open href="/packages/cropperjs" label="cropperjs" />
      <NavLink bind:open href="/packages/mapbox-gl" label="mapbox-gl" /> -->

      <div class="flex justify-end m-8">
        <Link href="https://github.com/clios" target="_blank" class="font-mono text-muted no-underline italic">
          - Clios
        </Link>
      </div>
    </div>
  </nav>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    in:fade={{ duration: 300 }}
    class={twMerge(
      'top-0 right-0 bottom-0 left-0 z-10 sm:z-30 fixed', // position
      'bg-bg/20 backdrop-blur-xs' // blur
    )}
    onmousemove={() => (open = false)}
  ></div>
{/if}

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  class="hidden xl:block top-0 left-0 z-30 fixed border-r border-dotted w-8 h-screen"
  onmousemove={() => (open = true)}
  onclick={() => (open = true)}
>
  <div
    class="relative bg-[size:10px_10px] bg-bg bg-fixed [--color-border:var(--color-fg)]/10 bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] dark:[--color-border:var(--color-fg)]/10 dark:border-muted-fg w-full h-full"
  >
    <div class="top-1/2 absolute backdrop-blur-3xl -rotate-90 translate-y-1/2">
      <p class="w-8 text-muted text-sm text-nowrap tracking-widest">
        ||| <span class="px-2 text-fg">Navigate Here</span> |||
      </p>
    </div>
  </div>
</div>

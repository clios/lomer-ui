<script lang="ts">
  import Link from '$lib/components/base/link.svelte';
  import NavigationButton from './navigation-button.svelte';
  import { fade, slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  let { open = $bindable(false) } = $props();
</script>

{#if open}
  <nav
    in:slide={{ axis: 'x', duration: 150 }}
    out:slide={{ axis: 'x', duration: 150, delay: 150 }}
    class={twMerge('bg-bg absolute top-0 z-20 border-r border-dotted sm:z-40')}
  >
    <div
      in:fade={{ delay: 150 }}
      out:fade={{ duration: 150 }}
      class="sticky top-[calc(3rem+1px)] flex h-screen w-screen flex-col gap-1 overflow-y-auto sm:w-80"
    >
      <!-- <SectionExplore /> -->

      <p class="text-muted mt-4 pl-4 text-sm">Set Up Your Own Foundation</p>
      <NavigationButton bind:open url="/theming-structure">Theming Structure</NavigationButton>
      <NavigationButton bind:open url="/dark-mode-implementation">Dark Mode Implementation</NavigationButton>

      <p class="text-muted mt-4 pl-4 text-sm">Create Your Own Component</p>
      <NavigationButton bind:open url="/accordion">Accordion</NavigationButton>
      <NavigationButton bind:open url="/alert">Alert</NavigationButton>
      <NavigationButton bind:open url="/avatar">Avatar</NavigationButton>
      <NavigationButton bind:open url="/button">Button</NavigationButton>
      <NavigationButton bind:open url="/input">Input</NavigationButton>
      <NavigationButton bind:open url="/checkbox">Checkbox</NavigationButton>
      <NavigationButton bind:open url="/collapsible">Collapsible</NavigationButton>
      <NavigationButton bind:open url="/dialog">Dialog</NavigationButton>

      <p class="text-muted mt-4 pl-4 text-sm">Create Your Own Action</p>
      <NavigationButton bind:open url="/escape-key">escapeKey</NavigationButton>
      <NavigationButton bind:open url="/focus-trap">focusTrap</NavigationButton>

      <!-- <NavLink bind:open href="/components/drawer" label="Drawer" /> -->
      <!-- <NavLink bind:open href="/components/dropdown" label="Dropdown" /> -->
      <!-- <NavLink bind:open href="/components/field" label="Field" /> -->
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

      <div class="m-8 flex justify-end">
        <Link href="https://github.com/clios" target="_blank" class="text-muted font-mono italic no-underline">
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
      'fixed top-0 right-0 bottom-0 left-0 z-10 sm:z-30', // position
      'bg-bg/20 backdrop-blur-xs' // blur
    )}
    onclick={() => (open = false)}
    onmousemove={() => (open = false)}
  ></div>
{/if}

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  class="fixed top-0 left-0 z-30 hidden h-screen w-8 border-r border-dotted xl:block"
  onmousemove={() => (open = true)}
  onclick={() => (open = true)}
>
  <div
    class="bg-bg dark:border-muted-fg relative h-full w-full bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--color-border:var(--color-fg)]/10 dark:[--color-border:var(--color-fg)]/10"
  >
    <div class="absolute top-1/2 translate-y-1/2 -rotate-90 backdrop-blur-3xl">
      <p class="text-muted w-8 text-sm tracking-widest text-nowrap">
        ||| <span class="text-fg px-2">Navigate Here</span> |||
      </p>
    </div>
  </div>
</div>

<script lang="ts">
  import { escapeKey } from '$lib/actions/escape-key.svelte.ts';
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
    use:escapeKey={() => (open = false)}
    class={twMerge('bg-bg absolute top-0 z-20 border-r border-dotted sm:z-40')}
  >
    <div
      in:fade={{ delay: 150 }}
      out:fade={{ duration: 150 }}
      class="sticky top-[calc(3rem+1px)] flex h-screen w-screen flex-col gap-1 overflow-y-auto sm:w-80"
    >
      <!-- Close button -->
      <button
        class="outline-primary absolute top-4 right-4 cursor-pointer rounded p-1 hover:outline"
        onclick={() => (open = false)}
      >
        {@render IconClose()}
      </button>

      <Link class="text-fg mt-4 ml-4 text-lg" href="/" onclick={() => (open = false)}>Lomer UI</Link>

      <p class="text-muted mt-4 ml-4 text-sm">Setup</p>
      <div class="relative ml-6 border-l border-dotted">
        <NavigationButton bind:open url="/theming-structure">Theming Structure</NavigationButton>
        <NavigationButton bind:open url="/dark-mode-implementation">Dark Mode Implementation</NavigationButton>
        <NavigationButton bind:open url="/typography-integration">Typography Integration</NavigationButton>
        <NavigationButton bind:open url="/icon-componentization">Icon Componentization</NavigationButton>
      </div>

      <p class="text-muted mt-4 ml-4 text-sm">Components</p>
      <div class="relative ml-6 border-l border-dotted">
        <NavigationButton bind:open url="/accordion">Accordion</NavigationButton>
        <NavigationButton bind:open url="/alert">Alert</NavigationButton>
        <NavigationButton bind:open url="/avatar">Avatar</NavigationButton>
        <NavigationButton bind:open url="/banner">Banner</NavigationButton>
        <NavigationButton bind:open url="/button">Button</NavigationButton>
        <NavigationButton bind:open url="/checkbox">Checkbox</NavigationButton>
        <NavigationButton bind:open url="/collapsible">Collapsible</NavigationButton>
        <NavigationButton bind:open url="/dialog">Dialog</NavigationButton>
        <NavigationButton bind:open url="/drawer">Drawer</NavigationButton>
        <NavigationButton bind:open url="/dropdown">Dropdown</NavigationButton>
        <NavigationButton bind:open url="/field">Field</NavigationButton>
        <NavigationButton bind:open url="/input">Input</NavigationButton>
        <NavigationButton bind:open url="/link">Link</NavigationButton>
        <NavigationButton bind:open url="/radio">Radio</NavigationButton>
        <NavigationButton bind:open url="/scroll-area">Scroll Area</NavigationButton>
        <NavigationButton bind:open url="/select">Select</NavigationButton>
        <NavigationButton bind:open url="/switch">Switch</NavigationButton>
        <NavigationButton bind:open url="/table">Table</NavigationButton>
        <NavigationButton bind:open url="/tabs">Tabs</NavigationButton>
        <NavigationButton bind:open url="/textarea">Textarea</NavigationButton>
      </div>

      <p class="text-muted mt-4 ml-4 text-sm">Actions</p>
      <div class="relative ml-6 border-l border-dotted">
        <NavigationButton bind:open url="/escape-key">escapeKey</NavigationButton>
        <NavigationButton bind:open url="/focus-trap">focusTrap</NavigationButton>
        <NavigationButton bind:open url="/hotkey">hotkey</NavigationButton>
        <NavigationButton bind:open url="/outside-click">outsideClick</NavigationButton>
        <NavigationButton bind:open url="/vertical-navigation">verticalNavigation</NavigationButton>
      </div>

      <!-- <p class="text-muted mt-4 ml-4 text-sm">Blocks</p>
      <div class="relative ml-6 border-l border-dotted">
        <NavigationButton bind:open url="/hero-sections">Hero Sections</NavigationButton>
      </div> -->

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
    onclick={() => (open = false)}
    onmousemove={() => (open = false)}
    class={twMerge(
      'fixed top-0 right-0 bottom-0 left-0 z-10 sm:z-30', // position
      'bg-bg/80 backdrop-blur-xs', // background
      'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]', // light dots
      'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]', // dark dots
      '[background-size:16px_16px]' // dot size
    )}
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
      <p class="text-muted w-7 text-sm tracking-widest text-nowrap">
        ||| <span class="text-fg px-2">Navigate Here</span> |||
      </p>
    </div>
  </div>
</div>

{#snippet IconClose()}
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7" />
  </svg>
{/snippet}

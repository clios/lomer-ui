<script lang="ts">
  import SectionExplore from './section-explore.svelte';
  import Link from '$lib/components/ui/link.svelte';
  import NavLink from './nav-link.svelte';
  import { fade, slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  let { isOpen = $bindable(false) } = $props();
</script>

{#if isOpen}
  <nav
    in:slide={{ axis: 'x', duration: 150 }}
    out:slide={{ axis: 'x', duration: 150, delay: 150 }}
    class={twMerge(
      'bg-bg lg:bg-bg absolute z-20 w-full max-w-60 border-r lg:relative'
    )}
  >
    <!-- BORDER LEFT FOR SMALLEST TO LARGE SCREEN -->
    <div
      class="absolute -left-[1px] h-[calc(100vh-2.5rem-1px)] border-l lg:hidden"
    ></div>

    <div
      in:fade={{ delay: 150 }}
      out:fade={{ duration: 150 }}
      class="sticky top-[calc(2.5rem+1px)] flex h-[calc(100vh-2.5rem-1px)] flex-col gap-1 overflow-y-auto [&::-webkit-scrollbar]:w-0"
    >
      <SectionExplore />

      <p class="mt-4 pl-4 font-semibold">Docs</p>
      <NavLink href="/docs/intro" label="Intro" />
      <NavLink href="/docs/setup" label="Setup" />
      <NavLink href="/docs/dark-mode" label="Dark Mode" />
      <NavLink href="/docs/theming" label="Theming" status="new" />
      <NavLink href="/docs/cli" label="CLI" />

      <p class="mt-4 pl-4 font-semibold">Components</p>
      <NavLink href="/components/accordion" label="Accordion" />
      <NavLink href="/components/alert" label="Alert" />
      <NavLink href="/components/button" label="Button" />
      <NavLink href="/components/checkbox" label="Checkbox" />
      <NavLink href="/components/dialog" label="Dialog" />
      <NavLink href="/components/drawer" label="Drawer" />
      <NavLink href="/components/dropdown" label="Dropdown" />
      <NavLink href="/components/field" label="Field" />
      <NavLink href="/components/input" label="Input" />
      <NavLink href="/components/link" label="Link" />
      <NavLink href="/components/radio" label="Radio" />
      <!-- <NavLink href="/components/scroll-area" label="Scroll Area" /> -->
      <NavLink href="/components/select" label="Select" />
      <!-- <NavLink href="/components/switch" label="Switch" /> -->
      <!-- <NavLink href="/components/textarea" label="Textarea" /> -->

      <div class="m-8 flex justify-end">
        <Link
          href="https://github.com/clios"
          target="_blank"
          class="text-fg font-mono italic no-underline"
        >
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
      'fixed top-0 right-0 bottom-0 left-0 z-10', // position
      'bg-bg/20 backdrop-blur-xs lg:hidden' // blur
    )}
    in:fade={{ duration: 300 }}
  ></div>
{/if}

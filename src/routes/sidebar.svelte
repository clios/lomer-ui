<script lang="ts">
  import ExploreIn from './explore-in.svelte';
  import Link from '$lib/components/ui/link.svelte';
  import SidebarItem from './sidebar-item.svelte';
  import { fade, slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  let { isOpen = $bindable(false) } = $props();
</script>

{#if isOpen}
  <div
    in:slide={{ axis: 'x', duration: 150 }}
    out:slide={{ axis: 'x', duration: 150, delay: 150 }}
    class={twMerge(
      'bg-bg lg:bg-bg absolute z-20 w-full max-w-60 border-r lg:relative lg:z-0'
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
      <ExploreIn />

      <p class="mt-4 pl-4 font-semibold">Getting Started</p>
      <SidebarItem href="/docs/introduction" label="Introduction" />
      <SidebarItem href="/docs/installation" label="Installation" />
      <SidebarItem href="/docs/dark-mode" label="Dark Mode" />
      <SidebarItem href="/docs/theming" label="Theming" status="new" />
      <SidebarItem href="/docs/cli" label="CLI" />

      <p class="mt-4 pl-4 font-semibold">Components</p>
      <SidebarItem href="/components/accordion" label="Accordion" />
      <SidebarItem href="/components/alert" label="Alert" />
      <SidebarItem href="/components/button" label="Button" />
      <SidebarItem href="/components/checkbox" label="Checkbox" />
      <SidebarItem href="/components/dialog" label="Dialog" />
      <SidebarItem href="/components/drawer" label="Drawer" />
      <SidebarItem href="/components/dropdown" label="Dropdown" status="new" />
      <SidebarItem href="/components/field" label="Field" />
      <SidebarItem href="/components/input" label="Input" />
      <SidebarItem href="/components/link" label="Link" />
      <SidebarItem href="/components/radio" label="Radio" />
      <SidebarItem href="/components/scroll-area" label="Scroll Area" />
      <SidebarItem href="/components/select" label="Select" />
      <SidebarItem href="/components/switch" label="Switch" />
      <SidebarItem href="/components/textarea" label="Textarea" />

      <div class="m-8 flex justify-end">
        <Link
          href="https://github.com/clios"
          target="_blank"
          class="font-mono italic no-underline"
        >
          - Clios
        </Link>
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    onclick={() => (isOpen = false)}
    class={twMerge(
      'fixed top-0 right-0 bottom-0 left-0 z-10', // position
      'lg:hidden' // blur
    )}
    in:fade={{ duration: 300 }}
  ></div>
{/if}

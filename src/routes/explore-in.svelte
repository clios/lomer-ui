<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import ButtonToggleMode from './button-toggle-mode.svelte';
  import Icon from '@iconify/svelte';
  import ThemePrimary from './theme-primary.svelte';
  import ThemeRoundness from './theme-roundness.svelte';
  import ThemeTone from './theme-tone.svelte';
  import ButtonCopyTheme from './button-copy-theme.svelte';
  import { mode } from 'mode-watcher';
  import { scale, slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import Dropdown from '$lib/components/ui/dropdown.svelte';

  let { open = $bindable(false) } = $props();

  let darkMode = $state(false);
  let primaryColor = $state('cyan');
  let toneColor = $state('zinc');
  let radiusVal = $state('25');

  function resetTheme() {
    document.body.className = '';
    primaryColor = 'cyan';
    toneColor = 'zinc';
    radiusVal = '25';
  }

  $effect(() => {
    darkMode = $mode === 'dark';
  });
</script>

<div class="px-4 pt-4">
  <p class="text-muted mb-1 text-sm">Explore in</p>
  <div class="flex items-center">
    <ButtonToggleMode />
    <Button
      class="h-6 rounded-r text-sm"
      variant="primary"
      edge="sharp"
      onclick={() => (open = !open)}
    >
      Theme
      <Icon
        class={twMerge('size-4 transition-transform', open && 'rotate-180')}
        icon="mdi:gear"
      />
    </Button>
  </div>
</div>
<Dropdown bind:open>
  <div class="max flex max-w-60 flex-col py-2">
    <div class="px-3">
      <p class="font-semibold">Customize Theme</p>
      <p class="text-muted text-sm">Match your project's unique vibe.</p>
    </div>

    <ThemePrimary bind:primaryColor />
    <ThemeTone bind:toneColor />
    <ThemeRoundness bind:radiusVal />

    <div class="mt-4 mb-1 flex gap-2 px-3">
      <ButtonCopyTheme {primaryColor} {toneColor} {radiusVal} />
      <Button onclick={resetTheme} title="reset" variant="inverted" size="icon">
        <Icon class="pointer-events-none size-6" icon="bx:reset" />
      </Button>
    </div>
  </div>
</Dropdown>

<!-- {#if open}
  <div
    in:scale={{ duration: 150, start: 0.9 }}
    out:scale={{ duration: 150, delay: 150, start: 0.9 }}
    class="mt-4 w-full max-w-60"
  >
    <div class="bg-fg/5 flex flex-col border-y py-2">
      <div class="px-3">
        <p class="font-semibold">Customize Theme</p>
        <p class="text-muted text-sm">Match your project's unique vibe.</p>
      </div>

      <ThemePrimary bind:primaryColor />
      <ThemeTone bind:toneColor />
      <ThemeRoundness bind:radiusVal />

      <div class="mt-4 mb-1 flex gap-2 px-3">
        <ButtonCopyTheme {primaryColor} {toneColor} {radiusVal} />
        <Button
          onclick={resetTheme}
          title="reset"
          variant="inverted"
          size="icon"
        >
          <Icon class="pointer-events-none size-6" icon="bx:reset" />
        </Button>
      </div>
    </div>
  </div>
{/if} -->

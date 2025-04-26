<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import ButtonCopyTheme from './button-copy-theme.svelte';
  import ButtonToggleMode from './button-toggle-mode.svelte';
  import Dropdown from '$lib/components/base/dropdown.svelte';
  import Icon from '@iconify/svelte';
  import ThemePrimary from './theme-primary.svelte';
  import ThemeRoundness from './theme-roundness.svelte';
  import ThemeTone from './theme-tone.svelte';
  import { mode } from 'mode-watcher';
  import { twMerge } from 'tailwind-merge';

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
    <Button class=" h-6 rounded-r text-sm tracking-wide" variant="primary" edge="sharp" onclick={() => (open = !open)}>
      Theme
      <Icon class={twMerge('size-4 transition-transform', open && 'rotate-180')} icon="mdi:gear" />
    </Button>
  </div>
</div>
<Dropdown placement="left" bind:open>
  <div class="max flex flex-col py-2">
    <div class="px-3">
      <p class="font-semibold">
        Customize Theme

        <Button class="absolute top-3 right-3" variant="ghost" size="icon" onclick={() => (open = false)}>
          {@render IconClose()}
        </Button>
      </p>
      <p class="text-muted text-sm">Match your project's unique vibe.</p>
    </div>

    <ThemePrimary bind:primaryColor />
    <ThemeTone bind:toneColor />
    <ThemeRoundness bind:radiusVal />

    <div class="mt-4 mb-1 flex gap-2 px-3 sm:justify-end">
      <ButtonCopyTheme {primaryColor} {toneColor} {radiusVal} />
      <Button onclick={resetTheme} title="reset" variant="inverted" size="icon">
        <Icon class="pointer-events-none size-6" icon="bx:reset" />
      </Button>
    </div>
  </div>
</Dropdown>

{#snippet IconClose()}
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <rect width="24" height="24" fill="none" />
    <path
      fill="none"
      stroke="currentColor"
      stroke-dasharray="12"
      stroke-dashoffset="12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
    >
      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0" />
    </path>
  </svg>
{/snippet}

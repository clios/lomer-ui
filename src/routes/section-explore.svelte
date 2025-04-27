<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import ButtonCopyTheme from './button-copy-theme.svelte';
  import Dropdown from '$lib/components/base/dropdown.svelte';
  import Icon from '@iconify/svelte';
  import ThemePrimary from './theme-primary.svelte';
  import ThemeRoundness from './theme-roundness.svelte';
  import ThemeTone from './theme-tone.svelte';
  import { twMerge } from 'tailwind-merge';
  import { onMount } from 'svelte';

  let { open = $bindable(false) } = $props();

  class Theme {
    localPrimary = localStorage.getItem('theme-primary');
    localGeneral = localStorage.getItem('theme-general');
    localRadius = localStorage.getItem('theme-radius');

    primary = $state(this.localPrimary || 'cyan');
    general = $state(this.localGeneral || 'zinc');
    radius = $state(this.localRadius || '25');

    reset() {
      document.body.className = '';
      this.primary = 'cyan';
      this.general = 'zinc';
      this.radius = '25';
      localStorage.setItem('theme-primary', 'cyan');
      localStorage.setItem('theme-general', 'zinc');
      localStorage.setItem('theme-radius', '25');
    }
  }

  let theme: Theme | undefined = $state();

  function resetTheme() {
    theme?.reset();
  }

  onMount(() => {
    theme = new Theme();
  });
</script>

<div class="mx-2 px-2 pt-2">
  <Button class="gap-2 h-6 text-sm tracking-wide" variant="secondary" onclick={() => (open = !open)}>
    Customize Theme
    <Icon class={twMerge('size-4 text-muted transition-transform', open && 'rotate-180')} icon="mdi:gear" />
  </Button>
</div>
<Dropdown class="w-72" placement="left" bind:open>
  <div class="flex flex-col py-2 max">
    <div class="px-2">
      <p class="font-semibold">
        <Button class="top-3 right-3 absolute" variant="ghost" size="icon" onclick={() => (open = false)}>
          {@render IconClose()}
        </Button>
      </p>
      <p class="text-muted text-sm">Match your project's unique vibe.</p>
    </div>

    {#if theme}
      <ThemePrimary bind:primaryColor={theme.primary} />
      <ThemeTone bind:toneColor={theme.general} />
      <ThemeRoundness bind:radiusVal={theme.radius} />
    {/if}

    <div class="flex sm:justify-end gap-2 mt-4 mb-1 px-3">
      {#if theme}
        <ButtonCopyTheme primaryColor={theme.primary} toneColor={theme.general} radiusVal={theme.radius} />
      {/if}
      <Button class="pr-2 pl-3" onclick={resetTheme} title="reset" variant="inverted">
        Reset <Icon class="size-6 pointer-events-none" icon="bx:reset" />
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

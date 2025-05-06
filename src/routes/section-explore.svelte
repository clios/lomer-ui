<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import ButtonCopyTheme from './button-copy-theme.svelte';
  import Dropdown from '$lib/components/base/dropdown.svelte';
  import Icon from '@iconify/svelte';
  import ThemePrimary from './theme-primary.svelte';
  import ThemeRoundness from './theme-roundness.svelte';
  import ThemeTone from './theme-tone.svelte';
  import { onMount } from 'svelte';
  import IconTheme from '$lib/components/icons/icon-theme.svelte';

  type Props = {
    open?: boolean;
    placement?: 'left' | 'right';
  };

  let { open = $bindable(false), placement = 'right' }: Props = $props();

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

<Button onclick={() => (open = !open)} variant="ghost" size="icon">
  <IconTheme class="text-primary" />
</Button>
<Dropdown class="w-72" {placement} bind:open>
  <div class="max flex flex-col py-2">
    <div class="px-2">
      <p class="font-semibold">
        <Button class="absolute top-3 right-3" variant="ghost" size="icon" onclick={() => (open = false)}>
          {@render IconClose()}
        </Button>
      </p>
      <p class="text-primary text-lg">Customize Theme</p>
    </div>

    {#if theme}
      <ThemeTone bind:toneColor={theme.general} />
      <ThemePrimary bind:primaryColor={theme.primary} />
      <ThemeRoundness bind:radiusVal={theme.radius} />
    {/if}

    <div class="mt-4 mb-1 flex gap-2 px-3 sm:justify-end">
      {#if theme}
        <ButtonCopyTheme primaryColor={theme.primary} toneColor={theme.general} radiusVal={theme.radius} />
      {/if}
      <Button class="pr-2 pl-3" onclick={resetTheme} title="reset" variant="inverted">
        Reset <Icon class="pointer-events-none size-6" icon="bx:reset" />
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

<script lang="ts">
  import FullscreenBanner from '../fullscreen-banner.svelte';
  import HeroSection_02 from '$lib/blocks/hero-section-02.svelte';

  let open = $state(true);
</script>

<svelte:head>
  <title>Lomer UI - Hero Section 02</title>
</svelte:head>

{#if open}
  <FullscreenBanner bind:open />
{/if}

<HeroSection_02 />

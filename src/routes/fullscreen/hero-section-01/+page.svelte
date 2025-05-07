<script lang="ts">
  import FullscreenBanner from '../fullscreen-banner.svelte';
  import HeroSection_01 from '$lib/blocks/hero-section-01.svelte';

  let open = $state(true);
</script>

<svelte:head>
  <title>Lomer UI - Hero Section 01</title>
</svelte:head>

{#if open}
  <FullscreenBanner bind:open />
{/if}

<HeroSection_01 />

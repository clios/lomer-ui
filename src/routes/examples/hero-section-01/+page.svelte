<script lang="ts">
  import HeroSection_01 from '$lib/blocks/hero-section-01.svelte';
  import Banner from '$lib/components/base/banner.svelte';
  import SectionExplore from '../../section-explore.svelte';

  let open = $state(true);
</script>

<svelte:head>
  <title>Lomer UI - Hero Section 01</title>
</svelte:head>

{#if open}
  <div class="h-14">
    <Banner bind:open class="bg-primary/5 border-none px-4">
      <div class="flex h-10 w-full items-center gap-2">
        <p class="hidden text-sm sm:block">Customize Theme</p>
        <SectionExplore placement="left" />
      </div>
    </Banner>
  </div>
{/if}

<HeroSection_01 />

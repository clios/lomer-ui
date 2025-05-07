<script>
  import CardGuide from '$lib/components/base/card-guide.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import HeroSection_01Raw from '$lib/blocks/hero-section-01.svelte?raw';
  import HeroSection_02Raw from '$lib/blocks/hero-section-02.svelte?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Hero Sections</title>
</svelte:head>

<Section>
  <p class="text-muted mb-2 text-xs">Block</p>
  <Title>Hero Sections</Title>
  <Paragraph>
    Get started with a curated collection of Tailwind CSS hero sections — clean, stylish, and flexible layouts to
    spotlight your website’s key message.
  </Paragraph>
</Section>

<Section>
  <Title>Hero Section 01</Title>
  <CardGuide src="/fullscreen/hero-section-01" />
  <CopySvelteCode title="hero-section-01.svelte" code={HeroSection_01Raw} />
</Section>

<Section>
  <Title>Hero Section 02</Title>
  <CardGuide src="/fullscreen/hero-section-02" />
  <CopySvelteCode title="hero-section-02.svelte" code={HeroSection_02Raw} />
</Section>

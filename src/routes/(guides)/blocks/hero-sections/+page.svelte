<script>
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import SectionBlock from '$lib/components/base/section-block.svelte';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import { Pane, PaneGroup, PaneResizer } from 'paneforge';
  import CardBoard from '$lib/components/card-board.svelte';
  import CardGuide from '$lib/components/base/card-guide.svelte';
  import HeroSection_01 from '$lib/blocks/hero-section-01.svelte';
  import HeroSection_01Raw from '$lib/blocks/hero-section-01.svelte?raw';
  import Link from '$lib/components/base/link.svelte';
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

  <CardGuide src="/examples/hero-section-01" />
  <CopySvelteCode title="hero-section-01.svelte" code={HeroSection_01Raw} />
</Section>

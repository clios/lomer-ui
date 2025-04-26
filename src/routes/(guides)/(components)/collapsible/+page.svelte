<script lang="ts">
  import CollapsibleRaw from '$lib/components/base/collapsible.svelte?raw';
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Collapsible</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Collapsible</Title>
  <Paragraph>Expand and collapse content with ease.</Paragraph>
  <CardDemo class="flex-col">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="collapsible.svelte" code={CollapsibleRaw} />
</Section>

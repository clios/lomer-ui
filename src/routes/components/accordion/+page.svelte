<script lang="ts">
  import AccordionRaw from '$lib/components/base/accordion.svelte?raw';
  import AccordionPreview from './accordion-preview.svelte';
  import AccordionPreviewRaw from './accordion-preview.svelte?raw';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Section from '$lib/components/features/section.svelte';
  import TextBlock from '$lib/components/features/text-block.svelte';
  import Title from '$lib/components/features/title.svelte';
  import CardBoard from '$lib/components/card-board.svelte';

  const tickler = [
    {
      id: '1',
      label: 'Source Code'
    },
    {
      id: '2',
      label: 'Usage'
    },
    {
      id: '3',
      label: 'Single mode'
    }
  ];
</script>

<svelte:head>
  <title>Accordion . lomer-ui</title>
</svelte:head>

<Section>
  <p class="text-muted text-sm">Component</p>
  <p class="mt-2 w-min border-t border-dotted py-2 pr-8 text-2xl text-nowrap sm:text-3xl md:text-4xl">Accordion</p>
  <!-- <Title>Accordion</Title> -->
  <TextBlock>Expand and collapse content with ease.</TextBlock>
</Section>

<Section>
  <Title>Preview</Title>
  <CardBoard class="flex-col">
    <AccordionPreview />
  </CardBoard>
</Section>

<Section>
  <Title>Usage</Title>
  <CopySvelteCode code={AccordionPreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Title level={2}>1. Create accordion.svelte</Title>
  <CopySvelteCode title="accordion.svelte" code={AccordionRaw} />
  <Title level={2}>2. Create accordion-title.svelte</Title>
  <Title level={2}>3. Create accordion-content.svelte</Title>
</Section>

<Section>
  <Title>CLI</Title>
  <CopyCLI code={`npx lomer-ui get accordion`} />
</Section>

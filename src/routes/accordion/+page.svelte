<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/features/section.svelte';
  import TextBlock from '$lib/components/features/text-block.svelte';
  import Title from '$lib/components/features/title.svelte';
  import AccordionRaw from '$lib/components/base/accordion.svelte?raw';
</script>

<Section>
  <p class="text-muted text-sm">Component</p>
  <Title>Accordion</Title>
  <TextBlock>Expand and collapse content with ease.</TextBlock>
</Section>

<Section>
  <Title>Preview</Title>
  <CardBoard class="flex-col gap-4">
    <Preview />
  </CardBoard>
</Section>

<Section>
  <Title>Usage</Title>
  <CopySvelteCode code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Title level={2}>1. Create accordion component.</Title>
  <CopySvelteCode title="accordion.svelte" code={AccordionRaw} />
</Section>

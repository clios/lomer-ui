<script lang="ts">
  import FieldRaw from '$lib/components/base/field.svelte?raw';
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
  <title>Lomer UI - Field</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Component</p>
  <Title>Field</Title>
  <Paragraph>A versatile space for inputs.</Paragraph>
  <CardDemo class="flex flex-col gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="field.svelte" code={FieldRaw} />
</Section>

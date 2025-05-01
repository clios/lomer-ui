<script lang="ts">
  import CheckboxRaw from '$lib/components/base/checkbox.svelte?raw';
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
  <title>Lomer UI - Checkbox</title>
</svelte:head>

<Section>
  <p class="text-muted mb-2 text-xs">Component</p>
  <Title>Checkbox</Title>
  <Paragraph>Toggle options on or off.</Paragraph>
  <CardDemo class="flex-col gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="checkbox.svelte" code={CheckboxRaw} />
</Section>

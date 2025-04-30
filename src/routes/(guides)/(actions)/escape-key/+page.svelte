<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import EscapeKeyRaw from '$lib/actions/escape-key.svelte.ts?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Escape Key</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Action</p>
  <Title>Escape Key</Title>
  <Paragraph>Detects and handles the Escape key press.</Paragraph>
  <CardDemo class="flex-col gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>Create the action.</Paragraph>
  <CopySvelteCode open title="escape-key.svelte.ts" code={EscapeKeyRaw} />
</Section>

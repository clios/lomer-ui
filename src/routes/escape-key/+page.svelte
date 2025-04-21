<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import EscapeKeyRaw from '$lib/actions/escape-key.svelte.ts?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Escape Key</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Action</p>
  <Title>Escape Key</Title>
  <Paragraph>Detects and handles the Escape key press.</Paragraph>
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
  <Title>Source Code</Title>
  <Title level={2}>Create escape key action.</Title>
  <CopySvelteCode title="escape-key.svelte.ts" code={EscapeKeyRaw} />
</Section>

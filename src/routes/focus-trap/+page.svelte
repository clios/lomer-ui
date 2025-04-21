<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import FocusTrapRaw from '$lib/actions/focus-trap.svelte.ts?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Focus Trap</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Action</p>
  <Title>Focus Trap</Title>
  <Paragraph>Keeps focus within an element for accessibility.</Paragraph>
</Section>

<Section>
  <Title>Preview</Title>
  <CardBoard class="max-w-72">
    <Preview />
  </CardBoard>
</Section>

<Section>
  <Title>Usage</Title>
  <CopySvelteCode code={PreviewRaw} />
</Section>

<Section>
  <Title>Source Code</Title>
  <Title level={2}>Create focus trap action.</Title>
  <CopySvelteCode title="focus-trap.svelte.ts" code={FocusTrapRaw} />
</Section>

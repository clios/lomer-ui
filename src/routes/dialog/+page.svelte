<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import DialogRaw from '$lib/components/base/dialog.svelte?raw';
  import EscapeKeyRaw from '$lib/actions/escape-key.svelte.ts?raw';
  import FocusTrapRaw from '$lib/actions/focus-trap.svelte.ts?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Dialog</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Dialog</Title>
  <Paragraph>Displays a focused interface for user interaction.</Paragraph>
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

  <Title level={2}>Create focus trap action.</Title>
  <CopySvelteCode title="focus-trap.svelte.ts" code={FocusTrapRaw} />

  <Title level={2}>Create dialog component.</Title>
  <CopySvelteCode title="dialog.svelte" code={DialogRaw} />
</Section>

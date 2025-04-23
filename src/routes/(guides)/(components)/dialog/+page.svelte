<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import DialogRaw from '$lib/components/base/dialog.svelte?raw';
  import Link from '$lib/components/base/link.svelte';
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
  <CardBoard class="flex-col gap-4">
    <Preview />
  </CardBoard>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Source Code</Title>
  <Title level={2}>Setup actions (optional)</Title>
  <Paragraph>
    Use <Link href="/escape-key" target="_blank">escape key</Link> action to close the dialog by pressing escape key.
  </Paragraph>
  <Paragraph>
    Use <Link href="/focus-trap" target="_blank">focus trap</Link> action to trap the focus inside dialog component.
  </Paragraph>

  <Title level={2}>Create dialog component.</Title>
  <CopySvelteCode open title="dialog.svelte" code={DialogRaw} />
</Section>

<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import OutsideClickRaw from '$lib/actions/outside-click.svelte.ts?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Outside Click</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Action</p>
  <Title>Outside Click</Title>
  <Paragraph>Detects clicks outside a specified element.</Paragraph>
  <CardDemo class="flex-col gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>Create the action.</Paragraph>
  <CopySvelteCode open title="outside-click.svelte.ts" code={OutsideClickRaw} />
</Section>

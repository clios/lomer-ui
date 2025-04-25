<script lang="ts">
  import RadioRaw from '$lib/components/base/radio.svelte?raw';
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
  <title>Lomer UI - Radio</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Radio</Title>
  <Paragraph>Choose one option from a group with a click!</Paragraph>

  <CardDemo class="flex-col gap-4">
    <Preview />
  </CardDemo>

  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Source Code</Title>
  <Title level={2}>Create radio component.</Title>
  <CopySvelteCode open title="radio.svelte" code={RadioRaw} />
</Section>

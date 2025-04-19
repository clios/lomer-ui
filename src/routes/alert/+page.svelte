<script lang="ts">
  import AlertRaw from '$lib/components/base/alert.svelte?raw';
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/features/section.svelte';
  import TextBlock from '$lib/components/features/text-block.svelte';
  import Title from '$lib/components/features/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Alert</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Alert</Title>
  <TextBlock>Grabs attention and delivers important information.</TextBlock>
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
  <Title level={2}>Create alert component.</Title>
  <CopySvelteCode title="alert.svelte" code={AlertRaw} />
</Section>

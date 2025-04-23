<script lang="ts">
  import AlertRaw from '$lib/components/base/alert.svelte?raw';
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Alert</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Alert</Title>
  <Paragraph>Grabs attention and delivers important information.</Paragraph>
  <CardBoard>
    <Preview />
  </CardBoard>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Source Code</Title>
  <Title level={2}>Create alert component.</Title>
  <CopySvelteCode open title="alert.svelte" code={AlertRaw} />
</Section>

<script lang="ts">
  import SelectRaw from '$lib/components/base/select.svelte?raw';
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
  import Alert from '$lib/components/base/alert.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Select</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Select</Title>
  <Paragraph>Pick an option from a select menu.</Paragraph>
  <Alert class="mt-4">Will improve this soon so stay tuned!</Alert>
  <CardDemo class="flex-col gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Source Code</Title>
  <Title level={2}>Create select component.</Title>
  <CopySvelteCode open title="select.svelte" code={SelectRaw} />
</Section>

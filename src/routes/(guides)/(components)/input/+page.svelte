<script lang="ts">
  import InputRaw from '$lib/components/base/input.svelte?raw';
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
  <title>Lomer UI - Input</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Component</p>
  <Title>Input</Title>
  <Paragraph>A clear and simple way to collect user data.</Paragraph>
  <CardDemo class="flex">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="input.svelte" code={InputRaw} />
</Section>

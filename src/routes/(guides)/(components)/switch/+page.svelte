<script lang="ts">
  import SwitchRaw from '$lib/components/base/switch.svelte?raw';
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
  <title>Lomer UI - Switch</title>
</svelte:head>

<Section>
  <p class="text-muted mb-2 text-xs">Component</p>
  <Title>Switch</Title>
  <Paragraph>Switch options on or off.</Paragraph>
  <CardDemo class="flex-col gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="switch.svelte" code={SwitchRaw} />
</Section>

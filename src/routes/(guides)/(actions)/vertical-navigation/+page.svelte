<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import VerticalNavigationRaw from '$lib/actions/vertical-navigation.svelte.ts?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Vertical Navigation</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Action</p>
  <Title>Vertical Navigation</Title>
  <Paragraph>Enables up/down arrow key navigation.</Paragraph>
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
  <Title level={2}>Create vertical navigation action.</Title>
  <CopySvelteCode title="vertical-navigation.svelte.ts" code={VerticalNavigationRaw} />
</Section>

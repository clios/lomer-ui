<script lang="ts">
  import CardDemo from '$lib/components/card-demo.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import TabsItemRaw from '$lib/components/base/tabs-item.svelte?raw';
  import TabsRaw from '$lib/components/base/tabs.svelte?raw';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Tabs</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Tabs</Title>
  <Paragraph>Switch between views with ease.</Paragraph>
  <CardDemo class="max-w-[700px] flex-col">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>
    1. Create <Link href="/button" target="_blank">button</Link> component to make our design consistent.
  </Paragraph>
  <Paragraph>2. Create tabs component.</Paragraph>
  <CopySvelteCode title="tabs.svelte" code={TabsRaw} />
  <Paragraph>3. Create tabs item component.</Paragraph>
  <CopySvelteCode title="tabs-item.svelte" code={TabsItemRaw} />
</Section>

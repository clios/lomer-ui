<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import DrawerRaw from '$lib/components/base/drawer.svelte?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import Link from '$lib/components/base/link.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Drawer</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Component</p>
  <Title>Drawer</Title>
  <Paragraph>Slide-out panel for navigation or content.</Paragraph>
  <CardDemo class="flex-col gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>
    1. Create <Link href="/escape-key" target="_blank">escape key</Link> action to close the drawer by pressing escape key.
  </Paragraph>
  <Paragraph>
    2. Create <Link href="/focus-trap" target="_blank">focus trap</Link> action to trap the focus inside drawer component.
  </Paragraph>
  <Paragraph>3. Create drawer component.</Paragraph>
  <CopySvelteCode title="drawer.svelte" code={DrawerRaw} />
</Section>

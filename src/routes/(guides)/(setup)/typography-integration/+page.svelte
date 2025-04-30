<script>
  import Link from '$lib/components/base/link.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Typography Integration</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Setup</p>
  <Title>Typography Integration</Title>
  <Paragraph>Seamlessly blend text styles into your design.</Paragraph>
</Section>

<Section>
  <Title>Guide</Title>

  <Title level={2}>Choose Font</Title>
  <Paragraph>Visit <Link href="https://fontsource.org/" target="_blank">Fontsource</Link> for fonts.</Paragraph>

  <Title level={2}>Install Package</Title>
  <Paragraph>
    For this example, we will use
    <Link href="https://fontsource.org/fonts/nunito-sans/install" target="_blank">Nunito Sans</Link>.
  </Paragraph>
  <CopyCLI code="npm install @fontsource-variable/nunito-sans" />

  <Title level={2}>Import the Font</Title>
  <Paragraph>Import the font in your root layout.</Paragraph>
  <CopySvelteCode
    open
    title="+layout.svelte"
    code={`<script lang="ts"\>
  import '../app.css';
  import '@fontsource-variable/nunito-sans';
  import { ModeWatcher } from 'mode-watcher';

  let { children } = $props();
</script\>

<ModeWatcher defaultMode="system" />
{@render children()}`}
    highlightedLines={[2]}
  />

  <Title level={2}>CSS</Title>
  <Paragraph>You can now use it in your main CSS file.</Paragraph>
  <CopySvelteCode
    open
    title="app.css"
    code={`@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-bg text-fg;
    font-family: 'Nunito Sans Variable', sans-serif;
  }

  ::selection {
    background-color: var(--color-primary) !important;
    color: var(--color-primary-fg) !important;
  }
}`}
    highlightedLines={[7]}
  />
</Section>

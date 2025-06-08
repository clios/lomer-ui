<script>
    import CopyCLI from '$lib/components/copy-c-l-i.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import Link from '$lib/components/base/link.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Button from '$lib/components/base/button.svelte';
    import Stack from '$lib/components/base/stack.svelte';
    import IconArrowRight from '$lib/components/icons/icon-arrow-right.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Typography Integration</title>
</svelte:head>

<LomerSection>
    <p class="mb-2 text-muted text-xs">Setup</p>
    <LomerTitle>Typography Integration</LomerTitle>
    <Paragraph>Seamlessly blend text styles into your design.</Paragraph>
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>

    <LomerTitle level={2}>Choose Font</LomerTitle>
    <Paragraph>Visit <Link href="https://fontsource.org/" target="_blank">Fontsource</Link> for fonts.</Paragraph>

    <LomerTitle level={2}>Install Package</LomerTitle>
    <Paragraph>
        For this example, we will use
        <Link href="https://fontsource.org/fonts/nunito-sans/install" target="_blank">Nunito Sans</Link>.
    </Paragraph>
    <CopyCLI code="npm install @fontsource-variable/nunito-sans" />

    <LomerTitle level={2}>Import the Font</LomerTitle>
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

    <LomerTitle level={2}>CSS</LomerTitle>
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
</LomerSection>

<LomerSection>
    <Stack horizontal class="justify-between">
        <!-- PREVIOUS -->
        <Button href="/dark-mode-implementation" variant="ghost">
            <IconArrowRight class="inline min-w-4 max-w-4 rotate-180" /> Dark Mode Implementation
        </Button>
        <!-- Next -->
        <Button href="/icon-componentization" variant="ghost">
            Icon Componentization <IconArrowRight class="inline min-w-4 max-w-4" />
        </Button>
    </Stack>
</LomerSection>

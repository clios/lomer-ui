<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import DrawerRaw from '$lib/components/base/drawer.svelte?raw';
    import Link from '$lib/components/base/link.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import CardCLI from '$lib/components/card-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Drawer</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Drawer</LomerTitle>
    <Paragraph>Slide-out panel for navigation or content.</Paragraph>
    <CardDemo class="flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>
        1. Create <Link href="/escape-key" target="_blank">escape key</Link> action to close the drawer by pressing escape
        key.
    </Paragraph>
    <Paragraph>
        2. Create <Link href="/focus-trap" target="_blank">focus trap</Link> action to trap the focus inside drawer component.
    </Paragraph>
    <Paragraph>3. Create drawer component.</Paragraph>
    <CopySvelteCode title="drawer.svelte" code={DrawerRaw} />
    <CardCLI code="npx lomer-ui get drawer" />
</LomerSection>

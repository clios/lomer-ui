<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import Link from '$lib/components/base/link.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import TabsItemRaw from '$lib/components/base/tabs-item.svelte?raw';
    import TabsRaw from '$lib/components/base/tabs.svelte?raw';
    import CardCLI from '$lib/components/card-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Tabs</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Tabs</LomerTitle>
    <Paragraph>Switch between views with ease.</Paragraph>
    <CardDemo class="max-w-[700px] flex-col">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>
        1. Create <Link href="/button" target="_blank">button</Link> component to make our design consistent.
    </Paragraph>
    <Paragraph>2. Create tabs component.</Paragraph>
    <CopySvelteCode title="tabs.svelte" code={TabsRaw} />
    <Paragraph>3. Create tabs item component.</Paragraph>
    <CopySvelteCode title="tabs-item.svelte" code={TabsItemRaw} />
    <CardCLI code="npx lomer-ui get tabs" />
</LomerSection>

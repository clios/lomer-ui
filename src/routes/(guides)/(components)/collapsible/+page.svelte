<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CollapsibleRaw from '$lib/components/base/collapsible.svelte?raw';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import CardCLI from '$lib/components/card-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Collapsible</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Collapsible</LomerTitle>
    <Paragraph>Expand and collapse content with ease.</Paragraph>
    <CardDemo class="flex-col items-start">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="collapsible.svelte" code={CollapsibleRaw} />
    <CardCLI code="npx lomer-ui get collapsible" />
</LomerSection>

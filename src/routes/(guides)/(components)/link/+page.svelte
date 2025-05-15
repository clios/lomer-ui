<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LinkRaw from '$lib/components/base/link.svelte?raw';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import CardCLI from '$lib/components/card-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Link</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Link</LomerTitle>
    <Paragraph>Navigate users to new destinations.</Paragraph>
    <CardDemo class="flex-col">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="link.svelte" code={LinkRaw} />
    <CardCLI code="npx lomer-ui get link" />
</LomerSection>

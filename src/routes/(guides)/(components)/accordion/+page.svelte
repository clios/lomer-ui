<script lang="ts">
    import AccordionRaw from '$lib/components/base/accordion.svelte?raw';
    import CardCLI from '$lib/components/card-c-l-i.svelte';
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
</script>

<svelte:head>
    <title>Lomer UI - Accordion</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Accordion</LomerTitle>
    <Paragraph>Expand and collapse content with ease.</Paragraph>
    <CardDemo class="max-w-96 flex-col">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="accordion.svelte" code={AccordionRaw} />
    <CardCLI code="npx lomer-ui get accordion" />
</LomerSection>

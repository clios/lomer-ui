<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import RadioRaw from '$lib/components/base/radio.svelte?raw';
</script>

<svelte:head>
    <title>Lomer UI - Radio</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Radio</LomerTitle>
    <Paragraph>Choose one option from a group with a click!</Paragraph>
    <CardDemo class="flex-col gap-4">
        <Preview />
    </CardDemo>

    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="radio.svelte" code={RadioRaw} />
</LomerSection>

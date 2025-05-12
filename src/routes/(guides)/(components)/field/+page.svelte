<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import FieldRaw from '$lib/components/base/field.svelte?raw';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Field</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Field</LomerTitle>
    <Paragraph>A versatile space for inputs.</Paragraph>
    <CardDemo class="flex flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="field.svelte" code={FieldRaw} />
</LomerSection>

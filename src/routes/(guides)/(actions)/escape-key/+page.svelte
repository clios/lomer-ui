<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import EscapeKeyRaw from '$lib/actions/escape-key.svelte.ts?raw';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Escape Key</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Action</p>
    <LomerTitle>Escape Key</LomerTitle>
    <Paragraph>Detects and handles the Escape key press.</Paragraph>
    <CardDemo class="flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>Create the action.</Paragraph>
    <CopySvelteCode open title="escape-key.svelte.ts" code={EscapeKeyRaw} />
</LomerSection>

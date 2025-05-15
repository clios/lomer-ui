<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import FocusTrapRaw from '$lib/actions/focus-trap.svelte.ts?raw';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import CopyCLI from '$lib/components/copy-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Focus Trap</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Action</p>
    <LomerTitle>Focus Trap</LomerTitle>
    <Paragraph>Keeps focus within an element for accessibility.</Paragraph>
    <CardDemo class="max-w-72">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>Create the action.</Paragraph>
    <CopySvelteCode open title="focus-trap.svelte.ts" code={FocusTrapRaw} />
    <CopyCLI code="npx lomer-ui action focus-trap" />
</LomerSection>

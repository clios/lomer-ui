<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import OutsideClickRaw from '$lib/actions/outside-click.svelte.ts?raw';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import CopyCLI from '$lib/components/copy-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Outside Click</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Action</p>
    <LomerTitle>Outside Click</LomerTitle>
    <Paragraph>Detects clicks outside a specified element.</Paragraph>
    <CardDemo class="flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>Create the action.</Paragraph>
    <CopySvelteCode open title="outside-click.svelte.ts" code={OutsideClickRaw} />
    <CopyCLI code="npx lomer-ui action outside-click" />
</LomerSection>

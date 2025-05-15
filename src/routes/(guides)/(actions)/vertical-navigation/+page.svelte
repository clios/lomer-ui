<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import VerticalNavigationRaw from '$lib/actions/vertical-navigation.svelte.ts?raw';
    import CardCLI from '$lib/components/card-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Vertical Navigation</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Action</p>
    <LomerTitle>Vertical Navigation</LomerTitle>
    <Paragraph>Enables up/down arrow key navigation.</Paragraph>
    <CardDemo class="flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>Create the action.</Paragraph>
    <CopySvelteCode open title="vertical-navigation.svelte.ts" code={VerticalNavigationRaw} />
    <CardCLI code="npx lomer-ui action vertical-navigation" />
</LomerSection>

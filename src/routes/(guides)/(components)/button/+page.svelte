<script lang="ts">
    import ButtonRaw from '$lib/components/base/button.svelte?raw';
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
    <title>Lomer UI - Button</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Button</LomerTitle>
    <Paragraph>Click it and make actions happen.</Paragraph>
    <CardDemo class="flex-wrap gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="button.svelte" code={ButtonRaw} />
    <CardCLI code="npx lomer-ui get button" />
</LomerSection>

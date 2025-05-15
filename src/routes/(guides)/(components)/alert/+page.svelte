<script lang="ts">
    import AlertRaw from '$lib/components/base/alert.svelte?raw';
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
    <title>Lomer UI - Alert</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Alert</LomerTitle>
    <Paragraph>Grabs attention and delivers important information.</Paragraph>
    <CardDemo>
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="alert.svelte" code={AlertRaw} />
    <CardCLI code="npx lomer-ui get alert" />
</LomerSection>

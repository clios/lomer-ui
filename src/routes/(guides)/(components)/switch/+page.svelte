<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import SwitchRaw from '$lib/components/base/switch.svelte?raw';
    import CardCLI from '$lib/components/card-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Switch</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Switch</LomerTitle>
    <Paragraph>Switch options on or off.</Paragraph>
    <CardDemo class="flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="switch.svelte" code={SwitchRaw} />
    <CardCLI code="npx lomer-ui get switch" />
</LomerSection>

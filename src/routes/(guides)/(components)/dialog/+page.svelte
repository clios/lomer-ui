<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import DialogRaw from '$lib/components/base/dialog.svelte?raw';
    import Link from '$lib/components/base/link.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import CardCLI from '$lib/components/card-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Dialog</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Dialog</LomerTitle>
    <Paragraph>Displays a focused interface for user interaction.</Paragraph>
    <CardDemo>
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>
        1. Create <Link href="/escape-key" target="_blank">escape key</Link> action to close the dialog by pressing escape
        key.
    </Paragraph>
    <Paragraph>
        2. Create <Link href="/focus-trap" target="_blank">focus trap</Link> action to trap the focus inside dialog component.
    </Paragraph>
    <Paragraph>3. Create dialog component.</Paragraph>
    <CopySvelteCode title="dialog.svelte" code={DialogRaw} />
    <CardCLI code="npx lomer-ui get dialog" />
</LomerSection>

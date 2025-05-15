<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import HotkeyRaw from '$lib/actions/hotkey.svelte.ts?raw';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import CopyCLI from '$lib/components/copy-c-l-i.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Hotkey</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Action</p>
    <LomerTitle>Hotkey</LomerTitle>
    <Paragraph>Triggers actions with keyboard shortcuts.</Paragraph>
    <CardDemo class="flex flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>Create the action.</Paragraph>
    <CopySvelteCode open title="hotkey.svelte.ts" code={HotkeyRaw} />
    <CopyCLI code="npx lomer-ui action hotkey" />
</LomerSection>

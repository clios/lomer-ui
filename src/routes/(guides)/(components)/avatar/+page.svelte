<script lang="ts">
    import AvatarRaw from '$lib/components/base/avatar.svelte?raw';
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
</script>

<svelte:head>
    <title>Lomer UI - Avatar</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Avatar</LomerTitle>
    <Paragraph>Display user profiles with a touch of personality.</Paragraph>
    <CardDemo class="flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode open title="avatar.svelte" code={AvatarRaw} />
</LomerSection>

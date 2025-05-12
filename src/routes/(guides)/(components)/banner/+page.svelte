<script lang="ts">
    import BannerRaw from '$lib/components/base/banner.svelte?raw';
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
</script>

<svelte:head>
    <title>Lomer UI - Banner</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Banner</LomerTitle>
    <Paragraph>Highlight key messages with bold visual emphasis.</Paragraph>
    <CardDemo>
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>We only need one component.</Paragraph>
    <CopySvelteCode title="banner.svelte" code={BannerRaw} />
</LomerSection>

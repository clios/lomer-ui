<script>
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import IconMenuRaw from '$lib/components/icons/icon-menu.svelte?raw';
    import Link from '$lib/components/base/link.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import Button from '$lib/components/base/button.svelte';
    import Stack from '$lib/components/base/stack.svelte';
    import IconArrowRight from '$lib/components/icons/icon-arrow-right.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Icon Componentization</title>
</svelte:head>

<LomerSection>
    <p class="mb-2 text-muted text-xs">Setup</p>
    <LomerTitle>Icon Componentization</LomerTitle>
    <Paragraph>Turn icons into reusable components for easy, consistent use.</Paragraph>
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>

    <LomerTitle level={2}>Choose Icon</LomerTitle>
    <Paragraph>
        Visit <Link href="https://icon-sets.iconify.design/" target="_blank">Iconify</Link> for icons then copy the SVG snippet
        you want.
    </Paragraph>

    <LomerTitle level={2}>Create the Icon Component</LomerTitle>
    <CopySvelteCode open title="icon-menu.svelte" code={IconMenuRaw} />

    <LomerTitle level={2}>Use the Icon</LomerTitle>
    <Paragraph>We can now use it just like a simple component.</Paragraph>
    <CardDemo>
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <Stack horizontal class="justify-between">
        <!-- PREVIOUS -->
        <Button href="/typography-integration" variant="ghost">
            <IconArrowRight class="inline min-w-4 max-w-4 rotate-180" /> Typography Integration
        </Button>
        <!-- Next -->
        <Button href="/accordion" variant="ghost">
            Accordion <IconArrowRight class="inline min-w-4 max-w-4" />
        </Button>
    </Stack>
</LomerSection>

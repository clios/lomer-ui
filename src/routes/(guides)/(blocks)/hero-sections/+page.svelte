<script>
    import CardGuide from '$lib/components/base/card-guide.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import HeroSection_01 from '$lib/blocks/hero-section-01.svelte';
    import HeroSection_01Raw from '$lib/blocks/hero-section-01.svelte?raw';
    import HeroSection_02 from '$lib/blocks/hero-section-02.svelte';
    import HeroSection_02Raw from '$lib/blocks/hero-section-02.svelte?raw';
    import HeroSection_03 from '$lib/blocks/hero-section-03.svelte';
    import HeroSection_03Raw from '$lib/blocks/hero-section-03.svelte?raw';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerSectionGuide from '$lib/components/site/lomer-section-guide.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
</script>

<svelte:head>
    <title>Lomer UI - Hero Sections</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Block</p>
    <LomerTitle>Hero Sections</LomerTitle>
    <Paragraph>
        Get started with a curated collection of Tailwind CSS hero sections — clean, stylish, and flexible layouts to
        spotlight your website’s key message.
    </Paragraph>
</LomerSection>

<LomerSectionGuide>
    <CopySvelteCode title="hero-section-01.svelte" code={HeroSection_01Raw} />
    <CardGuide>
        <HeroSection_01 />
    </CardGuide>
</LomerSectionGuide>

<LomerSectionGuide>
    <CopySvelteCode title="hero-section-02.svelte" code={HeroSection_02Raw} />
    <CardGuide>
        <HeroSection_02 />
    </CardGuide>
</LomerSectionGuide>

<LomerSectionGuide withFooter>
    <CopySvelteCode title="hero-section-03.svelte" code={HeroSection_03Raw} />
    <CardGuide>
        <HeroSection_03 />
    </CardGuide>
</LomerSectionGuide>

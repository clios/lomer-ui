<script>
    import CardGuide from '$lib/components/base/card-guide.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import HeroSection_01 from '$lib/blocks/hero-section-01.svelte';
    import HeroSection_01Raw from '$lib/blocks/hero-section-01.svelte?raw';
    import HeroSection_02 from '$lib/blocks/hero-section-02.svelte';
    import HeroSection_02Raw from '$lib/blocks/hero-section-02.svelte?raw';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
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

<div
    class="bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pt-8 [--color-border:var(--color-fg)]/5 xl:pt-16 dark:[--color-border:var(--color-fg)]/5"
>
    <div class="container mx-auto sm:px-4 lg:px-8">
        <div class="border-muted-fg border">
            <CopySvelteCode class="mt-0 border-none" title="hero-section-01.svelte" code={HeroSection_01Raw} />
            <CardGuide>
                <HeroSection_01 />
            </CardGuide>
        </div>
    </div>
</div>

<div
    class="bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pt-8 [--color-border:var(--color-fg)]/5 xl:pt-16 dark:[--color-border:var(--color-fg)]/5"
>
    <div class="container mx-auto sm:px-4 lg:px-8">
        <div class="border-muted-fg border">
            <CopySvelteCode class="mt-0" title="hero-section-02.svelte" code={HeroSection_02Raw} />
            <CardGuide>
                <HeroSection_02 />
            </CardGuide>
        </div>
    </div>
</div>

<div
    class="border-b border-dotted bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pt-8 [--color-border:var(--color-fg)]/5 xl:pt-16 dark:[--color-border:var(--color-fg)]/5"
></div>

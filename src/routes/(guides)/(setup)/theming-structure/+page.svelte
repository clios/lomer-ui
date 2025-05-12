<script>
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import ThemeCSS from '$lib/components/base/lomer.css?raw';
</script>

<svelte:head>
    <title>Lomer UI - Theming Structure</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Setup</p>
    <LomerTitle>Theming Structure</LomerTitle>
    <Paragraph>Customize styles to match your vibe.</Paragraph>
</LomerSection>

<LomerSection>
    <LomerTitle>Foreground vs Background</LomerTitle>
    <Paragraph>In UI design, foreground and background define the visual layers of an element:</Paragraph>
    <LomerTitle level={2}>Foreground: Text, icons, borders</LomerTitle>
    <Paragraph>→ Controlled with color, fill, stroke, border-color</Paragraph>
    <LomerTitle level={2}>Background: Element surface behind content</LomerTitle>
    <Paragraph>→ Controlled with background-color, background-image</Paragraph>
</LomerSection>

<LomerSection>
    <LomerTitle>Convention</LomerTitle>
    <Paragraph>
        The most common approach is to use bg and fg for color variables, simplifying "background" and "foreground". To
        keep our code clean, bg is omitted when it's context is clear.
    </Paragraph>
    <CopySvelteCode open code={`<Button class="bg-primary text-primary-fg">\n\tSample styling\n</Button>`}
    ></CopySvelteCode>
</LomerSection>

<LomerSection>
    <LomerTitle>Source Code</LomerTitle>
    <Paragraph>Define your theme variables.</Paragraph>
    <CopySvelteCode open language="css" title="app.css" code={ThemeCSS}></CopySvelteCode>
</LomerSection>

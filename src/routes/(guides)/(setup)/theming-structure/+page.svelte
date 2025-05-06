<script>
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Section from '$lib/components/base/section.svelte';
  import ThemeCSS from '$lib/components/base/lomer.css?raw';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Theming Structure</title>
</svelte:head>

<Section>
  <p class="text-muted mb-2 text-xs">Setup</p>
  <Title>Theming Structure</Title>
  <Paragraph>Customize styles to match your vibe.</Paragraph>
</Section>

<Section>
  <Title>Foreground vs Background</Title>
  <Paragraph>In UI design, foreground and background define the visual layers of an element:</Paragraph>
  <Title level={2}>Foreground: Text, icons, borders</Title>
  <Paragraph>→ Controlled with color, fill, stroke, border-color</Paragraph>
  <Title level={2}>Background: Element surface behind content</Title>
  <Paragraph>→ Controlled with background-color, background-image</Paragraph>
</Section>

<Section>
  <Title>Convention</Title>
  <Paragraph>
    The most common approach is to use bg and fg for color variables, simplifying "background" and "foreground". To keep
    our code clean, bg is omitted when it's context is clear.
  </Paragraph>
  <CopySvelteCode open code={`<Button class="bg-primary text-primary-fg">\n\tSample styling\n</Button>`}
  ></CopySvelteCode>
</Section>

<Section>
  <Title>Source Code</Title>
  <Paragraph>Define your theme variables.</Paragraph>
  <CopySvelteCode open language="css" title="app.css" code={ThemeCSS}></CopySvelteCode>
</Section>

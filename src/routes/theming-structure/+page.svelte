<script>
  import Alert from '$lib/components/base/alert.svelte';
  import CopyCSSCode from '$lib/components/copy-c-s-s-code.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Section from '$lib/components/features/section.svelte';
  import TextBlock from '$lib/components/features/text-block.svelte';
  import Title from '$lib/components/features/title.svelte';
  import ThemeCSS from './theme.css?raw';
</script>

<Section>
  <p class="text-muted text-sm">Getting started</p>
  <Title>Theming structure</Title>
  <TextBlock>Customize styles to match your vibe.</TextBlock>
  <TextBlock class="text-muted-fg my-4 font-mono">///////////////////////////</TextBlock>
  <Alert class="max-w-[800px]">
    I was inspired by shadcn's beautiful theming—it's simple, intuitive, and loved by developers. To help new Svelte
    developers or those exploring a UI library, I’ve adapted some of its naming conventions.
  </Alert>
</Section>

<Section>
  <Title>Foreground vs Background</Title>
  <TextBlock>In UI design, foreground and background define the visual layers of an element:</TextBlock>
  <Title level={2}>Foreground: Text, icons, borders</Title>
  <TextBlock>→ Controlled with color, fill, stroke, border-color</TextBlock>
  <Title level={2}>Background: Element surface behind content</Title>
  <TextBlock>→ Controlled with background-color, background-image</TextBlock>
</Section>

<Section>
  <Title>Convention</Title>
  <TextBlock>
    The most common approach is to use bg and fg for color variables, simplifying "background" and "foreground". To keep
    our code clean, bg is omitted when it's context is clear.
  </TextBlock>
  <Title level={2}>Example</Title>

  <CopySvelteCode code={`<Button class="bg-primary text-primary-fg">\n\tSample styling\n</Button>`}></CopySvelteCode>
</Section>

<Section>
  <Title>Define your theme variables</Title>
  <CopyCSSCode title="app.css" code={ThemeCSS}></CopyCSSCode>
</Section>

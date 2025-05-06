<script>
  import Link from '$lib/components/base/link.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import IconMenuRaw from '$lib/components/icons/icon-menu.svelte?raw';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
</script>

<svelte:head>
  <title>Lomer UI - Icon Componentization</title>
</svelte:head>

<Section>
  <p class="text-muted mb-2 text-xs">Setup</p>
  <Title>Icon Componentization</Title>
  <Paragraph>Turn icons into reusable components for easy, consistent use.</Paragraph>
</Section>

<Section>
  <Title>Guide</Title>

  <Title level={2}>Choose Icon</Title>
  <Paragraph>
    Visit <Link href="https://icon-sets.iconify.design/" target="_blank">Iconify</Link> for icons then copy the SVG snippet
    you want.
  </Paragraph>

  <Title level={2}>Create the Icon Component</Title>
  <CopySvelteCode open title="icon-menu.svelte" code={IconMenuRaw} />

  <Title level={2}>Use the Icon</Title>
  <Paragraph>We can now use it just like a simple component.</Paragraph>
  <CardDemo>
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

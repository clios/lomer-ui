<script>
  import Accordion from '$lib/components/base/accordion.svelte';
  import Alert from '$lib/components/base/alert.svelte';
  import Button from '$lib/components/base/button.svelte';
  import CardBoard from '$lib/components/card-board.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI</title>
</svelte:head>

<Section>
  <p class="text-muted text-sm">Svelte v5</p>
  <p class="text-muted text-sm">Tailwind CSS v4</p>
  <p class="my-4 text-2xl sm:text-3xl md:text-4xl">Lomer UI</p>
  <Paragraph>
    Open-source learning resource focused on building UI components from scratch using Svelte and Tailwind CSS.
  </Paragraph>
  <Alert class="mt-4 border-red-500 max-w-[800px]">
    I'm currently repurposing Lomer UI. I noticed most of the users just like to read the codes for its simplicity.
    Making it a guide will benefit myself and developers who want to build their components from scratch.
  </Alert>
</Section>

<Section>
  <Title>Why not a library?</Title>
  <Paragraph>
    I believe that for simple components, it's better to focus on teaching the code and underlying concepts rather than
    fully relying on a library. By combining the simplicity of Svelte with the versatility of Tailwind CSS, we make
    building UI straightforward, educational, and fully customizable.
  </Paragraph>
  <Title level={2}>More control</Title>
  <Paragraph>You’re not limited by a library’s rules. You write the code your way.</Paragraph>
  <Title level={2}>Custom designs</Title>
  <Paragraph>Tailwind makes it easy to create your own look without fighting against prebuilt styles.</Paragraph>
  <Title level={2}>Better performance</Title>
  <Paragraph>No extra code—just the pieces you build and need.</Paragraph>
</Section>

<Section>
  <Title>Examples</Title>

  <CardBoard class="flex flex-wrap gap-4">
    <Accordion class="w-72" title="Accordion">Content here...</Accordion>
    <Button>Default</Button>
    <Button variant="inverted">Inverted</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </CardBoard>
</Section>

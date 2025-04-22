<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import DropdownRaw from '$lib/components/base/dropdown.svelte?raw';
  import DropdownOptionRaw from '$lib/components/base/dropdown-option.svelte?raw';
  import DropdownSwitchRaw from '$lib/components/base/dropdown-switch.svelte?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import Link from '$lib/components/base/link.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Dropdown</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Dropdown</Title>
  <Paragraph>A compact menu for quick options.</Paragraph>
</Section>

<Section>
  <Title>Preview</Title>
  <CardBoard class="flex-col gap-4">
    <Preview />
  </CardBoard>
</Section>

<Section>
  <Title>Usage</Title>
  <CopySvelteCode code={PreviewRaw} />
</Section>

<Section>
  <Title>Source Code</Title>
  <Title level={2}>Setup actions (optional)</Title>
  <Paragraph>
    Use <Link href="/escape-key" target="_blank">escape key</Link> action to close the dropdown by pressing escape key.
  </Paragraph>
  <Paragraph>
    Use <Link href="/focus-trap" target="_blank">focus trap</Link> action to trap the focus inside dropdown component.
  </Paragraph>
  <Paragraph>
    Use <Link href="/outside-click" target="_blank">outside click</Link> action to close dropdown component.
  </Paragraph>
  <Paragraph>
    Use <Link href="/vertical-navigation" target="_blank">vertical navigation</Link> action to focus elements using up and
    down arrow keys.
  </Paragraph>

  <Title level={2}>Create drawer component.</Title>
  <CopySvelteCode title="drawer.svelte" code={DropdownRaw} />
</Section>

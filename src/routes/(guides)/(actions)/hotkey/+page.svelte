<script lang="ts">
  import CardBoard from '$lib/components/card-board.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import HotkeyRaw from '$lib/actions/hotkey.svelte.ts?raw';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Hotkey</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Action</p>
  <Title>Hotkey</Title>
  <Paragraph>Triggers actions with keyboard shortcuts.</Paragraph>
  <CardDemo class="flex flex-col gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>Create the action.</Paragraph>
  <CopySvelteCode open title="hotkey.svelte.ts" code={HotkeyRaw} />
</Section>

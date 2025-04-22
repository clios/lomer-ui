<script>
  import Button from '$lib/components/base/button.svelte';
  import CardBoard from '$lib/components/card-board.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import HighlightText from '$lib/components/highlight-text.svelte';
  import Link from '$lib/components/base/link.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import { toggleMode, mode } from 'mode-watcher';
</script>

<svelte:head>
  <title>Lomer UI - Dark Mode Implementation</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Set Up Your Own Foundation</p>
  <Title>Dark Mode Implementation</Title>
  <Paragraph>Adding dark mode to your site using mode-watcher.</Paragraph>
</Section>

<Section>
  <Title>Usage</Title>
  <Title level={2}>Install mode-watcher</Title>
  <CopyCLI code="npm install mode-watcher" />
  <Paragraph>
    See <Link target="_blank" href="https://mode-watcher.svecosystem.com">Mode Watcher</Link> for details.
  </Paragraph>
  <Title level={2}>Add ModeWatcher component</Title>
  <Paragraph>
    Add the <HighlightText>{`<ModeWatcher />`}</HighlightText>
    component to your root layout file.
  </Paragraph>
  <CopySvelteCode
    title="+layout.svelte"
    code={`<script\ lang="ts">` +
      `\n\timport { ModeWatcher } from "mode-watcher";` +
      `\n\tlet { children } = $props();` +
      `\n</script>` +
      `\n` +
      `\n<ModeWatcher defaultMode="system" />` +
      `\n{@render children()}`}
  />
  <Title level={2}>That's it!</Title>
  <Paragraph>
    Use the <HighlightText>toggleMode</HighlightText> function and <HighlightText>$mode</HighlightText> to toggle:
  </Paragraph>
  <CardBoard class="justify-center">
    <Button onclick={toggleMode}>
      {#if $mode === 'light'}
        Light
      {:else}
        Dark
      {/if}
    </Button>
  </CardBoard>
  <CopySvelteCode
    code={`<script\ lang="ts">` +
      `\n\timport Button from '$lib/components/base/button.svelte';` +
      `\n\timport { toggleMode, mode } from 'mode-watcher';` +
      `\n</script>` +
      `\n` +
      `\n<Button onclick={toggleMode}>` +
      `\n\t{#if $mode === 'light'}` +
      `\n\t\tLight` +
      `\n\t{:else}` +
      `\n\t\tDark` +
      `\n\t{/if}` +
      `\n</Button>`}
  />
</Section>

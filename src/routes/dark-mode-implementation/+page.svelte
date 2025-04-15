<script>
  import Button from '$lib/components/base/button.svelte';
  import CardBoard from '$lib/components/card-board.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import HighlightText from '$lib/components/highlight-text.svelte';
  import Link from '$lib/components/base/link.svelte';
  import Section from '$lib/components/features/section.svelte';
  import TextBlock from '$lib/components/features/text-block.svelte';
  import Title from '$lib/components/features/title.svelte';
  import { toggleMode, mode } from 'mode-watcher';
</script>

<Section>
  <p class="text-muted text-sm">Getting started</p>
  <Title>Dark mode implementation</Title>
  <TextBlock>Adding dark mode to your site using mode-watcher.</TextBlock>
</Section>

<Section>
  <Title>Usage</Title>
  <Title level={2}>Install mode-watcher</Title>
  <CopyCLI code="npm install mode-watcher" />
  <TextBlock>
    See <Link class="underline" target="_blank" href="https://mode-watcher.svecosystem.com">Mode Watcher</Link> for details.
  </TextBlock>
  <Title level={2}>Add ModeWatcher component</Title>
  <TextBlock>
    Add the <HighlightText>{`<ModeWatcher />`}</HighlightText>
    component to your root layout file.
  </TextBlock>
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
  <TextBlock>
    Use the <HighlightText>toggleMode</HighlightText> function and <HighlightText>$mode</HighlightText> to toggle:
  </TextBlock>
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

<script>
  import AccordionsPreviewCode from '$lib/components/accordions-preview-code.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import HighlightText from '$lib/components/highlight-text.svelte';
  import Icon from '@iconify/svelte';
  import Link from '$lib/components/ui/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';
  import { toggleMode, mode } from 'mode-watcher';

  const tickler = [
    {
      id: '1',
      label: 'Usage'
    },
    {
      id: '1.1',
      label: 'Install mode-watcher',
      sub: true
    },
    {
      id: '1.2',
      label: 'Add ModeWatcher component',
      sub: true
    },
    {
      id: '1.3',
      label: "That's it",
      sub: true
    }
  ];
</script>

<svelte:head>
  <title>Dark Mode . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Dark Mode"
  sub="Docs"
  info="Adding dark mode to your site using mode-watcher."
  prevLabel="Installation"
  prevLink="/docs/installation"
  nextLabel="Theming"
  nextLink="/docs/theming"
>
  <PageSection id="1" title="Usage">
    <PageArticle id="1.1" title="Install mode-watcher">
      <CopyCLI code="npm install mode-watcher" />
      <p>
        See <Link
          class="underline"
          target="_blank"
          href="https://mode-watcher.svecosystem.com"
        >
          Mode Watcher
        </Link> for details.
      </p>
    </PageArticle>
    <PageArticle id="1.2" title="Add ModeWatcher component">
      <p>
        Add the <HighlightText>{`<ModeWatcher />`}</HighlightText>
        component to your root layout file.
      </p>
      <CopySvelteCode
        title="+layout.svelte"
        code={`<script\>` +
          `\n\timport { ModeWatcher } from "mode-watcher";` +
          `\n\tlet { children } = $props();` +
          `\n</script>` +
          `\n` +
          `\n<ModeWatcher defaultMode="system" />` +
          `\n{@render children()}`}
      />
    </PageArticle>
    <PageArticle id="1.3" title="That's it!">
      <p>
        Use the <HighlightText>toggleMode</HighlightText> function and <HighlightText
          >$mode</HighlightText
        > to toggle:
      </p>
      <Screen class="justify-center">
        <Button size="icon" onclick={toggleMode}>
          {#if $mode === 'light'}
            <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
          {:else}
            <Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
          {/if}
        </Button>
      </Screen>
      <CopySvelteCode
        code={`<script\ lang="ts">` +
          `\n\timport Button from '$lib/components/ui/button.svelte';` +
          `\n\timport Icon from '@iconify/svelte';` +
          `\n\timport { toggleMode, mode } from 'mode-watcher';` +
          `\n</script>` +
          `\n` +
          `\n<Button size="icon" onclick={toggleMode}>` +
          `\n\t{#if $mode === 'light'}` +
          `\n\t\t<Icon icon="line-md:moon-to-sunny-outline-loop-transition" />` +
          `\n\t{:else}` +
          `\n\t\t<Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />` +
          `\n\t{/if}` +
          `\n</Button>`}
      />
    </PageArticle>
  </PageSection>
</PageWrapper>

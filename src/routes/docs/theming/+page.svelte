<script>
  import CopyCSSCode from '$lib/components/copy-c-s-s-code.svelte';
  import HighlightText from '$lib/components/highlight-text.svelte';
  import Icon from '@iconify/svelte';
  import Link from '$lib/components/base/link.svelte';
  import LomerCSSRaw from '$lib/components/base/lomer.css?raw';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Alert from '$lib/components/base/alert.svelte';

  const tickler = [
    {
      id: '1',
      label: 'Convention'
    },
    {
      id: '2',
      label: 'Default lomer.css'
    },
    {
      id: '3',
      label: 'Adding theme variables'
    }
  ];
</script>

<svelte:head>
  <title>Theming . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Theming"
  sub="Docs"
  info="Customize styles to match your vibe."
  prevLabel="Dark Mode"
  prevLink="/docs/dark-mode"
  nextLabel="CLI"
  nextLink="/docs/cli"
>
  <Alert>
    <p>
      I was inspired by ShadCN's beautiful theming—it's simple, intuitive, and
      loved by developers. To help new Svelte developers or those exploring a UI
      library, I’ve adapted some of its naming conventions.
    </p>
  </Alert>

  <PageSection id="1" title="Convention">
    <PageArticle>
      <p>
        The most common and straightforward approach is to use
        <HighlightText>bg</HighlightText> and <HighlightText>fg</HighlightText> for
        color variables, simplifying "background" and "foreground". To keep our code
        clean, <HighlightText>bg</HighlightText> is omitted when it's context is
        clear.
      </p>
      <div class="font-mono text-sm sm:text-base">
        <p class="text-muted font-sans italic">e.g.</p>
        <p class="flex items-center">
          bg-primary<span class="pr-2 text-red-500">-bg</span> text-primary-fg <Icon
            class="w-8 pl-3 text-red-500"
            icon="mdi:close"
          />
        </p>
        <p class="flex items-center gap-3">
          bg-primary text-primary-fg <Icon
            class="text-green-500"
            icon="mdi:check"
          />
        </p>
      </div>
    </PageArticle>
  </PageSection>

  <PageSection id="2" title="Default lomer.css">
    <PageArticle>
      <p class="text-muted">
        Using
        <HighlightText>npx lomer-ui init</HighlightText>
        will automatically import lomer.css to your app.css.
      </p>
      <CopyCSSCode
        title="app.css"
        highlightedLines={[1]}
        code={`@import "tailwindcss";` +
          `\n@import './lib/components/base/lomer.css';`}
      />
      <CopyCSSCode title="lomer.css" code={LomerCSSRaw} />
    </PageArticle>
  </PageSection>

  <PageSection id="3" title="Adding theme variables">
    <PageArticle>
      <p>TailwindCSS v4 has a great way to add theme variables.</p>
      <Link href="https://tailwindcss.com/docs/theme" target="_blank"
        >https://tailwindcss.com/docs/theme</Link
      >
    </PageArticle>
  </PageSection>
</PageWrapper>

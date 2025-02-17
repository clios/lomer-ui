<script>
  import CopyCSSCode from '$lib/components/copy-c-s-s-code.svelte';
  import Highlight from 'svelte-highlight';
  import HighlightText from '$lib/components/highlight-text.svelte';
  import Icon from '@iconify/svelte';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import css from 'svelte-highlight/languages/css';
  import felipec from 'svelte-highlight/styles/felipec';

  const tickler = [
    {
      id: '1',
      label: 'Convention'
    },
    {
      id: '2',
      label: 'CSS Variables'
    },
    {
      id: '3',
      label: 'Adding theme variables'
    },
    {
      id: '4',
      label: 'lomer.css'
    }
  ];
</script>

<svelte:head>
  <title>Theming . lomer-ui</title>
  {@html felipec}
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
  <PageSection class="lg:text-xl">
    <div>
      <p>Theming feature for lomer-ui is almost the same with shadcn.</p>
    </div>
  </PageSection>

  <PageSection id="1" title="Convention">
    <PageArticle>
      <p>
        The most common and straightforward approach is to use <HighlightText
          >bg</HighlightText
        >
        and
        <HighlightText>fg</HighlightText> for color variables, simplifying "background"
        and "foreground". To keep our code clean,
        <HighlightText>bg</HighlightText> is omitted when it's context is clear.
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

  <PageSection id="2" title="CSS Variables">
    <PageArticle title="General background and foreground color.">
      <Highlight
        language={css}
        code={`--color-bg: var(--color-zinc-50);` +
          `\n--color-fg: var(--color-zinc-950);`}
      />
    </PageArticle>
    <PageArticle title="Main color of your design.">
      <Highlight
        language={css}
        code={`--color-primary: var(--color-cyan-600);` +
          `\n--color-primary-fg: var(--color-zinc-50);`}
      />
    </PageArticle>
    <PageArticle title="Supporting color of your design.">
      <Highlight
        language={css}
        code={`--color-secondary: var(--color-zinc-200);` +
          `\n--color-secondary-fg: var(--color-zinc-950);`}
      />
    </PageArticle>
    <PageArticle
      title="Signals danger, warning or irreversibility action color."
    >
      <Highlight
        language={css}
        code={`--color-destructive: var(--color-red-500);` +
          `\n--color-destructive-fg: var(--color-zinc-50);`}
      />
    </PageArticle>
    <PageArticle title="Softer tone for supporting details color.">
      <Highlight
        language={css}
        code={`--color-muted: var(--color-zinc-600);` +
          `\n--color-muted-fg: var(--color-zinc-400);`}
      />
    </PageArticle>
    <PageArticle
      title="Visually indicate disabled actions like disabled button."
    >
      <Highlight
        language={css}
        code={`--color-disabled: var(--color-zinc-500);` +
          `\n--color-disabled-fg: var(--color-zinc-800);`}
      />
    </PageArticle>
    <PageArticle title="Form input elements color.">
      <Highlight
        language={css}
        code={`--color-input: var(--color-zinc-50);` +
          `\n--color-input-fg: var(--color-zinc-950);`}
      />
    </PageArticle>
    <PageArticle title="Card like components color.">
      <Highlight
        language={css}
        code={`--color-card: var(--color-zinc-200);` +
          `\n--color-card-fg: var(--color-zinc-950);`}
      />
    </PageArticle>
    <PageArticle title="Popup components color like drawer, dialog, dropdown.">
      <Highlight
        language={css}
        code={`--color-popup: var(--color-white);` +
          `\n--color-popup-fg: var(--color-zinc-950);`}
      />
    </PageArticle>
    <PageArticle title="Default border color.">
      <Highlight
        language={css}
        code={`--color-border: var(--color-zinc-300);`}
      />
    </PageArticle>
    <PageArticle title="Default spinner icon color.">
      <Highlight
        language={css}
        code={`--color-spinner: var(--color-cyan-500);`}
      />
    </PageArticle>
    <PageArticle title="Default border radius.">
      <Highlight
        language={css}
        code={`--radius: 0.25rem;` +
          `\n--radius-card: calc(var(--radius) * 1.5);`}
      />
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

  <PageSection id="4" title="lomer.css">
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
          `\n@import './lib/components/ui/lomer.css';`}
      />
      <CopyCSSCode
        title="lomer.css"
        code={`@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap');` +
          `\n` +
          `\n@variant dark (&:where(.dark, .dark *));` +
          `\n	` +
          `\n@theme {` +
          `\n\t--color-bg: var(--color-zinc-50);` +
          `\n\t--color-fg: var(--color-zinc-950);` +
          `\n` +
          `\n\t--color-primary: var(--color-cyan-600);` +
          `\n\t--color-primary-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-secondary: var(--color-zinc-200);` +
          `\n\t--color-secondary-fg: var(--color-zinc-950);` +
          `\n` +
          `\n\t--color-destructive: var(--color-red-500);` +
          `\n\t--color-destructive-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-muted: var(--color-zinc-600);` +
          `\n\t--color-muted-fg: var(--color-zinc-400);` +
          `\n` +
          `\n\t--color-disabled: var(--color-zinc-500);` +
          `\n\t--color-disabled-fg: var(--color-zinc-800);` +
          `\n` +
          `\n\t--color-input: var(--color-zinc-50);` +
          `\n\t--color-input-fg: var(--color-zinc-950);` +
          `\n` +
          `\n\t--color-card: var(--color-zinc-200);` +
          `\n\t--color-card-fg: var(--color-zinc-950);` +
          `\n` +
          `\n\t--color-popup: var(--color-white);` +
          `\n\t--color-popup-fg: var(--color-zinc-950);` +
          `\n` +
          `\n\t--color-border: var(--color-zinc-300);` +
          `\n` +
          `\n\t--color-spinner: var(--color-cyan-500);` +
          `\n` +
          `\n\t--radius: 0.25rem;` +
          `\n\t--radius-card: calc(var(--radius) * 1.5);` +
          `\n}` +
          `\n` +
          `\n.dark {` +
          `\n\t--color-bg: var(--color-zinc-950);` +
          `\n\t--color-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-primary: var(--color-cyan-500);` +
          `\n\t--color-primary-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-secondary: var(--color-zinc-800);` +
          `\n\t--color-secondary-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-destructive: var(--color-red-500);` +
          `\n\t--color-destructive-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-muted: var(--color-zinc-400);` +
          `\n\t--color-muted-fg: var(--color-zinc-600);` +
          `\n` +
          `\n\t--color-disabled: var(--color-zinc-600);` +
          `\n\t--color-disabled-fg: var(--color-zinc-400);` +
          `\n` +
          `\n\t--color-input: var(--color-zinc-950);` +
          `\n\t--color-input-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-card: var(--color-zinc-900);` +
          `\n\t--color-card-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-popup: var(--color-zinc-950);` +
          `\n\t--color-popup-fg: var(--color-zinc-50);` +
          `\n` +
          `\n\t--color-border: var(--color-zinc-700);` +
          `\n` +
          `\n\t--color-spinner: var(--color-cyan-400);` +
          `\n}` +
          `\n` +
          `\n@layer base {` +
          `\n\t* {` +
          `\n\t\t@apply border-border;` +
          `\n\t}` +
          `\n\tbody {` +
          `\n\t\t@apply bg-bg text-fg;` +
          `\n\t\tfont-family: 'Oxygen', Courier, sans-serif;` +
          `\n\t}` +
          `\n\t::selection {` +
          `\n\t\tbackground-color: var(--color-primary) !important;` +
          `\n\t\tcolor: var(--color-primary-fg) !important;` +
          `\n\t}` +
          `\n}`}
      />
    </PageArticle>
  </PageSection>
</PageWrapper>

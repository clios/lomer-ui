<script lang="ts">
  import Alert from '$lib/components/ui/alert.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import Icon from '@iconify/svelte';
  import Link from '$lib/components/ui/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';

  const tickler = [
    {
      id: '1',
      label: 'Overview'
    },
    {
      id: '2',
      label: 'Commands'
    },
    {
      id: '2.1',
      label: 'get',
      sub: true
    },
    {
      id: '2.2',
      label: 'craft',
      sub: true
    }
  ];
</script>

<svelte:head>
  <title>CLI . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="CLI"
  sub="Docs"
  info="Simple commands to build your components."
  prevLabel="Theming"
  prevLink="/docs/theming"
  nextLabel="Accordion"
  nextLink="/components/accordion"
>
  <!-- OVERVIEW -->
  <PageSection id="1" title="Overview">
    <PageArticle>
      <p>
        The lomer-ui command-line interface (CLI) is a toolkit designed to make
        copy-pasting components effortless and straightforward.
      </p>
      <p class="flex items-start gap-2">
        <Icon class="text-green-500" icon="mdi:check" width="24" /> Automatically
        detects and installs Tailwind CSS using the SvelteKit CLI if it's not already
        set up.
      </p>
      <p class="flex items-start gap-2">
        <Icon class="text-green-500" icon="mdi:check" width="24" /> Automatically
        detects and installs Tailwind Merge using npm if required.
      </p>
    </PageArticle>
  </PageSection>

  <!-- COMMANDS -->
  <PageSection id="2" title="Commands">
    <PageArticle id="2.1" title="get">
      <CopyCLI code="npx lomer-ui get [component/s]" />
      <p>Get base component.</p>
      <p class="font-mono">e.g. npx lomer-ui get button</p>
      <p class="font-mono">e.g. npx lomer-ui get button dropdown</p>
    </PageArticle>
    <PageArticle id="2.2" title="craft">
      <CopyCLI code="npx lomer-ui craft [component] [name]" />
      <p>Create a component and place it anywhere in your project.</p>
      <p>[component] - base lomer-ui component.</p>
      <p>[name] - name of your component.</p>
      <p class="font-mono">e.g. npx lomer-ui craft dropdown MyDropdown</p>
    </PageArticle>
  </PageSection>
</PageWrapper>

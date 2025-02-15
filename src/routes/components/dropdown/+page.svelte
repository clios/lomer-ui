<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Cli from '$site/cli.svelte';
  import ButtonComponentCode from '$lib/components/button-component-code.svelte';
  import Dropdown from '$lib/components/ui/dropdown.svelte';
  import OnThisPage from '$site/on-this-page.svelte';
  import OnThisPageBtn from '$site/on-this-page__btn.svelte';
  import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
  import PageFooter from '$lib/components/templates/page-footer.svelte';
  import PageHeader from '$lib/components/templates/page-header.svelte';
  import Preview from '$site/preview.svelte';
  import Title from '$site/title.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import Link from '$lib/components/ui/link.svelte';
  import AlertUsage from '../alert/alert-usage.svelte';
  import Screen from '$lib/components/screen.svelte';
  import DropdownUsage from './dropdown-usage.svelte';
  import DropdownUsageRaw from './dropdown-usage.svelte?raw';
  import DropdownPlacement from './dropdown-placement.svelte';
  import DropdownPlacementRaw from './dropdown-placement.svelte?raw';

  const tickler = [
    {
      id: '1',
      label: 'Installation'
    },
    {
      id: '2',
      label: 'Usage'
    },
    {
      id: '3',
      label: 'Placement'
    }
  ];
</script>

<svelte:head>
  <title>Dropdown . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Dropdown"
  sub="Component"
  info="A compact menu for quick options."
  prevLabel="Drawer"
  nextLabel="Field"
  prevLink="/components/drawer"
  nextLink="/components/field"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get dropdown`} />
      <p>Or just <Link href="/docs/crafting">craft</Link> it already.</p>
      <CopyCLI code={`npx lomer-ui craft dropdown`} />
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="justify-center">
        <DropdownUsage />
      </Screen>
      <CopySvelteCode code={DropdownUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- PLACEMENT -->
  <PageSection id="2" title="Placement">
    <PageArticle title="Preview">
      <Screen class="justify-between">
        <DropdownPlacement />
      </Screen>
      <CopySvelteCode code={DropdownPlacementRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>

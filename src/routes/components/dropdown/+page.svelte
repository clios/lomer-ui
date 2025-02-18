<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import DropdownPlacement from './dropdown-placement.svelte';
  import DropdownPlacementRaw from './dropdown-placement.svelte?raw';
  import DropdownSwitch from './dropdown-switch.svelte';
  import DropdownSwitchRaw from './dropdown-switch.svelte?raw';
  import DropdownUsage from './dropdown-usage.svelte';
  import DropdownUsageRaw from './dropdown-usage.svelte?raw';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';

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
    },
    {
      id: '4',
      label: 'Switch'
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
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/dropdown.svelte"
        target="_blank"
      >
        Source code
      </Link>
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
  <PageSection id="3" title="Placement">
    <PageArticle title="Preview">
      <Screen class="justify-between">
        <DropdownPlacement />
      </Screen>
      <CopySvelteCode code={DropdownPlacementRaw} />
    </PageArticle>
  </PageSection>

  <!-- SWITCH -->
  <PageSection id="4" title="Switch">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get dropdown-switch`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/dropdown-switch.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
    <PageArticle title="Preview">
      <Screen class="justify-center">
        <DropdownSwitch />
      </Screen>
      <CopySvelteCode code={DropdownSwitchRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>

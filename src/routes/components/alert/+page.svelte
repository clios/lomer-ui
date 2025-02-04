<script lang="ts">
  import Alert from '$lib/components/ui/alert.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import Cli from '$site//cli.svelte';
  import Code from '$site//code.svelte';
  import ButtonComponentCode from '$lib/components/button-component-code.svelte';
  import Icon from '@iconify/svelte';
  import OnThisPage from '$site/on-this-page.svelte';
  import OnThisPageBtn from '$site/on-this-page__btn.svelte';
  import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
  import PageFooter from '$lib/components/templates/page-footer.svelte';
  import PageHeader from '$lib/components/templates/page-header.svelte';
  import Preview from '$site/preview.svelte';
  import Prop from '$site/prop.svelte';
  import Screen from '$lib/components/screen.svelte';
  import SubTitle from '$site//sub-title.svelte';
  import Syntax from '$site/syntax.svelte';
  import TabsPreviewCode from '$site/tabs__preview-code.svelte';
  import Title from '$site//title.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import AlertUsage from './alert-usage.svelte';
  import AlertUsageRaw from './alert-usage.svelte?raw';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import AlertCustomIcon from './alert-custom-icon.svelte';
  import AlertCustomIconRaw from './alert-custom-icon.svelte?raw';
  import AlertClosable from './alert-closable.svelte';
  import AlertClosableRaw from './alert-closable.svelte?raw';

  let isClosableOpen = true;

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
      label: 'Examples'
    },
    {
      id: '3.1',
      label: 'Custom icon',
      sub: true
    },
    {
      id: '3.2',
      label: 'Closable',
      sub: true
    }
  ];
</script>

<svelte:head>
  <title>Alert . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Alert"
  sub="Component"
  info="Grabs attention and delivers important information."
  prevLabel="Accordion"
  prevLink="/components/accordion"
  nextLabel="Button"
  nextLink="/components/button"
>
  <PageSection id="1" title="Installation">
    <PageArticle>
      <CopyCLI code={`npx lomer-ui add alert`} />
      <ButtonComponentCode
        link="https://github.com/clios/lomer-ui/blob/main/src/lib/alert.svelte"
      />
    </PageArticle>
  </PageSection>
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen>
        <AlertUsage />
      </Screen>
      <CopySvelteCode code={AlertUsageRaw} />
    </PageArticle>
  </PageSection>
  <PageSection id="3" title="Examples">
    <PageArticle id="3.1" title="Custom icon">
      <Screen>
        <AlertCustomIcon />
      </Screen>
      <CopySvelteCode
        highlightedLines={[2, 6, 7, 8]}
        code={AlertCustomIconRaw}
      />
    </PageArticle>
    <PageArticle id="3.1" title="Closable">
      <Screen class="flex-col items-center gap-2">
        <AlertClosable />
      </Screen>
      <CopySvelteCode highlightedLines={[4]} code={AlertClosableRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>

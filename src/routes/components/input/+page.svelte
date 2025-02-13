<script lang="ts">
  import Cli from '$site/cli.svelte';
  import Code from '$site//code.svelte';
  import ButtonComponentCode from '$lib/components/button-component-code.svelte';
  import Input from '$lib/components/ui/input.svelte';
  import OnThisPage from '$site/on-this-page.svelte';
  import OnThisPageBtn from '$site/on-this-page__btn.svelte';
  import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
  import PageFooter from '$lib/components/templates/page-footer.svelte';
  import PageHeader from '$lib/components/templates/page-header.svelte';
  import Preview from '$site/preview.svelte';
  import Prop from '$site/prop.svelte';
  import SubTitle from '$site/sub-title.svelte';
  import Title from '$site/title.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import Link from '$lib/components/ui/link.svelte';
  import Screen from '$lib/components/screen.svelte';
  import InputUsage from './input-usage.svelte';
  import InputUsageRaw from './input-usage.svelte?raw';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import InputForm from './input-form.svelte';
  import InputFormRaw from './input-form.svelte?raw';

  let value = $state('');

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
      label: 'Form'
    }
  ];
</script>

<svelte:head>
  <title>Input . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Input"
  sub="Component"
  info="A clear and simple way to collect user data."
  prevLabel="Field"
  prevLink="/components/field"
  nextLabel="Link"
  nextLink="/components/link"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get input`} />
      <p>Or just <Link href="/docs/crafting">craft</Link> it already.</p>
      <CopyCLI code={`npx lomer-ui craft input`} />
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="w-min flex-col gap-4">
        <InputUsage />
      </Screen>
      <CopySvelteCode code={InputUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- FORM -->
  <PageSection id="3" title="Form">
    <PageArticle title="Preview">
      <Screen class="w-min flex-col gap-4">
        <InputForm />
      </Screen>
      <CopySvelteCode code={InputFormRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>

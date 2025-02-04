<script lang="ts">
  import Cli from '$site//cli.svelte';
  import Code from '$site//code.svelte';
  import ButtonComponentCode from '$lib/components/button-component-code.svelte';
  import HeroSection from './hero-section.svelte';
  import OnThisPage from '$site/on-this-page.svelte';
  import OnThisPageBtn from '$site/on-this-page__btn.svelte';
  import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
  import PageFooter from '$lib/components/templates/page-footer.svelte';
  import PageHeader from '$lib/components/templates/page-header.svelte';
  import Preview from '$site/preview.svelte';
  import Prop from '$site//prop.svelte';
  import SubTitle from '$site//sub-title.svelte';
  import Switch from '$lib/components/ui/switch.svelte';
  import Title from '$site//title.svelte';

  let value = false;
</script>

<svelte:head>
  <title>Switch . lomer-ui</title>
</svelte:head>

<OnThisPage>
  <OnThisPageBtn id="1" title="Installation" />
  <OnThisPageBtn id="2" title="Usage" />
  <OnThisPageBtn id="3" title="Examples" />
  <OnThisPageSubBtn id="3.1" title="Content" />
  <OnThisPageSubBtn id="3.2" title="Loading" />
  <OnThisPageSubBtn id="3.3" title="Disabled" />
  <OnThisPageSubBtn id="3.4" title="Read only" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
  <PageHeader
    title="Switch"
    sub="Component"
    info="Turn me on like a light switch."
  />
  <HeroSection />

  <!-- INSTALLATION -->
  <Title id="1">Installation</Title>
  <Cli code={`npx lomer-ui add switch`} />
  <ButtonComponentCode
    link="https://github.com/clios/lomer-ui/blob/main/src/lib/switch.svelte"
  />

  <!-- USAGE -->
  <Title id="2">Usage</Title>
  <p>Bruh this is just a fancy checkbox.</p>
  <p>Bind <Prop>value</Prop> property to reflect switch's value.</p>
  <Code
    code={`import Switch from '$lib/components/ui/switch.svelte'` +
      `\nlet value = $state(false)`}
    language="javascript"
  />
  <Code
    code={`<Switch bind:value>Turn me on!</Switch>` + `\n<p>Value: {value}</p>`}
  />
  <Preview class="flex-col items-center gap-4">
    <Switch bind:value>Turn me on!</Switch>
    <p>Value: {value}</p>
  </Preview>

  <!-- EXAMPLES -->
  <Title id="3">Examples</Title>

  <!-- CONTENT -->
  <SubTitle id="3.1">Content</SubTitle>
  <Code
    code={`<Switch>` +
      `\n\t<p class="font-semibold">Terms & Conditions</p>` +
      `\n\t<p class="text-zinc-600 dark:text-zinc-400">` +
      `\n\t\tI Agree even without reading the terms and conditions.` +
      `\n\t</p>` +
      `\n</Switch>`}
    language="xml"
  />
  <Preview>
    <Switch>
      <p class="font-semibold">Terms & Conditions</p>
      <p class="text-zinc-600 dark:text-zinc-400">
        I Agree even without reading the terms and conditions.
      </p>
    </Switch>
  </Preview>

  <!-- LOADING -->
  <SubTitle id="3.2">Loading</SubTitle>
  <p>Add <Prop>isLoading</Prop> property.</p>
  <Code code={`<Switch isLoading>` + `\n\t...` + `\n</Switch>`} />
  <Preview class="flex-wrap gap-8">
    <Switch isLoading>Turn me on!</Switch>
    <Switch value={true} isLoading>Turn me on!</Switch>
  </Preview>

  <!-- DISABLED -->
  <SubTitle id="3.3">Disabled</SubTitle>
  <p>Add <Prop>isDisabled</Prop> property.</p>
  <Code code={`<Switch isDisabled>` + `\n\t...` + `\n</Switch>`} />
  <Preview class="flex-wrap gap-8">
    <Switch isDisabled>Turn me on!</Switch>
    <Switch value={true} isDisabled>Turn me on!</Switch>
  </Preview>

  <!-- READ ONLY -->
  <SubTitle id="3.4">Read only</SubTitle>
  <p>Add <Prop>isReadOnly</Prop> property.</p>
  <Code code={`<Switch isReadOnly>` + `\n\t...` + `\n</Switch>`} />
  <Preview class="flex-wrap gap-8">
    <Switch isReadOnly>Turn me on!</Switch>
    <Switch value={true} isReadOnly>Turn me on!</Switch>
  </Preview>

  <PageFooter
    prevLabel="Select"
    prevLink="/components/select"
    nextLabel="Textarea"
    nextLink="/components/textarea"
  />
</div>

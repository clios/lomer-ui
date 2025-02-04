<script lang="ts">
  import Cli from '$site/cli.svelte';
  import Code from '$site//code.svelte';
  import ButtonComponentCode from '$lib/components/button-component-code.svelte';
  import HeroSection from './hero-section.svelte';
  import Link from '$lib/components/ui/link.svelte';
  import OnThisPage from '$site/on-this-page.svelte';
  import OnThisPageBtn from '$site/on-this-page__btn.svelte';
  import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
  import PageFooter from '$lib/components/templates/page-footer.svelte';
  import PageHeader from '$lib/components/templates/page-header.svelte';
  import Preview from '$site/preview.svelte';
  import Prop from '$site/prop.svelte';
  import SubTitle from '$site/sub-title.svelte';
  import Title from '$site/title.svelte';
  import Val from '$site/val.svelte';
</script>

<svelte:head>
  <title>Link . lomer-ui</title>
</svelte:head>

<OnThisPage>
  <OnThisPageBtn id="1" title="Installation" />
  <OnThisPageBtn id="2" title="Usage" />
  <OnThisPageBtn id="3" title="Examples" />
  <OnThisPageSubBtn id="3.1" title="No underline" />
  <OnThisPageSubBtn id="3.2" title="Caret" />
  <OnThisPageSubBtn id="3.3" title="Multiple" />
  <OnThisPageSubBtn id="3.4" title="Loading" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
  <PageHeader
    title="Link"
    sub="Component"
    info="Connects users to new destinations."
  />
  <HeroSection />

  <!-- INSTALLATION -->
  <Title id="1">Installation</Title>
  <Cli code={`npx lomer-ui add link`} />
  <ButtonComponentCode
    link="https://github.com/clios/lomer-ui/blob/main/src/lib/link.svelte"
  />

  <!-- USAGE -->
  <Title id="2">Usage</Title>
  <Code
    code={`import Link from '$lib/components/ui/link.svelte'`}
    language="javascript"
  />
  <Code code={`<Link href="/">lomer-ui</Link>`} />
  <Preview class="justify-center">
    <Link href="#">lomer-ui</Link>
  </Preview>

  <!-- EXAMPLES -->
  <Title id="3">Examples</Title>

  <!-- NO UNDERLINE -->
  <SubTitle id="3.1">No underline</SubTitle>
  <p>Add <Val>no-underline</Val> class.</p>
  <Code code={`<Link class="no-underline" href="#">lomer-ui</Link>`} />
  <Preview>
    <Link class="no-underline" href="#">lomer-ui</Link>
  </Preview>

  <!-- CARET -->
  <SubTitle id="3.2">Caret</SubTitle>
  <p>Add <Prop>caret</Prop> property.</p>
  <Code code={`<Link href="#" caret>lomer-ui</Link>`} />
  <Preview>
    <Link href="#" caret>lomer-ui</Link>
  </Preview>

  <!-- MULTIPLE -->
  <SubTitle id="3.3">Multiple</SubTitle>
  <Code
    code={`<div class="flex flex-col gap-2">` +
      `\n\t<Link href="#" class="no-underline" caret>lomer-ui</Link>` +
      `\n\t<Link href="#" class="no-underline" caret>lomer-ui</Link>` +
      `\n\t<Link href="#" class="no-underline" caret>lomer-ui</Link>` +
      `\n</div>`}
  />
  <Preview>
    <div class="flex flex-col gap-2">
      <Link href="#" class="no-underline" caret>lomer-ui</Link>
      <Link href="#" class="no-underline" caret>lomer-ui</Link>
      <Link href="#" class="no-underline" caret>lomer-ui</Link>
    </div>
  </Preview>

  <!-- LOADING -->
  <SubTitle id="3.4">Loading</SubTitle>
  <p>Add <Prop>isLoading</Prop> property.</p>
  <Code code={`<Link href="#" isLoading>lomer-ui</Link>`} />
  <Preview>
    <Link href="#" isLoading>lomer-ui</Link>
  </Preview>

  <PageFooter
    prevLabel="Input"
    prevLink="/components/input"
    nextLabel="Radio"
    nextLink="/components/radio"
  />
</div>

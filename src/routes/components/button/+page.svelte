<script lang="ts">
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site//prop.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Title from '$site//title.svelte';
	import Val from '$site//val.svelte';
</script>

<svelte:head>
	<title>Button . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Inverted" />
	<OnThisPageSubBtn id="3.2" title="Primary" />
	<OnThisPageSubBtn id="3.3" title="Secondary" />
	<OnThisPageSubBtn id="3.4" title="Destructive" />
	<OnThisPageSubBtn id="3.5" title="Outline" />
	<OnThisPageSubBtn id="3.6" title="Ghost" />
	<OnThisPageSubBtn id="3.7" title="With icon" />
	<OnThisPageSubBtn id="3.8" title="Icon only" />
	<OnThisPageSubBtn id="3.9" title="Sharp edge" />
	<OnThisPageSubBtn id="3.10" title="Full round edge" />
	<OnThisPageSubBtn id="3.11" title="Loading" />
	<OnThisPageSubBtn id="3.12" title="Disabled" />
	<OnThisPageSubBtn id="3.13" title="Small" />
	<OnThisPageSubBtn id="3.14" title="Customize" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Button"
		sub="Component"
		info="Click it and make actions happen."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add button`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/button.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<Code
		code={`import Button from '$lib/components/ui/button.svelte'`}
		language="javascript"
	/>
	<Code code={`<Button>Default</Button>`} />
	<Preview>
		<Button>Default</Button>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- INVERTED -->
	<SubTitle id="3.1">Inverted</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>inverted</Val> value.</p>
	<Code code={`<Button variant="inverted">Button</Button>`} />
	<Preview><Button variant="inverted">Button</Button></Preview>

	<!-- PRIMARY -->
	<SubTitle id="3.2">Primary</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>primary</Val> value.</p>
	<Code code={`<Button variant="primary">Button</Button>`} />
	<Preview><Button variant="primary">Button</Button></Preview>

	<!-- SECONDARY -->
	<SubTitle id="3.3">Secondary</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>secondary</Val> value.</p>
	<Code code={`<Button variant="secondary">Button</Button>`} />
	<Preview><Button variant="secondary">Button</Button></Preview>

	<!-- DESTRUCTIVE -->
	<SubTitle id="3.4">Destructive</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>destructive</Val> value.</p>
	<Code code={`<Button variant="destructive">Destructive</Button>`} />
	<Preview><Button variant="destructive">Destructive</Button></Preview>

	<!-- OUTLINE -->
	<SubTitle id="3.5">Outline</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>outline</Val> value.</p>
	<Code code={`<Button variant="outline">Outline</Button>`} />
	<Preview><Button variant="outline">Outline</Button></Preview>

	<!-- GHOST -->
	<SubTitle id="3.6">Ghost</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>ghost</Val> value.</p>
	<Code code={`<Button variant="ghost">Ghost</Button>`} />
	<Preview><Button variant="ghost">Ghost</Button></Preview>

	<!-- WITH ICON -->
	<SubTitle id="3.7">With Icon</SubTitle>
	<p>Insert any icon component or svg inside button.</p>
	<Code
		code={`<Button>` +
			`\n\t<svg` +
			`\n\t\txmlns="http://www.w3.org/2000/svg"` +
			`\n\t\twidth="24"` +
			`\n\t\theight="24"` +
			`\n\t\tviewBox="0 0 24 24"` +
			`\n\t>` +
			`\n\t\t<path` +
			`\n\t\t\tfill="currentColor"` +
			`\n\t\t\td="m16.56 5.44l-1.45 1.45A5.97 5.97 0 0 1 18 12a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.96 7.96 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2"` +
			`\n\t\t/>` +
			`\n\t</svg>` +
			`\n\tWith icon` +
			`\n</Button>`}
	/>
	<Preview>
		<Button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="m16.56 5.44l-1.45 1.45A5.97 5.97 0 0 1 18 12a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.96 7.96 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2"
				/>
			</svg>
			With icon
		</Button>
	</Preview>

	<!-- ICON ONLY -->
	<SubTitle id="3.8">Icon only</SubTitle>
	<p>
		Let's try icon component from <Link
			class="underline"
			target="_blank"
			href="https://icon-sets.iconify.design/"
			>Iconify
		</Link>.
	</p>
	<p>
		Insert any icon or svg inside button, then add <Prop>size</Prop> property with
		<Val>icon</Val> value.
	</p>
	<Code
		code={`<Button size="icon">` +
			`\n\t<Icon icon="mdi:power" width={24} height={24} />` +
			`\n</Button>`}
	/>
	<Preview>
		<Button size="icon">
			<Icon icon="mdi:power" width={24} height={24} />
		</Button>
	</Preview>

	<!-- SHARP EDGE -->
	<SubTitle id="3.9">Sharp edge</SubTitle>
	<p>Add <Prop>edge</Prop> property with <Val>sharp</Val> value.</p>
	<Code code={`<Button edge="sharp">Sharp edge</Button>`} />
	<Preview><Button edge="sharp">Sharp edge</Button></Preview>

	<!-- FULL ROUND EDGE -->
	<SubTitle id="3.10">Full round edge</SubTitle>
	<p>Add <Prop>edge</Prop> property with <Val>circle</Val> value.</p>
	<Code code={`<Button edge="circle">Full round edge</Button>`} />
	<Preview><Button edge="circle">Full round edge</Button></Preview>

	<!-- LOADING -->
	<SubTitle id="3.11">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code code={`<Button isLoading>Loading</Button>`} />
	<Preview><Button isLoading>Loading</Button></Preview>

	<!-- DISABLED -->
	<SubTitle id="3.12">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code code={`<Button isDisabled>Disabled</Button>`} />
	<Preview><Button isDisabled>Disabled</Button></Preview>

	<!-- SMALL -->
	<SubTitle id="3.13">Small</SubTitle>
	<p>Add <Prop>size</Prop> property with <Val>small</Val> value.</p>
	<Code code={`<Button size="small">Small</Button>`} />
	<Preview><Button size="small">Small</Button></Preview>

	<!-- SMALL -->
	<SubTitle id="3.14">Customize</SubTitle>
	<Code
		code={`<Button` +
			`\n\tclass="bg-bg border-green-500 text-green-500 dark:shadow dark:shadow-lime-500"` +
			`\n>` +
			`\n\tCustom` +
			`\n</Button>` +
			`\n<Button class="bg-bg text-fg shadow-lg ">Custom</Button>`}
	/>
	<Preview>
		<div class="flex w-full flex-wrap justify-center gap-4">
			<Button
				class="bg-bg border-green-500 text-green-500 dark:shadow dark:shadow-lime-500"
			>
				Custom
			</Button>
			<Button class="bg-bg text-fg shadow-lg ">Custom</Button>
		</div>
	</Preview>

	<PageFooter
		prevLabel="Alert"
		prevLink="/components/alert"
		nextLabel="Card Picker"
		nextLink="/components/card-picker"
	/>
</div>

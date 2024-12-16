<script lang="ts">
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Prop from '$site//prop.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Title from '$site//title.svelte';
	import Val from '$site//val.svelte';
	import Link from '$lib/link.svelte';
	import Icon from '@iconify/svelte';
	import HeroSection from './hero-section.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import Preview from '$site/preview.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Secondary" />
	<OnThisPageSubBtn id="3.2" title="Destructive" />
	<OnThisPageSubBtn id="3.3" title="Ghost" />
	<OnThisPageSubBtn id="3.4" title="Outline" />
	<OnThisPageSubBtn id="3.5" title="With icon" />
	<OnThisPageSubBtn id="3.6" title="Icon only" />
	<OnThisPageSubBtn id="3.7" title="Sharp edge" />
	<OnThisPageSubBtn id="3.8" title="Full round edge" />
	<OnThisPageSubBtn id="3.9" title="Loading" />
	<OnThisPageSubBtn id="3.10" title="Disabled" />
	<OnThisPageSubBtn id="3.11" title="Small" />
</OnThisPage>

<div class="flex flex-col gap-2 xl:pr-80">
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
	<Code code={`<Button>Primary</Button>`} language="xml" />
	<Preview>
		<Button>Primary</Button>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- SECONDARY -->
	<SubTitle id="3.1">Secondary</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>secondary</Val> value.</p>
	<Code code={`<Button variant="secondary">Button</Button>`} language="xml" />
	<Preview><Button variant="secondary">Button</Button></Preview>

	<!-- DESTRUCTIVE -->
	<SubTitle id="3.2">Destructive</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>destructive</Val> value.</p>
	<Code
		code={`<Button variant="destructive">Destructive</Button>`}
		language="xml"
	/>
	<Preview><Button variant="destructive">Destructive</Button></Preview>

	<!-- GHOST -->
	<SubTitle id="3.3">Ghost</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>ghost</Val> value.</p>
	<Code code={`<Button variant="ghost">Ghost</Button>`} language="xml" />
	<Preview><Button variant="ghost">Ghost</Button></Preview>

	<!-- OUTLINE -->
	<SubTitle id="3.4">Outline</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>outline</Val> value.</p>
	<Code code={`<Button variant="outline">Outline</Button>`} language="xml" />
	<Preview><Button variant="outline">Outline</Button></Preview>

	<!-- WITH ICON -->
	<SubTitle id="3.5">With Icon</SubTitle>
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
		language="xml"
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
	<SubTitle id="3.6">Icon only</SubTitle>
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
		language="xml"
	/>
	<Preview>
		<Button size="icon">
			<Icon icon="mdi:power" width={24} height={24} />
		</Button>
	</Preview>

	<!-- SHARP EDGE -->
	<SubTitle id="3.7">Sharp edge</SubTitle>
	<p>Add <Prop>edge</Prop> property with <Val>sharp</Val> value.</p>
	<Code code={`<Button edge="sharp">Sharp edge</Button>`} language="xml" />
	<Preview><Button edge="sharp">Sharp edge</Button></Preview>

	<!-- FULL ROUND EDGE -->
	<SubTitle id="3.8">Full round edge</SubTitle>
	<p>Add <Prop>edge</Prop> property with <Val>circle</Val> value.</p>
	<Code
		code={`<Button edge="circle">Full round edge</Button>`}
		language="xml"
	/>
	<Preview><Button edge="circle">Full round edge</Button></Preview>

	<!-- LOADING -->
	<SubTitle id="3.9">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code code={`<Button isLoading>Loading</Button>`} language="xml" />
	<Preview><Button isLoading>Loading</Button></Preview>

	<!-- DISABLED -->
	<SubTitle id="3.10">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code code={`<Button isDisabled>Disabled</Button>`} language="xml" />
	<Preview><Button isDisabled>Disabled</Button></Preview>

	<!-- SMALL -->
	<SubTitle id="3.11">Small</SubTitle>
	<p>Add <Prop>size</Prop> property with <Val>small</Val> value.</p>
	<Code code={`<Button size="small">Small</Button>`} language="xml" />
	<Preview><Button size="small">Small</Button></Preview>
</div>

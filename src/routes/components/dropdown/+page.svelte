<script lang="ts">
	import Accordion from '$lib/components/ui/accordion.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Cli from '$site/cli.svelte';
	import Code from '$site/code.svelte';
	import ButtonComponentCode from '$lib/components/button-component-code.svelte';
	import Dropdown from '$lib/components/ui/dropdown.svelte';
	import Field from '$lib/components/ui/field.svelte';
	import Icon from '@iconify/svelte';
	import Input from '$lib/components/ui/input.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$lib/components/templates/page-footer.svelte';
	import PageHeader from '$lib/components/templates/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import Radio from '$lib/components/ui/radio.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Switch from '$lib/components/ui/switch.svelte';
	import Title from '$site/title.svelte';

	let value = $state('');
	let isOpen = $state(false);
	let isOpenWithButton = $state(false);
	let isOpenWithCheckbox = $state(false);
	let isOpenWithRadio = $state(false);
	let isOpenWithSwitch = $state(false);
	let isOpenWithAccordion = $state(false);
	let isOpenWithInput = $state(false);
	let isOpenWithForm = $state(false);
	let isOpenSub = $state(false);
</script>

<svelte:head>
	<title>Dropdown . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="With button" />
	<OnThisPageSubBtn id="3.2" title="With checkbox" />
	<OnThisPageSubBtn id="3.3" title="With radio" />
	<OnThisPageSubBtn id="3.4" title="With switch" />
	<OnThisPageSubBtn id="3.5" title="With header" />
	<OnThisPageSubBtn id="3.6" title="Read only" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Dropdown"
		sub="Component"
		info="A compact menu for quick options."
	/>

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add dropdown`} />
	<ButtonComponentCode
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/dropdown.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<p>Specify width and height using tailwind.</p>
	<p>Bind <Prop>isOpen</Prop> property to reflect drawer's open state.</p>
	<Code
		code={`import Dropdown from '$lib/components/ui/dropdown.svelte'` +
			`\nlet isOpen = $state(false)`}
		language="javascript"
	/>
	<Code
		code={`<Button onclick={() => (isOpen = !isOpen)}>` +
			`\n\tMenu` +
			`\n</Button>` +
			`\n<Dropdown bind:isOpen>Content here</Dropdown>`}
	/>
	<Preview>
		<Button onclick={() => (isOpen = true)}>Menu</Button>
		<Dropdown bind:isOpen>Content here</Dropdown>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<SubTitle id="3.1">With button</SubTitle>
	<Code code={``} />
	<Preview>
		<Button onclick={() => (isOpenWithButton = true)}>Menu</Button>
		<Dropdown bind:isOpen={isOpenWithButton}>
			<Button>Simply use button</Button>
			<Button>Magically works</Button>
			<Button><Icon icon="ri:svelte-fill" /> With Icon</Button>
			<Button isDisabled>Disabled item</Button>
		</Dropdown>
	</Preview>

	<SubTitle id="3.1">With checkbox</SubTitle>
	<Code code={``} />
	<Preview>
		<Button onclick={() => (isOpenWithCheckbox = true)}>Menu</Button>
		<Dropdown bind:isOpen={isOpenWithCheckbox}>
			<p class="text-muted border-b px-4 pb-1 text-sm">We simply use</p>
			<Checkbox>Checkbox true</Checkbox>
			<Checkbox>Checkbox false</Checkbox>
			<Checkbox isLoading>Can display loading</Checkbox>
			<Checkbox isDisabled>Also disabled</Checkbox>
		</Dropdown>
	</Preview>

	<SubTitle id="3.1">With radio</SubTitle>
	<Code code={``} />
	<Preview>
		<Button onclick={() => (isOpenWithRadio = true)}>Menu</Button>
		<Dropdown bind:isOpen={isOpenWithRadio}>
			<p class="text-muted border-b px-4 pb-1 text-sm">We simply use</p>
			<Button>Simply use button</Button>
			<Checkbox>Checkbox true</Checkbox>
			<Radio bind:value radioValue="free">Free</Radio>
			<Radio bind:value radioValue="pro">Pro</Radio>
			<Radio bind:value radioValue="enterprise">Enterprise</Radio>
			<Radio isDisabled bind:value radioValue="enterprisex">Enterprise</Radio>
			<Radio isLoading bind:value radioValue="enterprisez">Enterprise</Radio>
		</Dropdown>
	</Preview>

	<SubTitle id="3.1">With switch</SubTitle>
	<Code code={``} />
	<Preview>
		<Button onclick={() => (isOpenWithSwitch = true)}>Menu</Button>
		<Dropdown bind:isOpen={isOpenWithSwitch}>
			<p class="text-muted border-b px-4 pb-1 text-sm">We simply use</p>
			<Button>Simply use button</Button>
			<Switch>Drak Mode</Switch>
			<Checkbox>Checkbox true</Checkbox>
		</Dropdown>
	</Preview>

	<SubTitle id="3.1">With accordion</SubTitle>
	<Code code={``} />
	<Preview>
		<Button onclick={() => (isOpenWithAccordion = true)}>Menu</Button>
		<Dropdown bind:isOpen={isOpenWithAccordion}>
			<p class="text-muted border-b px-4 pb-1 text-sm">We simply use</p>
			<Button>Simply use button</Button>
			<Accordion title="Accordion">Content here</Accordion>
			<Button>Simply use button</Button>
		</Dropdown>
	</Preview>

	<SubTitle id="3.1">With input</SubTitle>
	<Code code={``} />
	<Preview>
		<Button onclick={() => (isOpenWithInput = true)}>Menu</Button>
		<Dropdown bind:isOpen={isOpenWithInput}>
			<p class="text-muted border-b px-4 pb-1 text-sm">We simply use</p>
			<Input placeholder="Quick search" />
			<Button>Simply use button</Button>
			<Button>Simply use button</Button>
		</Dropdown>
	</Preview>

	<SubTitle id="3.1">With form</SubTitle>
	<Code code={``} />
	<Preview>
		<Button onclick={() => (isOpenWithForm = true)}>Menu</Button>
		<Dropdown bind:isOpen={isOpenWithForm}>
			<form class="flex flex-col gap-4 p-4">
				<Field label="Email">
					<Input value="NoobMaster69" />
				</Field>
				<Field label="Password">
					<Input value="NoobMaster69" type="password" />
				</Field>
				<Button>Sign In</Button>
			</form>
		</Dropdown>
	</Preview>

	<PageFooter
		prevLabel="Drawer"
		nextLabel="Field"
		prevLink="/components/drawer"
		nextLink="/components/field"
	/>
</div>

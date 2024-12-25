<script lang="ts">
	import Button from '$lib/button.svelte';
	import CardPicker from '$lib/card-picker.svelte';
	import Checkbox from '$lib/checkbox.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import Field from '$lib/field.svelte';
	import HeroSection from './hero-section.svelte';
	import Icon from '@iconify/svelte';
	import Input from '$lib/input.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import Radio from '$lib/radio.svelte';
	import Select from '$lib/select.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Switch from '$lib/switch.svelte';
	import Textarea from '$lib/textarea.svelte';
	import Title from '$site//title.svelte';
	import Val from '$site/val.svelte';

	let radioValue = $state('');
	let cardPickerValue = $state('');
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Issue" />
	<OnThisPageSubBtn id="3.2" title="Helper" />
	<OnThisPageSubBtn id="3.3" title="Required" />
	<OnThisPageSubBtn id="3.4" title="Optional" />
	<OnThisPageSubBtn id="3.5" title="Horizontal" />
	<OnThisPageSubBtn id="3.6" title="With button" />
	<OnThisPageSubBtn id="3.7" title="With card picker" />
	<OnThisPageSubBtn id="3.8" title="With checkbox" />
	<OnThisPageSubBtn id="3.9" title="With input" />
	<OnThisPageSubBtn id="3.10" title="With radio" />
	<OnThisPageSubBtn id="3.11" title="With select" />
	<OnThisPageSubBtn id="3.12" title="With switch" />
	<OnThisPageSubBtn id="3.13" title="With textarea" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Field"
		sub="Component"
		info="A versatile space for input or display of data."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add field`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/field.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<Code
		code={`import Field from '$lib/components/ui/field.svelte'`}
		language="javascript"
	/>
	<Code
		code={`<Field label="Label here" helper="Helper here" issue="Issue here">` +
			`\n\tContent here...` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Label here" helper="Helper here" issue="Issue here">
			Content here...
		</Field>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- ISSUE -->
	<SubTitle id="3.1">Issue</SubTitle>
	<p>Use the <Prop>issue</Prop> property to display field issue.</p>
	<Code
		code={`<Field label="Username" issue="Already in used.">` +
			`\n\t<Input value="NoobMaster69" />` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Username" issue="Already in used.">
			<Input value="NoobMaster69" />
		</Field>
	</Preview>

	<!-- HELPER -->
	<SubTitle id="3.2">Helper</SubTitle>
	<p>Use the <Prop>helper</Prop> property to display more info.</p>
	<Code
		code={`<Field label="Password" helper="Make sure you don't forget it.">` +
			`\n\t<Input type="password" />` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Password" helper="Make sure you don't forget it.">
			<Input type="password" />
		</Field>
	</Preview>

	<!-- REQUIRED -->
	<SubTitle id="3.3">Required</SubTitle>
	<p>Add <Prop>required</Prop> property.</p>
	<Code
		code={`<Field label="Password" required>` +
			`\n\t<Input type="password" />` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Password" required>
			<Input type="password" />
		</Field>
	</Preview>

	<!-- OPTIONAL -->
	<SubTitle id="3.4">Optional</SubTitle>
	<p>Add <Prop>optional</Prop> property.</p>
	<Code
		code={`<Field label="Email" optional>` +
			`\n\t<Input type="email" />` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Email" optional>
			<Input type="email" />
		</Field>
	</Preview>

	<!-- HORIZONTAL -->
	<SubTitle id="3.5">Horizontal</SubTitle>
	<p>Add <Prop>orientation</Prop> property with <Val>horizontal</Val> value.</p>
	<Code
		code={`<Field label="Email" orientation="horizontal">` +
			`\n\t<Input type="email" />` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Email" orientation="horizontal">
			<Input type="email" />
		</Field>
	</Preview>

	<!-- WITH BUTTON -->
	<SubTitle id="3.6">With button</SubTitle>
	<p>Like a toolbar panel.</p>
	<Code
		code={`<Field label="View">` +
			`\n\t<div class="flex gap-2">` +
			`\n\t\t<Button variant="secondary" edge="sharp" size="icon">` +
			`\n\t\t\t<Icon icon="material-symbols:dashboard" width={24} />` +
			`\n\t\t</Button>` +
			`\n\t\t<Button variant="secondary" edge="sharp" size="icon">` +
			`\n\t\t\t<Icon icon="material-symbols:lists" width={24} />` +
			`\n\t\t</Button>` +
			`\n\t\t<Button variant="secondary" edge="sharp" size="icon">` +
			`\n\t\t\t<Icon icon="material-symbols:map" width={24} />` +
			`\n\t\t</Button>` +
			`\n\t\t<Button variant="secondary" edge="sharp" size="icon">` +
			`\n\t\t\t<Icon icon="material-symbols:lab-profile" width={24} />` +
			`\n\t\t</Button>` +
			`\n\t</div>` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="View">
			<div class="flex gap-2">
				<Button variant="secondary" edge="sharp" size="icon">
					<Icon icon="material-symbols:dashboard" width={24} />
				</Button>
				<Button variant="secondary" edge="sharp" size="icon">
					<Icon icon="material-symbols:lists" width={24} />
				</Button>
				<Button variant="secondary" edge="sharp" size="icon">
					<Icon icon="material-symbols:map" width={24} />
				</Button>
				<Button variant="secondary" edge="sharp" size="icon">
					<Icon icon="material-symbols:lab-profile" width={24} />
				</Button>
			</div>
		</Field>
	</Preview>

	<p>Using <Prop>orientation</Prop><Val>="horizontal"</Val></p>
	<Preview>
		<Field label="View:" orientation="horizontal">
			<div class="flex gap-2">
				<Button variant="secondary" edge="sharp" size="icon">
					<Icon icon="material-symbols:dashboard" width={24} />
				</Button>
				<Button variant="secondary" edge="sharp" size="icon">
					<Icon icon="material-symbols:lists" width={24} />
				</Button>
				<Button variant="secondary" edge="sharp" size="icon">
					<Icon icon="material-symbols:map" width={24} />
				</Button>
				<Button variant="secondary" edge="sharp" size="icon">
					<Icon icon="material-symbols:lab-profile" width={24} />
				</Button>
			</div>
		</Field>
	</Preview>

	<!-- WITH CARD PICKER -->
	<SubTitle id="3.7">With card picker</SubTitle>
	<Code
		code={`<Field label="Choose your clan">` +
			`\n\t<div class="flex gap-2">` +
			`\n\t\t<CardPicker bind:value cardValue="dragon">` +
			`\n\t\t\t<Icon icon="game-icons:spiked-dragon-head" width={100} height={100} />` +
			`\n\t\t\t<p>Dragon</p>` +
			`\n\t\t</CardPicker>` +
			`\n\t\t<CardPicker bind:value cardValue="serpent">` +
			`\n\t\t\t<Icon icon="game-icons:snake-tongue" width={100} height={100} />` +
			`\n\t\t\t<p>Serpent</p>` +
			`\n\t\t</CardPicker>` +
			`\n\t\t<CardPicker bind:value cardValue="wolf">` +
			`\n\t\t\t<Icon icon="game-icons:wolf-head" width={100} height={100} />` +
			`\n\t\t\t<p>Wolf</p>` +
			`\n\t\t</CardPicker>` +
			`\n\t\t<CardPicker bind:value cardValue="lotus">` +
			`\n\t\t\t<Icon icon="game-icons:lotus" width={100} height={100} />` +
			`\n\t\t\t<p>Lotus</p>` +
			`\n\t\t</CardPicker>` +
			`\n\t</div>` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Choose your clan">
			<div class="flex gap-2">
				<CardPicker bind:value={cardPickerValue} cardValue="dragon">
					<Icon icon="game-icons:spiked-dragon-head" width={80} height={80} />
					<p>Dragon</p>
				</CardPicker>
				<CardPicker bind:value={cardPickerValue} cardValue="serpent">
					<Icon icon="game-icons:snake-tongue" width={80} height={80} />
					<p>Serpent</p>
				</CardPicker>
				<CardPicker bind:value={cardPickerValue} cardValue="wolf">
					<Icon icon="game-icons:wolf-head" width={80} height={80} />
					<p>Wolf</p>
				</CardPicker>
				<CardPicker bind:value={cardPickerValue} cardValue="lotus">
					<Icon icon="game-icons:lotus" width={80} height={80} />
					<p>Lotus</p>
				</CardPicker>
			</div>
		</Field>
	</Preview>

	<!-- WITH CHECKBOX -->
	<SubTitle id="3.8">With checkbox</SubTitle>
	<Code
		code={`<Field label="Do you like svelte?">` +
			`\n\t<Checkbox>Yes, I like it.</Checkbox>` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Do you like svelte?">
			<Checkbox>Yes, I like it.</Checkbox>
		</Field>
	</Preview>
	<p>Using <Prop>orientation</Prop><Val>="horizontal"</Val></p>
	<Preview>
		<Field label="Do you like svelte?" orientation="horizontal">
			<Checkbox>Yes, I like it.</Checkbox>
		</Field>
	</Preview>

	<!-- WITH INPUT -->
	<SubTitle id="3.9">With input</SubTitle>
	<Code code={`<Field label="Full name">` + `\n\t<Input />` + `\n</Field>`} />
	<Preview>
		<Field label="Full name">
			<Input />
		</Field>
	</Preview>
	<p>Using <Prop>orientation</Prop><Val>="horizontal"</Val></p>
	<Preview>
		<Field label="Full name:" orientation="horizontal">
			<Input />
		</Field>
	</Preview>

	<!-- WITH RADIO -->
	<SubTitle id="3.10">With radio</SubTitle>
	<Code
		code={`<Field label="Choose your plan">` +
			`\n\t<Radio bind:value name="plan" radioValue="free">Free</Radio>` +
			`\n\t<Radio bind:value name="plan" radioValue="pro">Pro</Radio>` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Choose your plan">
			<Radio bind:value={radioValue} name="plan" radioValue="free">Free</Radio>
			<Radio bind:value={radioValue} name="plan" radioValue="pro">Pro</Radio>
		</Field>
	</Preview>
	<p>Using <Prop>orientation</Prop><Val>="horizontal"</Val></p>
	<Preview>
		<Field label="Choose your plan:" orientation="horizontal">
			<Radio bind:value={radioValue} name="plan" radioValue="free">Free</Radio>
			<Radio bind:value={radioValue} name="plan" radioValue="pro">Pro</Radio>
		</Field>
	</Preview>
	<p>
		Using <Prop>orientation</Prop><Val>="horizontal"</Val> with
		<Val>flex items-center gap-8</Val> classes.
	</p>
	<Code
		code={`<Field label="Choose your plan:" orientation="horizontal">` +
			`\n\t<div class="flex items-center gap-8">` +
			`\n\t\t<Radio bind:value name="plan" radioValue="free">Free</Radio>` +
			`\n\t\t<Radio bind:value name="plan" radioValue="pro">Pro</Radio>` +
			`\n\t</div>` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Choose your plan:" orientation="horizontal">
			<div class="flex items-center gap-8">
				<Radio bind:value={radioValue} name="plan" radioValue="free">Free</Radio
				>
				<Radio bind:value={radioValue} name="plan" radioValue="pro">Pro</Radio>
			</div>
		</Field>
	</Preview>

	<!-- WITH SELECT -->
	<SubTitle id="3.11">With select</SubTitle>
	<Code
		code={`<Field label="Sex">` +
			`\n\t<Select placeholder="Please select">` +
			`\n\t\t<option value="male">Male</option>` +
			`\n\t\t<option value="female">Female</option>` +
			`\n\t</Select>` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Sex">
			<Select placeholder="Please select">
				<option value="male">Male</option>
				<option value="female">Female</option>
			</Select>
		</Field>
	</Preview>
	<p>Using <Prop>orientation</Prop><Val>="horizontal"</Val></p>
	<Preview>
		<Field label="Sex:" orientation="horizontal">
			<Select placeholder="Please select">
				<option value="male">Male</option>
				<option value="female">Female</option>
			</Select>
		</Field>
	</Preview>

	<!-- WITH SWITCH -->
	<SubTitle id="3.12">With switch</SubTitle>
	<Code
		code={`<Field label="Deploy">` +
			`\n\t<Switch>Alpha</Switch>` +
			`\n\t<Switch>Bravo</Switch>` +
			`\n\t<Switch>Charlie</Switch>` +
			`\n\t<Switch>Delta</Switch>` +
			`\n</Field>`}
	/>
	<Preview>
		<Field label="Deploy">
			<Switch>Alpha</Switch>
			<Switch>Bravo</Switch>
			<Switch>Charlie</Switch>
			<Switch>Delta</Switch>
		</Field>
	</Preview>
	<p>Using <Prop>orientation</Prop><Val>="horizontal"</Val></p>
	<Preview>
		<Field label="Deploy:" orientation="horizontal">
			<Switch>Alpha</Switch>
			<Switch>Bravo</Switch>
			<Switch>Charlie</Switch>
			<Switch>Delta</Switch>
		</Field>
	</Preview>

	<!-- WITH TEXTAREA -->
	<SubTitle id="3.13">With textarea</SubTitle>
	<Code
		code={`<Field label="Full name">` + `\n\t<Textarea />` + `\n</Field>`}
	/>
	<Preview>
		<Field label="Full name">
			<Textarea />
		</Field>
	</Preview>
	<p>Using <Prop>orientation</Prop><Val>="horizontal"</Val></p>
	<Preview>
		<Field label="Full name:" orientation="horizontal">
			<Textarea />
		</Field>
	</Preview>

	<PageFooter
		prevLabel="Drawer"
		prevLink="/components/drawer"
		nextLabel="Input"
		nextLink="/components/input"
	/>
</div>

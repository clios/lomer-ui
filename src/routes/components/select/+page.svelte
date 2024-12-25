<script lang="ts">
	import Cli from '$site/cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import Select from '$lib/select.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';

	let value = $state('');
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Loading" />
	<OnThisPageSubBtn id="3.2" title="Disabled" />
	<OnThisPageSubBtn id="3.3" title="Read only" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Select"
		sub="Component"
		info="Pick an option from a dropdown menu."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add select`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/select.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect select's value.</p>
	<Code
		code={`import Select from '$lib/components/ui/select.svelte'` +
			`\nlet value = $state('');`}
		language="javascript"
	/>
	<Code
		code={`<div class="flex flex-col items-center gap-4">` +
			`\n\t<Select bind:value placeholder="Select a game">` +
			`\n\t\t<optgroup label="PC">` +
			`\n\t\t\t<option value="dota 2">Dota 2</option>` +
			`\n\t\t\t<option value="manor lords">Manor Lords</option>` +
			`\n\t\t</optgroup>` +
			`\n\t\t<optgroup label="Mobile">` +
			`\n\t\t\t<option value="world of tanks blitz">World of Tanks Blitz</option>` +
			`\n\t\t\t<option value="wuthering waves">Wuthering Waves</option>` +
			`\n\t\t</optgroup>` +
			`\n\t</Select>` +
			`\n\t<p>Value: {value || 'N/A'}</p>` +
			`\n</div>`}
	/>
	<Preview class="flex-col items-center gap-4">
		<div class="flex flex-col items-center gap-4">
			<Select bind:value placeholder="Select a game">
				<optgroup label="PC">
					<option value="dota 2">Dota 2</option>
					<option value="manor lords">Manor Lords</option>
				</optgroup>
				<optgroup label="Mobile">
					<option value="world of tanks blitz">World of Tanks Blitz</option>
					<option value="wuthering waves">Wuthering Waves</option>
				</optgroup>
			</Select>
			<p>Value: {value || 'N/A'}</p>
		</div>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- LOADING -->
	<SubTitle id="3.1">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code code={`<Select isLoading>` + `\n\t...` + `\n</Select>`} />
	<Preview>
		<Select isLoading value="dota 2" class="w-min">
			<optgroup label="PC">
				<option value="dota 2">Dota 2</option>
				<option value="manor lords">Manor Lords</option>
			</optgroup>
			<optgroup label="Mobile">
				<option value="world of tanks blitz">World of Tanks Blitz</option>
				<option value="wuthering waves">Wuthering Waves</option>
			</optgroup>
		</Select>
	</Preview>

	<!-- DISABLED -->
	<SubTitle id="3.2">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code code={`<Select isDisabled>` + `\n\t...` + `\n</Select>`} />
	<Preview>
		<Select isDisabled value="dota 2" class="w-min">
			<optgroup label="PC">
				<option value="dota 2">Dota 2</option>
				<option value="manor lords">Manor Lords</option>
			</optgroup>
			<optgroup label="Mobile">
				<option value="world of tanks blitz">World of Tanks Blitz</option>
				<option value="wuthering waves">Wuthering Waves</option>
			</optgroup>
		</Select>
	</Preview>

	<!-- READ ONLY -->
	<SubTitle id="3.3">Read only</SubTitle>
	<p>Add <Prop>isReadyOnly</Prop> property.</p>
	<Code code={`<Select isReadOnly>` + `\n\t...` + `\n</Select>`} />
	<Preview>
		<Select isReadOnly value="dota 2" class="w-min">
			<optgroup label="PC">
				<option value="dota 2">Dota 2</option>
				<option value="manor lords">Manor Lords</option>
			</optgroup>
			<optgroup label="Mobile">
				<option value="world of tanks blitz">World of Tanks Blitz</option>
				<option value="wuthering waves">Wuthering Waves</option>
			</optgroup>
		</Select>
	</Preview>

	<PageFooter
		prevLabel="Scroll Area"
		prevLink="/components/scroll-area"
		nextLabel="Switch"
		nextLink="/components/switch"
	/>
</div>

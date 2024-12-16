<script>
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import Component from '$site/component.svelte';
	import File from '$site/file.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import StepperPanel from '$site/stepper-panel.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';
	import Val from '$site/val.svelte';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Usage" />
	<OnThisPageSubBtn id="1.1" title="Configure Tailwind CSS" />
	<OnThisPageSubBtn id="1.2" title="Install mode-watcher" />
	<OnThisPageSubBtn id="1.3" title="Add ModeWatcher component" />
	<OnThisPageSubBtn id="1.4" title="That's it!" />
</OnThisPage>

<div class="flex flex-col gap-2 xl:pr-80">
	<PageHeader
		title="Dark Mode"
		sub="Docs"
		info="Adding dark mode to your site using mode-watcher."
	/>

	<Title id="1">Usage</Title>
	<SubTitle id="1.1">
		<span class="font-mono">1.</span> Configure Tailwind CSS
	</SubTitle>
	<StepperPanel>
		<p>
			Add <Prop>darkMode</Prop> property with <Val>selector</Val> value to <File
				>tailwind.config.ts</File
			>.
		</p>
		<Code
			code={`export default {` +
				`\n\t...` +
				`\n\tdarkMode: 'selector'` +
				`\n} satisfies Config;`}
			language="javascript"
		/>
		<p>
			See <Link
				class="underline"
				target="_blank"
				href="https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
			>
				Tailwind CSS Dark Mode
			</Link> for details.
		</p>
	</StepperPanel>

	<SubTitle id="1.2">
		<span class="font-mono">2.</span> Install mode-watcher
	</SubTitle>
	<StepperPanel>
		<Cli code="npm install mode-watcher" />
		<p>
			See <Link
				class="underline"
				target="_blank"
				href="https://mode-watcher.svecosystem.com"
			>
				Mode Watcher
			</Link> for details.
		</p>
	</StepperPanel>

	<SubTitle id="1.3">
		<span class="font-mono">3.</span> Add ModeWatcher component
	</SubTitle>
	<StepperPanel>
		<p>
			Add the <Component code="<ModeWatcher />" />
			component to your root
			<File>+layout.svelte</File> file.
		</p>
		<Code
			code={`import { ModeWatcher } from "mode-watcher";`}
			language="javascript"
		/>
		<Code code={`<ModeWatcher />\n<slot />`} language="xml" />
	</StepperPanel>

	<SubTitle id="1.4">
		<span class="font-mono">4.</span> That's it!
	</SubTitle>
	<StepperPanel final>
		<p>Use the toggleMode function and $mode to toggle:</p>
		<Code
			code={`import Button from '$lib/components/ui/button.svelte';` +
				`\nimport Icon from '@iconify/svelte';` +
				`\nimport { toggleMode, mode } from 'mode-watcher';`}
			language="javascript"
		/>
		<Code
			code={`<Button size="icon" onclick={toggleMode}>` +
				`\n\t{#if $mode === 'light'}` +
				`\n\t\t<Icon \n\t\t\ticon="line-md:moon-to-sunny-outline-loop-transition" \n\t\t\twidth={24} \n\t\t\theight={24} \n\t\t/>` +
				`\n\t{:else}` +
				`\n\t\t<Icon \n\t\t\ticon="line-md:sunny-outline-to-moon-alt-loop-transition" \n\t\t\twidth={24} \n\t\t\theight={24} \n\t\t/>` +
				`\n\t{/if}` +
				`\n</Button>`}
			language="xml"
		/>
		<Preview>
			<Button size="icon" onclick={toggleMode}>
				{#if $mode === 'light'}
					<Icon
						icon="line-md:moon-to-sunny-outline-loop-transition"
						width={24}
						height={24}
					/>
				{:else}
					<Icon
						icon="line-md:sunny-outline-to-moon-alt-loop-transition"
						width={24}
						height={24}
					/>
				{/if}
			</Button>
		</Preview>
	</StepperPanel>
</div>

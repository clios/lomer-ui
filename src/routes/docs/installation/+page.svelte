<script>
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import StepperPanel from '$site/stepper-panel.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';
	import Prop from '$site/prop.svelte';
	import Val from '$site/val.svelte';
	import File from '$site/file.svelte';
	import Alert from '$lib/alert.svelte';
	import Accordion from '$lib/accordion.svelte';
	import Icon from '@iconify/svelte';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Using the CLI Tool" />
	<OnThisPageSubBtn id="1.1" title="Congifure Tailwind CSS" />
	<OnThisPageSubBtn id="1.2" title="Add components" />
	<OnThisPageBtn id="2" title="Installing the Package" />
	<OnThisPageSubBtn id="2.1" title="Congifure Tailwind CSS" />
	<OnThisPageSubBtn id="2.2" title="Install lomer-ui" />
</OnThisPage>

<div class="flex flex-col gap-4 xl:pr-80">
	<PageHeader
		title="Installation"
		sub="Docs"
		info="Getting started with lomer-ui is simple!"
	/>

	<p class="mt-8 text-xl text-zinc-500 dark:text-zinc-400">
		Which Option Should You <span
			class="font-semibold text-zinc-950 underline dark:text-white">Choose</span
		>?
	</p>
	<p class="text-xl text-zinc-500 dark:text-zinc-400">
		- Use the <span class="font-semibold text-zinc-950 dark:text-white"
			>CLI</span
		>
		if you want to
		<span class="font-semibold text-zinc-950 dark:text-white"
			>customize the code</span
		> and have more control over your components.
	</p>
	<p class="text-xl text-zinc-500 dark:text-zinc-400">
		- Install the <span class="font-semibold text-zinc-950 dark:text-white"
			>package</span
		>
		if you prefer a straightforward,
		<span class="font-semibold text-zinc-950 dark:text-white">ready-to-use</span
		> solution.
	</p>

	<Alert class="mt-8 flex gap-2">
		<Icon icon="mdi:terminal-line" width={24} />
		<div class="w-full">
			<p class="mb-2 font-semibold">Using tailwindcss v3?</p>
			<p class="mb-2">Run this command to upgrade v3 to v4.</p>
			<Cli code={`npx @tailwindcss/upgrade@next`} />
			<p class="mt-2">
				See <Link
					class="underline"
					target="_blank"
					href="https://tailwindcss.com/docs/v4-beta#upgrading-from-v3"
				>
					Tailwind CSS Upgrading from v3
				</Link> for more details.
			</p>
		</div>
	</Alert>

	<Title id="1">Using the CLI Tool</Title>

	<SubTitle id="1.1">
		<span class="font-mono">1.</span> Configure Tailwind CSS
	</SubTitle>
	<StepperPanel>
		<p class="mt-4">Use a selector-based strategy.</p>
		<Code code={`@variant dark (&:where(.dark, .dark *));`} language="less" />
		<p>
			See <Link
				class="underline"
				target="_blank"
				href="https://tailwindcss.com/docs/v4-beta#configuring-dark-mode"
			>
				Tailwind CSS v4 Dark Mode
			</Link> for more details.
		</p>
	</StepperPanel>

	<SubTitle id="1.2">
		<span class="font-mono">2.</span> That's it.
	</SubTitle>
	<StepperPanel final>
		<p>
			Start adding <Link class="underline" href="/components/accordion">
				components
			</Link>.
		</p>
		<Cli code="npx lomer-ui add" />
		<p class="mt-2">Or you can also specify a component.</p>
		<Cli code="npx lomer-ui add button" />
		<Code
			code={`import Button from '$lib/components/ui/button.svelte'`}
			language="javascript"
		/>
		<Code code={`<Button>Button</Button>`} language="xml" />
		<Preview>
			<Button>Button</Button>
		</Preview>
	</StepperPanel>

	<Title id="2">Installing the Package</Title>
	<SubTitle id="2.1">
		<span class="font-mono">1.</span> Configure Tailwind CSS
	</SubTitle>
	<StepperPanel>
		<p class="mt-4">Use a selector-based strategy.</p>
		<p>Add additional content sources</p>
		<Code
			code={`@variant dark (&:where(.dark, .dark *));` +
				`\n@source "../node_modules/lomer-ui/dist";`}
			language="less"
		/>
		<p>
			See <Link
				class="underline"
				target="_blank"
				href="https://tailwindcss.com/docs/v4-beta#configuring-dark-mode"
			>
				Tailwind CSS v4 Dark Mode
			</Link> for more details.
		</p>
		<p>
			See <Link
				class="underline"
				target="_blank"
				href="https://tailwindcss.com/docs/v4-beta#adding-content-sources"
			>
				Tailwind CSS v4 Adding Content Source
			</Link> for more details.
		</p>
	</StepperPanel>

	<SubTitle id="2.2">
		<span class="font-mono">2.</span> Install lomer-ui
	</SubTitle>
	<StepperPanel final>
		<p>Run this command:</p>
		<Cli code="npm install lomer-ui" />
		<p class="mt-2">Import the components in your project.</p>
		<Code code={`import { Button } from 'lomer-ui'`} language="javascript" />
		<Code code={`<Button>Button</Button>`} language="xml" />
		<Preview>
			<Button>Button</Button>
		</Preview>
	</StepperPanel>
</div>

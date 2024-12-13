<script>
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import PageHeader from '$site//page-header.svelte';
	import { scrollToId } from '$site/helper.ts';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import Title from '$site/title.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import StepperPanel from '$site/stepper-panel.svelte';
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/link.svelte';
	import Prop from '$site/prop.svelte';
	import File from '$site/file.svelte';
	import Preview from '$site/preview.svelte';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Setup your project" />
	<OnThisPageSubBtn id="1.1" title="Initialize lomer-ui" />
	<OnThisPageSubBtn id="1.2" title="Configure Tailwind CSS" />
	<OnThisPageSubBtn id="1.3" title="That's it!" />
</OnThisPage>

<div class="flex flex-col gap-4 pr-80">
	<PageHeader
		title="Installation"
		sub="Docs"
		info="Just follow these simple steps."
	/>

	<Title id="1">Setup your project</Title>

	<SubTitle id="1.1">
		<span class="font-mono">1.</span> Initialize lomer-ui
	</SubTitle>
	<StepperPanel>
		<Cli code="npx lomer-ui init" />
		<p>
			This command creates a new
			<Link
				class="underline"
				target="_blank"
				href="https://svelte.dev/docs/kit/introduction"
				>SvelteKit
			</Link> project if needed, installs
			<Link class="underline" target="_blank" href="https://tailwindcss.com/">
				Tailwind CSS
			</Link> if not present, and adds <Link
				class="underline"
				target="_blank"
				href="https://github.com/dcastil/tailwind-merge"
			>
				tailwind-merge
			</Link> and <Link
				class="underline"
				target="_blank"
				href="https://mode-watcher.svecosystem.com/"
			>
				mode-watcher
			</Link>.
		</p>
	</StepperPanel>

	<SubTitle id="1.2">
		<span class="font-mono">2.</span> Configure Tailwind CSS
	</SubTitle>
	<StepperPanel>
		<p>
			Add <Prop>safelist</Prop> and <Prop>darkMode</Prop> to <File
				>tailwind.config.ts</File
			>.
		</p>
		<Code
			code={`import type { Config } from 'tailwindcss';` +
				`\n\nexport default {` +
				`\n\t...` +
				`\n\tsafelist: ['dark'],` +
				`\n\tdarkMode: ['class']` +
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

	<SubTitle id="1.3">
		<span class="font-mono">3.</span> That's it!
	</SubTitle>

	<StepperPanel final>
		<p>
			You can now add <Link
				class="underline"
				target="_blank"
				href="/components/accordion"
			>
				components
			</Link>, like this button.
		</p>
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
</div>

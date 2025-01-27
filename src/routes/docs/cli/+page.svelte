<script lang="ts">
	import Alert from '$lib/components/ui/alert.svelte';
	import CopyCLI from '$lib/components/copy-c-l-i.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/components/ui/link.svelte';
	import PageArticle from '$lib/components/page-article.svelte';
	import PageSection from '$lib/components/page-section.svelte';
	import PageWrapper from '$lib/components/page-wrapper.svelte';

	const tickler = [
		{
			id: '1',
			label: 'Overview'
		},
		{
			id: '1.1',
			label: 'Usage',
			sub: true
		},
		{
			id: '2',
			label: 'Commands'
		},
		{
			id: '2.1',
			label: 'init',
			sub: true
		},
		{
			id: '2.2',
			label: 'add',
			sub: true
		},
		{
			id: '2.3',
			label: 'update',
			sub: true
		},
		{
			id: '2.4',
			label: 'prep',
			sub: true
		}
	];
</script>

<svelte:head>
	<title>CLI . lomer-ui</title>
</svelte:head>

<PageWrapper
	{tickler}
	title="CLI"
	sub="Docs"
	info="Quickly startup your components."
	prevLabel="Theming"
	prevLink="/docs/theming"
	nextLabel="Accordion"
	nextLink="/components/accordion"
>
	<PageSection id="1" title="Overview">
		<PageArticle>
			<p>
				The lomer-ui command-line interface (CLI) is a toolkit designed to make
				copy-pasting components effortless and straightforward.
			</p>
			<p class="flex items-start gap-2">
				<Icon class="text-green-500" icon="mdi:check" width="24" /> Automatically
				detects and installs Tailwind CSS using the SvelteKit CLI if it's not already
				set up.
			</p>
			<p class="flex items-start gap-2">
				<Icon class="text-green-500" icon="mdi:check" width="24" /> Automatically
				detects and installs Tailwind Merge using npm if required.
			</p>
		</PageArticle>
		<PageArticle id="1.1" title="Usage">
			<p>The simplest way to run lomer-ui is using npx:</p>
			<CopyCLI code="npx lomer-ui <command> <args>" />
		</PageArticle>
	</PageSection>
	<PageSection id="2" title="Commands">
		<PageArticle id="2.1" title="init">
			<CopyCLI code="npx lomer-ui init" />
			<p>Check or install tailwindcss and tailwind-merge.</p>
			<p>Creates ui folder inside components folder.</p>
			<p>Automatically imports lomer.css in the app.css file.</p>
		</PageArticle>
		<PageArticle id="2.2" title="add">
			<CopyCLI code="npx lomer-ui add" />
			<p class="mb-4">Quickly select and add multiple components.</p>
			<CopyCLI code="npx lomer-ui add [component]" />
			<p>Add specific component.</p>
		</PageArticle>
		<PageArticle id="2.3" title="update">
			<CopyCLI code="npx lomer-ui update" />
			<p>Update all existing lomer-ui components.</p>
			<Alert>
				<p>This command will overwrite your lomer-ui components.</p>
			</Alert>
		</PageArticle>
		<PageArticle id="2.4" title="prep">
			<CopyCLI code="npx lomer-ui prep [component]" />
			<p>Prepares a single file component using lomer-ui.</p>
			<p>Ready to use. Ready to customize. Built-on-top of lomer-ui.</p>
		</PageArticle>
	</PageSection>
</PageWrapper>

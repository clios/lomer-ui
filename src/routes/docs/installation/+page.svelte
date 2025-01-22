<script>
	import Alert from '$lib/components/ui/alert.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import CommandLine from '$lib/components/templates/command-line.svelte';
	import PageWrapper from '$lib/components/templates/page-wrapper.svelte';
	import PageSection from '$lib/components/templates/page-section.svelte';
	import PageArticle from '$lib/components/templates/page-article.svelte';
	import CopyCommandLineContent from '$lib/components/templates/copy-command-line-content.svelte';

	const tickler = [
		{
			id: '1',
			label: 'Setup'
		},
		{
			id: '1.1',
			label: 'Install',
			sub: true
		},
		{
			id: '1.2',
			label: 'Icons (Optional)',
			sub: true
		}
	];
</script>

<svelte:head>
	<title>Installation . lomer-ui</title>
</svelte:head>

<PageWrapper
	{tickler}
	title="Installation"
	sub="Docs"
	info="Getting started with lomer-ui is simple!"
	prevLabel="Introduction"
	prevLink="/docs/introduction"
	nextLabel="Dark Mode"
	nextLink="/docs/dark-mode"
>
	<PageSection>
		<Alert class="gap-2 border" title="Using tailwindcss v3?">
			<p class="text-muted mb-2">Run this command to upgrade v3 to v4.</p>
			<CopyCommandLineContent code={`npx @tailwindcss/upgrade@next`} />
			<p class="text-muted mt-2">
				See <Link
					class="underline"
					target="_blank"
					href="https://tailwindcss.com/docs/v4-beta#upgrading-from-v3"
				>
					Tailwind CSS Upgrading from v3
				</Link> for more details.
			</p>
		</Alert>
	</PageSection>

	<PageSection id="1" title="Setup">
		<PageArticle id="1.1" title="Install">
			<p>Via npx.</p>
			<CopyCommandLineContent code="npx lomer-ui init" />
			<p>This will check and install automatically dependencies needed.</p>
			<p>Also, tailwind-merge will be installed as your package dependency.</p>
		</PageArticle>

		<PageArticle id="1.2" title="Icons (Optional)">
			<CopyCommandLineContent code="npm install --save-dev @iconify/svelte" />
			<p>
				See more at
				<Link
					href="https://iconify.design/docs/icon-components/svelte/"
					target="_blank">Iconify for Svelte</Link
				>
			</p>
		</PageArticle>
	</PageSection>
</PageWrapper>

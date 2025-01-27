<script>
	import CopyCLI from '$lib/components/copy-c-l-i.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import PageArticle from '$lib/components/page-article.svelte';
	import PageSection from '$lib/components/page-section.svelte';
	import PageWrapper from '$lib/components/page-wrapper.svelte';

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
	<PageSection id="1" title="Setup">
		<PageArticle id="1.1" title="Install">
			<p>Via npx.</p>
			<CopyCLI code="npx lomer-ui init" />
			<p>This will check and install automatically dependencies needed.</p>
			<p>Also, tailwind-merge will be installed as your package dependency.</p>
		</PageArticle>

		<PageArticle id="1.2" title="Icons (Optional)">
			<CopyCLI code="npm install --save-dev @iconify/svelte" />
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

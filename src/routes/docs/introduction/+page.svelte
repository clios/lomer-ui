<script>
	import CopyCommandLineContent from '$lib/components/templates/copy-command-line-content.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/components/core/link.svelte';
	import PageArticle from '$lib/components/templates/page-article.svelte';
	import PageSection from '$lib/components/templates/page-section.svelte';
	import PageWrapper from '$lib/components/templates/page-wrapper.svelte';
	import HighlightText from '$lib/components/templates/highlight-text.svelte';
	import Accordion from '$lib/components/core/accordion.svelte';
	import SvelteSyntax from '$lib/components/templates/svelte-syntax.svelte';
	import CopySvelteContent from '$lib/components/templates/copy-svelte-content.svelte';

	const tickler = [
		{
			id: '1',
			label: 'Structure'
		},
		{
			id: '1.1',
			label: 'components/ui',
			sub: true
		},
		{
			id: '1.2',
			label: 'components/snippets',
			sub: true
		},
		{
			id: '1.3',
			label: 'components/templates',
			sub: true
		},
		{
			id: '2',
			label: 'FAQ'
		},
		{
			id: '2.1',
			label: 'Can I contribute?',
			sub: true
		},
		{
			id: '2.2',
			label: 'Is it production-ready?',
			sub: true
		},
		{
			id: '2.3',
			label: 'How can I support you?',
			sub: true
		},
		{
			id: '2.4',
			label: 'Can I use it in my projects?',
			sub: true
		}
	];
</script>

<svelte:head>
	<title>Introduction . lomer-ui</title>
</svelte:head>

<PageWrapper
	{tickler}
	title="Introduction"
	sub="Docs"
	info="Standalone components for your next project."
	nextLabel="Installation"
	prevLabel="Home"
	nextLink="/docs/installation"
	prevLink="/"
>
	<PageSection class="gap-4 lg:text-xl">
		<div class="flex flex-col gap-1">
			<p>Free and open-source collection of standalone components.</p>
			<p>Styled with Tailwind CSS for simplicity and customization.</p>
			<p>
				<span> Quickly add components to your project.</span>
				<span class="text-muted">Copy and paste.</span>
			</p>
			<p>Minimal dependency, making them easy to customize.</p>
		</div>
	</PageSection>

	<PageSection title="Components">
		<PageArticle title="Small, reusable, and ready to go.">
			<p>
				Basic building blocks of your app. These are the simplest pieces that
				you can use anywhere. They’re standalone, easy to use, and don’t need
				anything extra to work.
			</p>
			<p class="text-fg mt-4 border-b">Example</p>
			<p>Simple button.</p>
			<CopyCommandLineContent code="npx lomer-ui add button" />
			<p>
				A ready-to-customize button will be generated in
				<HighlightText>./src/lib/components/ui</HighlightText> named <HighlightText
					>button.svelte</HighlightText
				>.
			</p>
			<SvelteSyntax
				highlightedLines={[8, 10, 12]}
				code={`<script\ lang="ts">` +
					`\n\timport { twMerge } from 'tailwind-merge';` +
					`\n\t...` +
					`\n</script>` +
					`\n` +
					`\n<button` +
					`\n\tclass={twMerge(` +
					`\n\t\t'tailwindcss_here', // base` +
					`\n\t\t// You can update base design to match your branding...` +
					`\n\t\tvariant === 'default' && 'tailwindcss_here',` +
					`\n\t\t// You can add more variants here...` +
					`\n\t\tsize === 'default' && 'tailwindcss_here'` +
					`\n\t\t// You can add more sizes here...` +
					`\n\t)}` +
					`\n>` +
					`\n\t{#if isLoading}` +
					`\n\t\t{@render IconLoading()}` +
					`\n\t{/if}` +
					`\n\n\t{@render children?.()}` +
					`\n</button>` +
					`\n` +
					`\n<!-- ICON LOADING -->` +
					`\n{#snippet IconLoading()}` +
					`\n\t<!-- SVG ELEMENT HERE -->` +
					`\n{/snippet}`}
			/>
		</PageArticle>
	</PageSection>

	<PageSection id="2" title="FAQ">
		<PageArticle id="2.1" title="Can I contribute?">
			<p>Yes, you can! Feel free to open a pull request.</p>
			<p>Reach me out for suggestions or feedback.</p>
			<p>I’d love to hear from you!</p>
		</PageArticle>

		<PageArticle id="2.2" title="Is it production-ready?">
			<p>Yes, it is! I’ve been using it in my projects.</p>
			<p>However, please note that it’s still in its early stage.</p>
			<p>I’m constantly improving it.</p>
		</PageArticle>

		<PageArticle id="2.3" title="How can I support you?">
			<p>
				Feel free to star the <Link
					href="https://github.com/clios/lomer-ui"
					target="_blank">repo</Link
				> on GitHub.
			</p>
			<p>You can also share it with your friends or on social media.</p>
			<p>I’d really appreciate it!</p>
		</PageArticle>

		<PageArticle id="2.4" title="Can I use it in my projects?">
			<p>Feel free to use it in your personal or commercial projects.</p>
		</PageArticle>
	</PageSection>
</PageWrapper>

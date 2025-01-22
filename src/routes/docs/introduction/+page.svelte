<script>
	import CopyCommandLineContent from '$lib/components/templates/copy-command-line-content.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/components/ui/link.svelte';
	import PageArticle from '$lib/components/templates/page-article.svelte';
	import PageSection from '$lib/components/templates/page-section.svelte';
	import PageWrapper from '$lib/components/templates/page-wrapper.svelte';
	import HighlightText from '$lib/components/templates/highlight-text.svelte';
	import Accordion from '$lib/components/ui/accordion.svelte';
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

	<PageSection id="1" title="Components">
		<PageArticle id="1.1" title="User Interface (UI)">
			<p>A single-file reusable component.</p>
			<CopyCommandLineContent code="npx lomer-ui add [component]" />

			<div class="bg-popup flex flex-col gap-2 rounded p-2">
				<p>e.g. Simple button</p>
				<CopyCommandLineContent code="npx lomer-ui add button" />
				<p>
					A ready-to-customize button will be generated in
					<HighlightText>./src/lib/components/ui</HighlightText> named <HighlightText
						>button.svelte</HighlightText
					>.
				</p>
			</div>
		</PageArticle>

		<PageArticle id="1.2" title="Snippets">
			<p>Create modular components with limitless options.</p>

			<p class="mt-4 border-b">Example</p>
			<p>You need a specific button to sign out.</p>
			<CopyCommandLineContent code="npx lomer-ui snippet button" />
			<p>
				A ready-to-customize component will be generated in
				<HighlightText>./src/lib/components/snippets</HighlightText> named <HighlightText
					>button.svelte</HighlightText
				>.
			</p>
			<CopySvelteContent
				title="button.svelte"
				code={`<script\ lang='ts'>
	import Button from '$lib/components/ui/button.svelte';

	function onclick() {
		// do your thing...
	}
</script>

<Button {onclick}>Button</Button>`}
			/>
			<p>
				Rename it. For this sample, <HighlightText
					>button-sign-out.svelte</HighlightText
				>. Then customize it.
			</p>
			<CopySvelteContent
				title="button-sign-out.svelte"
				highlightedLines={[2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15]}
				code={`<script\ lang='ts'>
	import Button from '$lib/components/ui/button.svelte';
	import { signOut } from '$lib/api/auth';
	import { goto } from '$app/navigation';

	async function onclick() {
		try {
			await signOut()
			goto('/');
		} catch (error) {
			console.log('Unexpected error, try again later');
		} 
	}
</script>

<Button {onclick}>Sign out</Button>`}
			/>
			<p>Use it.</p>
			<SvelteSyntax
				code={`<script\ lang='ts'>
	import ButtonSignOut from '$lib/components/snippets/button-sign-out.svelte'
</script>

<ButtonSignOut />`}
			/>

			<div class="flex">
				<Icon class="min-h-6 min-w-6 text-amber-500" icon="mdi:bulb" />
				<p>
					Tip: After creating a snippet, <span class="text-fg"
						>rename and customize</span
					> the code as needed.
				</p>
			</div>

			<p>
				You can find additional snippets by exploring the component
				documentation or browsing the <Link
					href="https://github.com/clios/lomer-ui/tree/main/src/lib/components/snippets"
					target="_blank">snippets reference</Link
				>.
			</p>
		</PageArticle>
		<PageArticle id="1.3" title="Templates">
			<p>Create a predefined structure or layout.</p>
			<p class="mt-4 border-b">Example</p>
			<p>
				You have an icon buttons for toolbar that the size is small, variant is
				ghost, and no outline.
			</p>
			<SvelteSyntax
				code={`<script\ lang='ts'>
	import Button from '$lib/components/ui/button.svelte'
</script>

<div class="flex">
	<Button class="outline-none" variant="ghost" size="small">
		<Icon icon="mdi:plus" />
	</Button>
	<Button class="outline-none" variant="ghost" size="small">
		<Icon icon="mdi:lead-pencil" />
	</Button>
	<Button class="outline-none" variant="ghost" size="small">
		<Icon icon="mdi:delete" />
	</Button>
</div>`}
			/>
			<p>So, run this command:</p>
			<CopyCommandLineContent code="npx lomer-ui template button" />
			<p>
				A ready-to-customize component will be generated in
				<HighlightText>./src/lib/components/templates</HighlightText> named <HighlightText
					>button.svelte</HighlightText
				>.
			</p>
			<CopySvelteContent
				title="button.svelte"
				code={`<script\ lang='ts'>
	import Button from '$lib/components/ui/button.svelte';
	import type { Snippet } from 'svelte';

	type Props = { children ?: Snippet }

	let { children, ...props } = $props()
</script>

<Button {...props}>
	{@render children?.()}
</Button>`}
			/>
			<p>Then, rename it to toolbar-button.svelte and customize it.</p>
			<CopySvelteContent
				title="toolbar-button.svelte"
				highlightedLines={[2, 4, 6, 9, 10]}
				code={`<script\ lang='ts'>
	import Button from '$lib/components/ui/button.svelte';
	import Icon from '@iconify/svelte';

	type Props = { icon ?: string }

	let { icon } = $props()
</script>

<Button class="outline-none" variant="ghost" size="small">
	<Icon {icon} />
</Button>`}
			/>
			<p>Now you can use it like this.</p>
			<SvelteSyntax
				code={`<script\ lang='ts'>
	import ToolbarButton from '$lib/components/templates/toolbar-button.svelte'
</script>

<div class="flex">
	<ToolbarButton icon="mdi:plus" />
	<ToolbarButton icon="mdi:lead-pencil" />
	<ToolbarButton icon="mdi:delete" />
</div>`}
			/>
			<p>
				You can find additional templates by exploring the component
				documentation or browsing the <Link
					href="https://github.com/clios/lomer-ui/tree/main/src/lib/components/templates"
					target="_blank">templates reference</Link
				>.
			</p>
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

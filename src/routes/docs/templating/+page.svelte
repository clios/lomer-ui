<script>
	import Alert from '$lib/components/core/alert.svelte';
	import CopyCLI from '$lib/components/copy-c-l-i.svelte';
	import CopySvelteContent from '$lib/components/templates/copy-svelte-content.svelte';
	import HighlightText from '$lib/components/highlight-text.svelte';
	import PageArticle from '$lib/components/page-article.svelte';
	import PageSection from '$lib/components/page-section.svelte';
	import PageWrapper from '$lib/components/page-wrapper.svelte';
	import SvelteSyntax from '$lib/components/templates/svelte-syntax.svelte';

	const tickler = [
		{
			id: '1',
			label: 'Usage'
		},
		{
			id: '1.1',
			label: 'CLI',
			sub: true
		},
		{
			id: '1.2',
			label: 'Naming Convention',
			sub: true
		},
		{
			id: '2',
			label: 'Example'
		},
		{
			id: '2.1',
			label: 'Creating a template',
			sub: true
		},
		{
			id: '2.2',
			label: 'Customization',
			sub: true
		},
		{
			id: '2.3',
			label: "That's it!",
			sub: true
		}
	];
</script>

<svelte:head>
	<title>Templating . lomer-ui</title>
</svelte:head>

<PageWrapper
	{tickler}
	title="Templating"
	sub="Docs"
	info="Create component templates to expand your library."
	nextLabel="Installation"
	prevLabel="Home"
	nextLink="/docs/installation"
	prevLink="/"
>
	<PageSection>
		<Alert>
			<p>
				This tool can be used to abstract out complex components. <br /> But
				please, do <strong>not</strong> prematurely decouple your components.
			</p>
		</Alert>
	</PageSection>

	<PageSection id="1" title="Usage">
		<PageArticle id="1.1" title="CLI">
			<CopyCLI code="npx lomer-ui template [component]" />
			<p>The CLI will ask you to name the component.</p>
			<p>Customize it. Use it. That's it.</p>
		</PageArticle>
		<PageArticle id="1.2" title="Naming Convention (Optional)">
			<p>Start with the component name, followed by its purpose.</p>
			<p>e.g. button-icon.svelte</p>
		</PageArticle>
	</PageSection>

	<PageSection id="2" title="Example">
		<PageArticle>
			<p>You created a simple toolbar containing icon buttons.</p>
			<SvelteSyntax
				code={`<script\ lang='ts'>
	import Button from '$lib/components/core/button.svelte'
</script>

<!-- TOOLBAR -->
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
			<p>What a mess. Let's clean it up.</p>
		</PageArticle>

		<PageArticle id="2.1" title="Creating a template">
			<CopyCLI code="npx lomer-ui template button" />
			<p>
				For this example we name it <HighlightText>button-icon</HighlightText>.
			</p>
			<p class="mt-4">
				Your ready-to-customize component will be generated in
				<HighlightText>./src/lib/components/templates</HighlightText>.
			</p>
			<CopySvelteContent
				title="button-icon.svelte"
				code={`<script\ lang="ts">
	import Button from '$lib/components/core/button.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = {
		// Additional props here
	} & HTMLButtonAttributes;

	let { children, ...props }: Props = $props();
</script>

<Button {...props}>
	{@render children?.()}
</Button>
`}
			/>
		</PageArticle>

		<PageArticle id="2.2" title="Customization">
			<CopySvelteContent
				title="button-icon.svelte"
				highlightedLines={[2, 4, 6, 9, 10]}
				code={`<script\ lang='ts'>
	import Button from '$lib/components/core/button.svelte';
	import Icon from '@iconify/svelte';

	type Props = { icon ?: string }

	let { icon, ...props } = $props()
</script>

<Button class="outline-none" variant="ghost" size="icon" {...props}>
	<Icon {icon} />
</Button>`}
			/>
		</PageArticle>

		<PageArticle id="2.3" title="That's it!">
			<p>Use it to toolbar or any components that needs icon button.</p>
			<SvelteSyntax
				code={`<script\ lang='ts'>
	import ButtonIcon from '$lib/components/templates/button-icon.svelte'
</script>

<!-- TOOLBAR -->
<div class="flex">
	<ButtonIcon icon="mdi:plus" />
	<ButtonIcon icon="mdi:lead-pencil" />
	<ButtonIcon icon="mdi:delete" />
</div>`}
			/>
		</PageArticle>
	</PageSection>
</PageWrapper>

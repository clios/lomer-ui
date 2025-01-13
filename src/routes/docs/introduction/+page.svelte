<script>
	import Accordion from '$lib/accordion.svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Title from '$site/title.svelte';
	import { twMerge } from 'tailwind-merge';
	import Syntax from '$site/syntax.svelte';
</script>

<svelte:head>
	<title>Introduction . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="FAQ" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Introduction"
		sub="Docs"
		info="Standalone components for your next project."
	/>

	<div
		class={twMerge(
			'flex flex-col gap-1', // positioning and layout
			'text-zinc-500 dark:text-zinc-400' // text
		)}
	>
		<p>
			Focusing on a better <span
				class="font-semibold text-zinc-950 dark:text-white"
				>development experience</span
			>.
		</p>
		<p>
			Providing a simple, good-looking design and easy-to-customize component
			code.
		</p>
		<p class="mt-4">
			Using your components should be straightforward and intuitive.
		</p>
		<p class="mt-4 font-semibold text-zinc-950 dark:text-zinc-50">
			What do I mean by "straightforward and intuitive"?
		</p>
		<p>For example, let's say you need to use a Dialog Component.</p>
		<p>Your code might looks like this:</p>
		<Syntax
			code={`<script\>
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<Dialog.Root>
	<Dialog.Trigger>Open</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Title here</Dialog.Title>
			<Dialog.Description>
				Content here...
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>`}
		/>
		<p class="mt-4">
			Using Svelte offers a
			<span class="font-semibold text-zinc-950 dark:text-zinc-50">
				cleaner and more concise approach
			</span>.
		</p>
		<Syntax
			code={`<script\>
	import Button from '$lib/components/ui/button.svelte'
	import Dialog from '$lib/components/ui/dialog.svelte'

	let isOpen = $state(false)
</script>

<Button onclick={() => (isOpen = true)}>Open dialog</Button>
<Dialog title="Title here" bind:isOpen>
	Content here...
</Dialog>`}
		/>
		<p class="mt-4">What if you need to tweak it further?</p>
		<p>Your code. Your rules. Customize It.</p>
	</div>

	<Title id="1">FAQ</Title>
	<Accordion id="2.1" title="Can I contribute?">
		<p>Yes, you can! Feel free to open a pull request.</p>
		<p>Reach me out for suggestions or feedback.</p>
		<p>I’d love to hear from you!</p>
	</Accordion>

	<Accordion id="2.2" title="Is it production-ready?">
		<p>Yes, it is! I’ve been using it in my projects.</p>
		<p>However, please note that it’s still in its early stage.</p>
		<p>I’m constantly improving it.</p>
	</Accordion>

	<Accordion id="2.3" title="How can I support you?">
		<p>
			Feel free to star the <Link
				href="https://github.com/clios/lomer-ui"
				target="_blank">repo</Link
			> on GitHub.
		</p>
		<p>You can also share it with your friends or on social media.</p>
		<p>I’d really appreciate it!</p>
	</Accordion>

	<Accordion id="2.4" title="Can I use it in my projects?">
		<p>Yes, you can!</p>
		<p>Feel free to use it in your personal or commercial projects.</p>
	</Accordion>

	<PageFooter nextLabel="Installation" nextLink="/docs/installation" />
</div>

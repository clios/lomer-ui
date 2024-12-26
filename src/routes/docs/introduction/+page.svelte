<script>
	import Accordion from '$lib/accordion.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Title from '$site/title.svelte';
	import { twMerge } from 'tailwind-merge';
	import Code from '$site/code.svelte';
</script>

<svelte:head>
	<title>Introduction . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Concept" />
	<OnThisPageBtn id="2" title="FAQ" />
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
			'text-lg text-zinc-500 dark:text-zinc-400' // text
		)}
	>
		<p>
			Focusing on a better <span
				class="font-semibold text-zinc-950 dark:text-white"
				>development experience</span
			>.
		</p>
		<p>
			With a single command, lomer-ui provides a simple, good-looking design and
			easy-to-customize component code.
		</p>
		<p>
			Using YOUR components (copy-pasted code) should be straightforward and
			intuitive.
		</p>
		<p class="mt-4 font-semibold text-zinc-950 dark:text-zinc-50">
			What do I mean by "straightforward and intuitive"?
		</p>
		<p>For example, let's say you need to use a Dialog Component.</p>
		<p>Your code might looks like this:</p>
		<div class="text-sm">
			<Code
				class="mb-2"
				code="import * as Dialog from '$lib/components/ui/dialog';"
				language="javascript"
			/>
			<Code
				code={'<Dialog.Root>' +
					'\n\t<Dialog.Trigger>Open</Dialog.Trigger>' +
					'\n\t<Dialog.Content>' +
					'\n\t\t<Dialog.Header>' +
					'\n\t\t\t<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>' +
					'\n\t\t\t<Dialog.Description>' +
					'\n\t\t\t\tThis action cannot be undone. This will permanently delete your account' +
					'\n\t\t\t\tand remove your data from our servers.' +
					'\n\t\t\t</Dialog.Description>' +
					'\n\t\t</Dialog.Header>' +
					'\n\t</Dialog.Content>' +
					'\n</Dialog.Root>'}
			/>
		</div>
		<p class="mt-4">
			Using Svelte offers a
			<span class="font-semibold text-zinc-950 dark:text-zinc-50">
				cleaner and more concise approach
			</span>, so I want my code to look like this:
		</p>
		<div class="text-sm">
			<Code
				class="mb-2"
				code={`import { Button, Dialog } from '$lib/components/ui'` +
					`\nlet isOpen = $state(false)`}
				language="javascript"
			/>
			<Code
				code={`<Button onclick={() => (isOpen = true)}>Open dialog</Button>` +
					`\n<Dialog title="Are you sure absolutely sure?" bind:isOpen>` +
					`\n\tThis action cannot be undone. This will permanently delete your account` +
					`\n\tand remove your data from our servers.` +
					`\n</Dialog>`}
			/>
		</div>
		<p class="mt-4">What if you need to tweak it further?</p>
		<p>Your code. Your rules. Customize It.</p>

		<p class="mt-4">
			Please don't get me wrong as this is just my opinionated way of coding.
		</p>

		<p class="mt-4">Feel free to share your thoughts!</p>

		<p class="mt-4">Clios, lomer-ui dev.</p>
	</div>

	<Title id="1">Concept</Title>
	<div>
		<p class="flex items-center gap-2 font-semibold md:text-xl">
			<Icon class="inline text-zinc-500" icon="bi:x-diamond-fill" width={16} /> Less
			Code:
		</p>
		<p class="mb-4 ml-6">
			Keep components simple and easy to implement. No need to write tons of
			code to get things done.
		</p>

		<p class="flex items-center gap-2 font-semibold md:text-xl">
			<Icon class="inline text-zinc-500" icon="bi:x-diamond-fill" width={16} /> Simple
			Design:
		</p>
		<p class="mb-4 ml-6">
			Enjoy a minimalist and straightforward design that enhances user
			experience.
		</p>

		<p class="flex items-center gap-2 font-semibold md:text-xl">
			<Icon class="inline text-zinc-500" icon="bi:x-diamond-fill" width={16} /> Separation
			of Concerns:
		</p>
		<p class="mb-4 ml-6">
			Each component is independent, allowing you to tweak one without affecting
			the others.
		</p>
	</div>

	<Title id="2">FAQ</Title>
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

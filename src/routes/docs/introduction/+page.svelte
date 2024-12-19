<script>
	import Accordion from '$lib/accordion.svelte';
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Title from '$site/title.svelte';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Core Concept" />
	<OnThisPageBtn id="2" title="FAQ" />
</OnThisPage>

<div class="flex flex-col gap-4 xl:pr-80">
	<PageHeader
		title="Introduction"
		sub="Docs"
		info="Here are my thoughts on lomer-ui."
	/>

	<div class="flex flex-col gap-1 text-xl text-zinc-500 dark:text-zinc-400">
		<p>
			I want to build lomer-ui, focusing on a better <span
				class="font-semibold text-zinc-950 dark:text-white"
				>development experience</span
			>.
		</p>
		<p class="font-semibold text-zinc-950 dark:text-white">
			Quick Start. Minimal Configuration. Less Code. Easy to Implement.
		</p>
		<p>Not built on any existing UI library &mdash; it is the UI library.</p>

		<p class="mt-4">Comes with a CLI tool for copy-pasting.</p>
		<p>Also available as an npm package.</p>

		<p class="mt-4">Your feedback and support mean a lot.</p>
		<p>Thank you for taking the time to check this out.</p>

		<p class="mt-4">Clios, lomer-ui dev.</p>
	</div>

	<Title id="1">Core Concept</Title>
	<div>
		<p class="flex items-center gap-2 text-xl font-semibold">
			<Icon class="inline text-zinc-500" icon="bi:x-diamond-fill" width={16} /> Less
			Code:
		</p>
		<p class="mb-4 ml-6">
			Keep components simple and easy to implement. No need to write tons of
			code to get things done.
		</p>

		<p class="flex items-center gap-2 text-xl font-semibold">
			<Icon class="inline text-zinc-500" icon="bi:x-diamond-fill" width={16} /> Simple
			Design:
		</p>
		<p class="mb-4 ml-6">
			Enjoy a minimalist and straightforward design that enhances user
			experience.
		</p>

		<p class="flex items-center gap-2 text-xl font-semibold">
			<Icon class="inline text-zinc-500" icon="bi:x-diamond-fill" width={16} /> Separation
			of Concerns:
		</p>
		<p class="mb-4 ml-6">
			Each component is independent, allowing you to tweak one without affecting
			the others.
		</p>
	</div>

	<Title id="2">FAQ</Title>
	<div>
		<Accordion id="2.1" title="Is it free to use?">
			<p>Yes, it is! No attribution is required.</p>
			<p>If you do use it, feel free to reach out—I’d love to hear about it!</p>
		</Accordion>
		<Accordion id="2.1" title="Why copy/paste and packaged?">
			<p>
				Copying and pasting allows you to easily customize the code to fit your
				style and implementation needs.
			</p>
			<p>
				Installing it as a package provides a ready-to-use solution that focuses
				on styling.
			</p>
			<p>
				Both options offer flexibility, so you can choose what works best for
				you!
			</p>
		</Accordion>
	</div>
</div>

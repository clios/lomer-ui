<script>
	import Accordion from '$lib/accordion.svelte';
	import Alert from '$lib/alert.svelte';
	import Cli from '$site/cli.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageHeader from '$site/page-header.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';
	import Icon from '@iconify/svelte';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Core Concept" />
	<OnThisPageBtn id="2" title="FAQ" />
</OnThisPage>

<div class="flex flex-col gap-4 pr-80">
	<PageHeader
		title="Introduction"
		sub="Docs"
		info="Use clear, simple components without a UI library."
	/>

	<p class="italic">
		"I'm building lomer-ui with simplicity and clarity in mind, <br /> focusing
		on clean and easy-to-read code, <br /> all while including helpful (but not verbose)
		comments."
	</p>

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
		<Accordion title="Is it available as package?">
			<p>
				No, and it never will be. This is just a reference for building my own
				components.
			</p>
			<p>I’m tired of copy-pasting my components in different projects.</p>
			<p>
				I created this website to serve as a centralized reference for my
				snippets.
			</p>
		</Accordion>
		<Accordion title="How can I update my components?">
			<p class="mb-2">
				If you like my design and don't want to modify it, simply run:
			</p>
			<Cli code="npx lomer-ui update" />
			<p class="mt-2">
				It will scan all your components and update them automatically.
			</p>
			<p class="text-yellow-600 dark:text-yellow-500">
				Note: It will ask you if you want to replace your existing components,
				so please be cautious.
			</p>
		</Accordion>
		<Accordion title="Was it built on top of any existing UI library?">
			<p>
				No, lomer-ui is not built on any existing UI library, keeping the code
				minimal.
			</p>
		</Accordion>
		<Accordion title="Is lomer-ui easy for beginners to understand?">
			<p>I hope so! That’s what I’m aiming for.</p>
		</Accordion>
	</div>
</div>

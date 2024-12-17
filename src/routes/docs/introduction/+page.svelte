<script>
	import Accordion from '$lib/accordion.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Title from '$site/title.svelte';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Core Concept" />
	<OnThisPageBtn id="2" title="FAQ" />
	<OnThisPageSubBtn id="2.1" title="Is it free and open source?" />
	<OnThisPageSubBtn id="2.2" title="Is it available as package?" />
	<OnThisPageSubBtn id="2.3" title="Can I use this with other frameworks?" />
	<OnThisPageSubBtn id="2.4" title="Can I update my components?" />
	<OnThisPageSubBtn
		id="2.5"
		title="Was it built on top of any existing UI library?"
	/>
	<OnThisPageSubBtn
		id="2.6"
		title="Is lomer-ui easy for beginners to understand?"
	/>
</OnThisPage>

<div class="flex flex-col gap-4 xl:pr-80">
	<PageHeader
		title="Introduction"
		sub="Docs"
		info="Use clear, simple components without a UI library."
	/>

	<p>
		I'm excited to share that lomer-ui is an indie passion project created to
		help you kickstart your own component development.
	</p>
	<p>
		This project will never be released as a package, as it is not meant to be.
	</p>
	<p>
		The idea behind this project is to help you quickly start building your own
		components and to act as a reference.
	</p>
	<p>
		I'm building lomer-ui with simplicity and clarity in mind, focusing on clean
		and easy-to-read code, all while including helpful <em>(but not verbose)</em
		> comments.
	</p>
	<p>Thank you for taking the time to check out this project.</p>
	<p>Clios, lomer-ui dev.</p>

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
		<Accordion id="2.1" title="Is it free and open source?">
			<p>Yes, it is! There’s no need to mention me.</p>
			<p>I’d love to hear about any awesome projects you create with this!</p>
		</Accordion>
		<Accordion id="2.2" title="Is it available as package?">
			<p>
				No, and it will never be. This is just a reference for building our own
				components.
			</p>
			<p>
				You can copy and paste components or use lomer-ui <Link href="/docs/cli"
					>CLI</Link
				>.
			</p>
		</Accordion>
		<Accordion id="2.3" title="Can I use this with other frameworks?">
			<p>
				Most of the component is written in basic JavaScript and Tailwind
				classes.
			</p>
			<p>
				So, as a reference, yes! However, the CLI is ONLY compatible with
				Svelte.
			</p>
		</Accordion>
		<Accordion id="2.4" title="Can I update my components?">
			<p>Yes, the code is yours to modify as you see fit.</p>
		</Accordion>
		<Accordion id="2.5" title="Was it built on top of any existing UI library?">
			<p>No, lomer-ui is NOT built on any existing UI library.</p>
			<p>We just want to start building our own components right?</p>
			<p>Why add another UI library just to learn someone else's code?</p>
			<p>Start building your components directly.</p>
		</Accordion>
		<Accordion id="2.6" title="Is lomer-ui easy for beginners to understand?">
			<p>I hope so! That’s what I’m aiming for.</p>
		</Accordion>
	</div>
</div>

<script>
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Syntax from '$site/syntax.svelte';
	import Title from '$site/title.svelte';
	import Val from '$site/val.svelte';
	import { HighlightAuto } from 'svelte-highlight';
	import { Link } from '$lib/index.js';
	import PageFooter from '$site/page-footer.svelte';
</script>

<svelte:head>
	<title>Theming . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Convention" />
	<OnThisPageBtn id="2" title="lomer.css" />
	<OnThisPageBtn id="3" title="CSS Variables" />
	<OnThisPageBtn id="4" title="Adding theme variables" />
</OnThisPage>

<div class="mx-auto mb-16 flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Theming"
		sub="Docs"
		info="Customize styles to match your vibe."
	/>

	<p>
		Theming feature for lomer-ui is inspired by the works of shadcn. A widely
		used and loved by developers. So, to easily adapt lomer-ui followed most of
		the concept behind customizing theme.
	</p>

	<Title id="1">Convention</Title>
	<p>
		The most common and straightforward approach is to use <span
			class="text-mono text-primary">bg</span
		>
		and
		<span class="text-mono text-primary">fg</span> for color variables,
		simplifying "background" and "foreground". To keep our code clean,
		<span class="text-mono text-primary">bg</span> is omitted when it's context is
		clear.
	</p>
	<div class="font-mono text-sm sm:text-base">
		<p class="text-muted font-sans italic">e.g.</p>
		<p class="flex items-center">
			bg-primary<span class="pr-2 text-red-500">-bg</span> text-primary-fg <Icon
				class="w-8 pl-3 text-red-500"
				icon="mdi:close"
			/>
		</p>
		<p class="flex items-center gap-3">
			bg-primary text-primary-fg <Icon
				class="text-green-500"
				icon="mdi:check"
			/>
		</p>
	</div>

	<Title id="2">lomer.css</Title>

	<p class="text-muted">
		Using
		<span class="text-primary px-1 font-mono">npx lomer-ui init</span>
		will automatically insert lomer.css to your app.css file just below
		<span class="text-primary px-1 font-mono">@import 'tailwindcss'</span>.
	</p>

	<div>
		<p class="mb-1 text-orange-500">app.css</p>
		<Syntax
			highlightedLines={[1]}
			code={`@import "tailwindcss";
@import './lib/components/ui/lomer.css';`}
		/>
	</div>

	<div class="mb-8">
		<p class="mb-1 text-orange-500">lib/components/ui/lomer.css</p>
		<Syntax
			canCopy
			expandable
			code={`@variant dark (&:where(.dark, .dark *));

@theme {
    --color-bg: var(--color-zinc-50);
    --color-fg: var(--color-zinc-950);

    --color-primary: var(--color-cyan-600);
    --color-primary-fg: var(--color-zinc-50);
	
    --color-secondary: var(--color-zinc-200);
    --color-secondary-fg: var(--color-zinc-950);
	
    --color-destructive: var(--color-red-500);
    --color-destructive-fg: var(--color-zinc-50);

    --color-muted: var(--color-zinc-600);
    --color-muted-fg: var(--color-zinc-400);
	
    --color-disabled: var(--color-zinc-500);
    --color-disabled-fg: var(--color-zinc-800);

    --color-input: var(--color-zinc-50);
    --color-input-fg: var(--color-zinc-950);
	
    --color-card: var(--color-zinc-200);
    --color-card-fg: var(--color-zinc-950);
	
    --color-popup: var(--color-white);
    --color-popup-fg: var(--color-zinc-950);

    --color-border: var(--color-zinc-300);
	
    --color-spinner: var(--color-cyan-500);
	
    --radius: 0.25rem;
    --radius-card: calc(var(--radius) * 1.5);
}

.dark {
    --color-bg: var(--color-zinc-950);
    --color-fg: var(--color-zinc-50);

    --color-primary: var(--color-cyan-500);
    --color-primary-fg: var(--color-zinc-50);

    --color-secondary: var(--color-zinc-800);
    --color-secondary-fg: var(--color-zinc-50);

    --color-destructive: var(--color-red-500);
    --color-destructive-fg: var(--color-zinc-50);

    --color-muted: var(--color-zinc-400);
    --color-muted-fg: var(--color-zinc-600);

    --color-disabled: var(--color-zinc-600);
    --color-disabled-fg: var(--color-zinc-400);

    --color-input: var(--color-zinc-950);
    --color-input-fg: var(--color-zinc-50);

    --color-card: var(--color-zinc-900);
    --color-card-fg: var(--color-zinc-50);

    --color-popup: var(--color-zinc-950);
    --color-popup-fg: var(--color-zinc-50);

    --color-border: var(--color-zinc-700);

    --color-spinner: var(--color-cyan-400);
}

@layer base {
    * {
        @apply border-border;
    }
    body {
        @apply bg-bg text-fg;
    }
    ::selection {
        background-color: var(--color-primary) !important;
        color: var(--color-primary-fg) !important;
    }
}`}
		/>
	</div>

	<Title id="3">CSS Variables</Title>
	<div>
		<p class="mb-1">General background and foreground color.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-bg: var(--color-zinc-50);
--color-fg: var(--color-zinc-950);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Main color of your design.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-primary: var(--color-cyan-600);
--color-primary-fg: var(--color-zinc-50);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Supporting color of your design.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-secondary: var(--color-zinc-200);
--color-secondary-fg: var(--color-zinc-950);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Signals danger, warning or irreversibility action color.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-destructive: var(--color-red-500);
--color-destructive-fg: var(--color-zinc-50);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Softer tone for supporting details color.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-muted: var(--color-zinc-600);
--color-muted-fg: var(--color-zinc-400);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Visually indicate disabled actions like disabled button.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-disabled: var(--color-zinc-500);
--color-disabled-fg: var(--color-zinc-800);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Form input elements color.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-input: var(--color-zinc-50);
--color-input-fg: var(--color-zinc-950);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Card like components color.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-card: var(--color-zinc-200);
--color-card-fg: var(--color-zinc-950);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Popup components color like drawer, dialog, dropdown.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--color-popup: var(--color-white);
--color-popup-fg: var(--color-zinc-950);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Default border color.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto code={`--color-border: var(--color-zinc-300);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Default spinner icon color.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto code={`--color-spinner: var(--color-cyan-500);`}
			></HighlightAuto>
		</div>

		<p class="mb-1">Default border radius.</p>
		<div class="rounded-card mb-8 overflow-hidden text-sm">
			<HighlightAuto
				code={`--radius: 0.25rem;
--radius-card: calc(var(--radius) * 1.5);`}
			></HighlightAuto>
		</div>
	</div>

	<Title id="4">Adding theme variables</Title>
	<p>TailwindCSS v4 has a great way to add theme variables.</p>
	<Link
		href="https://tailwindcss.com/docs/v4-beta#css-theme-variables"
		target="_blank">tailwindcss.com/docs/v4-beta#css-theme-variables</Link
	>

	<PageFooter
		prevLabel="Dark Mode"
		prevLink="/docs/dark-mode"
		nextLabel="CLI"
		nextLink="/docs/cli"
	/>
</div>

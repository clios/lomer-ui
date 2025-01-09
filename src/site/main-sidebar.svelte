<script lang="ts">
	import SidebarLink from '$site/sidebar-link.svelte';
	import CardToggleTheme from '$site/card__toggle-theme.svelte';
	import Link from '$lib/link.svelte';

	let { isOpen = $bindable(false) } = $props();
</script>

<div class="mt-4 ml-4 flex items-center lg:mt-8">
	<div class="relative mr-4">
		<img class="relative size-7 min-w-7" src="/favicon.png" alt="lomer" />
		<div
			class="absolute top-0 size-7 rotate-45 outline -outline-offset-2"
		></div>
	</div>

	<Link
		onclick={() => (isOpen = false)}
		href="/"
		class="font-mono text-xl leading-3 no-underline"
	>
		lomer-ui
	</Link>
</div>

<CardToggleTheme />

<p class="mt-4 pl-4 font-semibold">Getting Started</p>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/docs/introduction"
	label="Introduction"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/docs/installation"
	label="Installation"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/docs/dark-mode"
	label="Dark Mode"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/docs/theming"
	label="Theming"
/>
<SidebarLink onclick={() => (isOpen = false)} href="/docs/cli" label="CLI" />

<p class="mt-4 pl-4 font-semibold">Components</p>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/accordion"
	label="Accordion"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/alert"
	label="Alert"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/button"
	label="Button"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/card-picker"
	label="Card Picker"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/checkbox"
	label="Checkbox"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/dialog"
	label="Dialog"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/drawer"
	label="Drawer"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/dropdown"
	label="Dropdown"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/field"
	label="Field"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/input"
	label="Input"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/link"
	label="Link"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/radio"
	label="Radio"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/scroll-area"
	label="Scroll Area"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/select"
	label="Select"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/switch"
	label="Switch"
/>
<SidebarLink
	onclick={() => (isOpen = false)}
	href="/components/textarea"
	label="Textarea"
/>

<div class="m-8 flex justify-end">
	<Link
		href="https://github.com/clios"
		target="_blank"
		class="font-mono italic no-underline"
	>
		- Clios
	</Link>
</div>

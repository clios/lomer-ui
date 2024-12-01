<script lang="ts">
	import Button from '$lib/button.svelte';
	import Code from '$lib/code.svelte';
	import { scrollToId } from '$lib/helper.js';
	import Screen from '$lib/screen.svelte';
	import Icon from '@iconify/svelte';
</script>

<h1 class="font-mono text-4xl font-bold">Button</h1>
<p>A component that looks like a button.</p>
<div class="flex flex-wrap gap-1 py-4">
	<Button size="fit" on:click={() => scrollToId('primary')}>Primary</Button>
	<Button size="fit" on:click={() => scrollToId('secondary')}>Secondary</Button>
	<Button size="fit" on:click={() => scrollToId('outline')}>Outline</Button>
	<Button size="fit" on:click={() => scrollToId('ghost')}>Ghost</Button>
	<Button size="fit" on:click={() => scrollToId('destructive')}>Destructive</Button>
	<Button size="fit" on:click={() => scrollToId('fit')}>Fit</Button>
	<Button size="fit" on:click={() => scrollToId('with-icon')}>With Icon</Button>
	<Button size="fit" on:click={() => scrollToId('icon')}>Icon</Button>
	<Button size="fit" on:click={() => scrollToId('circle')}>Circle</Button>
	<Button size="fit" on:click={() => scrollToId('sharp')}>Sharp</Button>
	<Button size="fit" on:click={() => scrollToId('loading')}>Loading</Button>
	<Button size="fit" on:click={() => scrollToId('disabled')}>Disabled</Button>
</div>
<Code code={`import { Button } from 'lomer-ui'`} language="javascript" />

<p class="pb-1 text-xl font-semibold">Examples</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button>Button</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Button>Button</Button>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="secondary">Secondary</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button variant="secondary">Button</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Button variant="secondary">Button</Button>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="outline">Outline</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button variant="outline">Button</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Button variant="outline">Button</Button>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="ghost">Ghost</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button variant="ghost">Button</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Button variant="ghost">Button</Button>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="destructive">Desctructive</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button variant="destructive">Button</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Button variant="destructive">Button</Button>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="fit">Fit</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button size="fit">Button</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Button size="fit">Button</Button>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="with-icon">With Icon</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button>
				<Icon icon="mdi:power" width={24} height={24} /> Shutdown
			</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code
				code={`<Button>` +
					`\n\t<Icon icon="mdi:power" width={24} height={24} /> Shutdown` +
					`\n</Button>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="icon">Icon</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button size="icon">
				<Icon icon="mdi:power" width={24} height={24} />
			</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code
				code={`<Button size="icon">` +
					`\n\t<Icon icon="mdi:power" width={24} height={24} />` +
					`\n</Button>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="circle">Circle</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button size="icon" edge="circle">
				<Icon icon="mdi:power" width={24} height={24} />
			</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code
				code={`<Button size="icon" edge="circle">` +
					`\n\t<Icon icon="mdi:power" width={24} height={24} />` +
					`\n</Button>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="sharp">Sharp</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button size="icon" edge="sharp">
				<Icon icon="mdi:power" width={24} height={24} />
			</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code
				code={`<Button size="icon" edge="sharp">` +
					`\n\t<Icon icon="mdi:power" width={24} height={24} />` +
					`\n</Button>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="loading">Loading</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button isLoading>Button</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Button isLoading>Button</Button>`} language="xml" />
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold" id="disabled">Disabled</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Button isDisabled>Button</Button>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Button isDisabled>Button</Button>`} language="xml" />
		</div>
	</div>
</Screen>

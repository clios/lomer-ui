<script lang="ts">
	import Accordion from '$lib/accordion.svelte';
	import Button from '$lib/button.svelte';
	import Dialog from '$lib/dialog.svelte';
	import Dropdown from '$lib/dropdown.svelte';
	import Switch from '$lib/switch.svelte';
	import Icon from '@iconify/svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import { twMerge } from 'tailwind-merge';

	interface Color {
		name: string;
		bg: string;
	}

	interface Round {
		name: string;
		display: string;
		value: number;
	}

	let isOpen = $state(false);
	let isOpenDialog = $state(false);
	let darkMode = $state(false);
	let primaryColor = $state('cyan');
	let toneColor = $state('zinc');
	let radiusVal = $state('25');

	const primaries: Array<Color> = [
		{
			name: 'slate',
			bg: 'bg-slate-500'
		},
		{
			name: 'gray',
			bg: 'bg-gray-500'
		},
		{
			name: 'zinc',
			bg: 'bg-zinc-500'
		},
		{
			name: 'neutral',
			bg: 'bg-neutral-500'
		},
		{
			name: 'stone',
			bg: 'bg-stone-500'
		},
		{
			name: 'red',
			bg: 'bg-red-500'
		},
		{
			name: 'orange',
			bg: 'bg-orange-500'
		},
		{
			name: 'amber',
			bg: 'bg-amber-500'
		},
		{
			name: 'yellow',
			bg: 'bg-yellow-500'
		},
		{
			name: 'lime',
			bg: 'bg-lime-500'
		},
		{
			name: 'green',
			bg: 'bg-green-500'
		},
		{
			name: 'emerald',
			bg: 'bg-emerald-500'
		},
		{
			name: 'teal',
			bg: 'bg-teal-500'
		},
		{
			name: 'cyan',
			bg: 'bg-cyan-500'
		},
		{
			name: 'sky',
			bg: 'bg-sky-500'
		},
		{
			name: 'blue',
			bg: 'bg-blue-500'
		},
		{
			name: 'indigo',
			bg: 'bg-indigo-500'
		},
		{
			name: 'violet',
			bg: 'bg-violet-500'
		},
		{
			name: 'purple',
			bg: 'bg-purple-500'
		},
		{
			name: 'fuchsia',
			bg: 'bg-fuchsia-500'
		},
		{
			name: 'pink',
			bg: 'bg-pink-500'
		},
		{
			name: 'rose',
			bg: 'bg-rose-500'
		}
	];

	const tones: Array<Color> = [
		{
			name: 'slate',
			bg: 'bg-slate-500'
		},
		{
			name: 'gray',
			bg: 'bg-gray-500'
		},
		{
			name: 'zinc',
			bg: 'bg-zinc-500'
		},
		{
			name: 'neutral',
			bg: 'bg-neutral-500'
		},
		{
			name: 'stone',
			bg: 'bg-stone-500'
		}
	];

	const roundness: Array<Round> = [
		{
			name: '0',
			display: '0',
			value: 0
		},
		{
			name: '25',
			display: '.25',
			value: 0.25
		},
		{
			name: '50',
			display: '.50',
			value: 0.5
		},
		{
			name: '75',
			display: '.75',
			value: 0.75
		},
		{
			name: '1',
			display: '1.0',
			value: 1
		}
	];

	function setPrimary(color: Color) {
		const className = `primary-${color.name}`;

		primaries.forEach((c) => {
			const existingClass = `primary-${c.name}`;
			document.body.classList.remove(existingClass);
		});

		document.body.classList.add(className);
		primaryColor = color.name;
	}

	function setTone(color: Color) {
		const className = `tone-${color.name}`;

		primaries.forEach((c) => {
			const existingClass = `tone-${c.name}`;
			document.body.classList.remove(existingClass);
		});

		document.body.classList.add(className);
		toneColor = color.name;
	}

	function setRoundness(round: Round) {
		const className = `roundness-${round.name}`;

		roundness.forEach((r) => {
			const existingClass = `roundness-${r.name}`;
			document.body.classList.remove(existingClass);
		});

		document.body.classList.add(className);
		radiusVal = round.name;
	}

	function resetTheme() {
		document.body.className = '';
		primaryColor = 'cyan';
		toneColor = 'zinc';
		radiusVal = '25';
	}

	$effect(() => {
		darkMode = $mode === 'dark';
	});
</script>

<div class="mt-4 ml-4">
	<p class="text-sm text-zinc-500 dark:text-zinc-400">Explore in</p>
	<div class="mt-1 flex items-center gap-2">
		<Button class="gap-2" size="small" onclick={toggleMode}>
			{#if $mode === 'light'}
				<Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
				Light Mode
			{:else}
				<Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
				Dark Mode
			{/if}
		</Button>

		<div class="flex justify-center">
			<Button
				class="text-primary"
				variant="ghost"
				size="icon"
				edge="circle"
				onclick={() => (isOpen = !isOpen)}
			>
				<Icon icon="mdi:gear" width="17" />
			</Button>

			<Dropdown bind:isOpen>
				<div class="mb-2 px-3">
					<p>Customize</p>
					<p class="text-muted text-sm">Match your project's unique vibe.</p>
				</div>

				<Switch onswitch={toggleMode} bind:value={darkMode}>Dark Mode</Switch>

				<Accordion title="Primary">
					{#snippet icon()}
						<Icon class="text-primary" icon="ix:highlight-filled" width="24" />
					{/snippet}
					<div class="flex w-72 flex-wrap justify-center gap-2 p-2">
						{#each primaries as primary}
							<Button
								title={primary.name}
								onclick={() => setPrimary(primary)}
								class={`border-none ${primary.bg}`}
								size="icon"
							>
								<div class="size-4">
									{#if primary.name === primaryColor}
										<Icon icon="mdi:check" />
									{/if}
								</div>
							</Button>
						{/each}
					</div>
				</Accordion>

				<Accordion title="Tone">
					{#snippet icon()}
						<Icon
							class={twMerge(
								toneColor === 'slate' && 'text-slate-500',
								toneColor === 'gray' && 'text-gray-500',
								toneColor === 'zinc' && 'text-zinc-500',
								toneColor === 'neutral' && 'text-neutral-500',
								toneColor === 'stone' && 'text-stone-500'
							)}
							icon="ix:highlight-filled"
							width="24"
						/>
					{/snippet}
					<div class="flex w-72 flex-wrap justify-center gap-2 p-2">
						{#each tones as tone}
							<Button
								title={tone.name}
								onclick={() => setTone(tone)}
								class={`border-none ${tone.bg} text-white`}
								size="small"
							>
								<div class="size-4">
									{#if tone.name === toneColor}
										<Icon icon="mdi:check" />
									{:else}
										<Icon icon="mdi:circle-outline" />
									{/if}
								</div>
								{tone.name}
							</Button>
						{/each}
					</div>
				</Accordion>

				<Accordion title="Roundness">
					<div class="flex flex-col items-center">
						<div class="flex flex-col items-center">
							<p class="text-sm">Card</p>
							<div
								class="rounded-card flex h-24 w-32 flex-col items-center justify-center border-2"
							>
								<p class="text-muted text-sm">Elements</p>
								<div class="h-8 w-16 rounded border-2"></div>
							</div>
						</div>
						<div class="mt-2 flex w-72 flex-wrap justify-center gap-2 p-2">
							{#each roundness as round}
								<Button
									edge="sharp"
									onclick={() => setRoundness(round)}
									size="small"
								>
									{#if radiusVal == round.name}
										<Icon icon="mdi:check" />
									{:else}
										{round.display}
									{/if}
								</Button>
							{/each}
						</div>
					</div>
				</Accordion>

				<div class="mt-4 mb-1 flex gap-2 px-3">
					<Button
						onclick={() => (isOpenDialog = !isOpenDialog)}
						class="flex w-full flex-col gap-0"
					>
						<p>Copy theme</p>
					</Button>
					<Dialog bind:isOpen={isOpenDialog}>// lomer.css here</Dialog>
					<Button
						onclick={resetTheme}
						title="reset"
						variant="inverted"
						size="icon"
					>
						<Icon class="pointer-events-none" icon="bx:reset" width="24" />
					</Button>
				</div>
			</Dropdown>
		</div>
	</div>
</div>

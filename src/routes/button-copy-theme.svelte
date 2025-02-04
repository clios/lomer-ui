<script lang="ts">
  import CopyCSSCode from '$lib/components/copy-c-s-s-code.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import Drawer from '$lib/components/ui/drawer.svelte';

  let { primaryColor, toneColor, radiusVal } = $props();

  let isOpen = $state(false);
</script>

<Button onclick={() => (isOpen = !isOpen)} class="flex w-full flex-col gap-0">
  <p>Copy theme</p>
</Button>

<Drawer title="Theme" position="left" bind:isOpen>
  <p class="text-muted mb-2">Copy and paste it to lomer.css</p>

  <CopyCSSCode
    code={`@theme {
	--color-bg: var(--color-${toneColor}-50);
	--color-fg: var(--color-${toneColor}-950);

	--color-primary: var(--color-${primaryColor}-600);
	--color-primary-fg: var(--color-${toneColor}-50);

	--color-secondary: var(--color-${toneColor}-200);
	--color-secondary-fg: var(--color-${toneColor}-950);

	--color-destructive: var(--color-red-500);
	--color-destructive-fg: var(--color-${toneColor}-50);

	--color-muted: var(--color-${toneColor}-600);
	--color-muted-fg: var(--color-${toneColor}-400);

	--color-disabled: var(--color-${toneColor}-500);
	--color-disabled-fg: var(--color-${toneColor}-800);

	--color-input: var(--color-${toneColor}-50);
	--color-input-fg: var(--color-${toneColor}-950);

	--color-card: var(--color-${toneColor}-200);
	--color-card-fg: var(--color-${toneColor}-950);

	--color-popup: var(--color-${toneColor}-50);
	--color-popup-fg: var(--color-${toneColor}-950);

	--color-border: var(--color-${toneColor}-300);

	--color-spinner: var(--color-${primaryColor}-500);

	--radius: ${radiusVal}rem;
	--radius-card: calc(var(--radius) * 1.5);
}

.dark {
	--color-bg: var(--color-${toneColor}-950);
	--color-fg: var(--color-${toneColor}-50);

	--color-primary: var(--color-${primaryColor}-500);
	--color-primary-fg: var(--color-${toneColor}-50);

	--color-secondary: var(--color-${toneColor}-800);
	--color-secondary-fg: var(--color-${toneColor}-50);

	--color-destructive: var(--color-red-500);
	--color-destructive-fg: var(--color-${toneColor}-50);

	--color-muted: var(--color-${toneColor}-400);
	--color-muted-fg: var(--color-${toneColor}-600);

	--color-disabled: var(--color-${toneColor}-600);
	--color-disabled-fg: var(--color-${toneColor}-400);

	--color-input: var(--color-${toneColor}-950);
	--color-input-fg: var(--color-${toneColor}-50);

	--color-card: var(--color-${toneColor}-900);
	--color-card-fg: var(--color-${toneColor}-50);

	--color-popup: var(--color-${toneColor}-950);
	--color-popup-fg: var(--color-${toneColor}-50);

	--color-border: var(--color-${toneColor}-700);

	--color-spinner: var(--color-${primaryColor}-400);
}`}
  />
</Drawer>

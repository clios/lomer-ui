<script lang="ts">
  import CopyCSSCode from '$lib/components/copy-c-s-s-code.svelte';
  import Button from '$lib/components/base/button.svelte';
  import Dialog from '$lib/components/base/dialog.svelte';

  let { primaryColor, toneColor, radiusVal } = $props();

  let open = $state(false);
</script>

<Button
  onclick={() => (open = !open)}
  class="flex w-full flex-col gap-0 sm:w-max"
>
  <p>Copy theme</p>
</Button>

<Dialog title="Theme" bind:open>
  <p class="text-muted mb-2">Copy and paste it to lomer.css</p>

  <CopyCSSCode
    class="max-h-[calc(100vh-12rem)]"
    code={`@variant dark (&:where(.dark, .dark *));

@theme {
  /* General background and foreground color. */
  --color-bg: var(--color-${toneColor}-50);
  --color-fg: var(--color-${toneColor}-950);

  /* Branding color of your design. */
  --color-primary: var(--color-${primaryColor}-600);
  --color-primary-fg: var(--color-${toneColor}-50);

  /* Supporting color of your design. */
  --color-secondary: var(--color-${toneColor}-200);
  --color-secondary-fg: var(--color-${toneColor}-950);

  /* Signals danger, warning or irreversibility action color. */
  --color-destructive: var(--color-red-500);
  --color-destructive-fg: var(--color-${toneColor}-50);

  /* Softer contrast for supporting details color. */
  --color-muted: var(--color-${toneColor}-600);
  --color-muted-fg: var(--color-${toneColor}-400);

  /* Visually indicate disabled actions. */
  --color-disabled: var(--color-${toneColor}-200);
  --color-disabled-fg: var(--color-${toneColor}-400);

  /* Form input elements color. */
  --color-input: var(--color-${toneColor}-50);
  --color-input-fg: var(--color-${toneColor}-950);

  /* Default border color. */
  --color-border: var(--color-${toneColor}-300);

  /* Default border radius. */
  --radius: ${radiusVal}rem;
}

.dark {
  /* General background and foreground color. */
  --color-bg: var(--color-${toneColor}-950);
  --color-fg: var(--color-${toneColor}-50);

  /* Branding color of your design. */
  --color-primary: var(--color-${primaryColor}-500);
  --color-primary-fg: var(--color-${toneColor}-50);

  /* Supporting color of your design. */
  --color-secondary: var(--color-${toneColor}-800);
  --color-secondary-fg: var(--color-${toneColor}-50);

  /* Signals danger, warning or irreversibility action color. */
  --color-destructive: var(--color-red-500);
  --color-destructive-fg: var(--color-${toneColor}-50);

  /* Softer contrast for supporting details color. */
  --color-muted: var(--color-${toneColor}-400);
  --color-muted-fg: var(--color-${toneColor}-600);

  /* Visually indicate disabled actions. */
  --color-disabled: var(--color-${toneColor}-800);
  --color-disabled-fg: var(--color-${toneColor}-500);

  /* Form input elements color. */
  --color-input: var(--color-${toneColor}-950);
  --color-input-fg: var(--color-${toneColor}-50);

  /* Default border color. */
  --color-border: var(--color-${toneColor}-700);
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
}
`}
  />
</Dialog>

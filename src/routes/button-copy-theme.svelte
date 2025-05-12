<script lang="ts">
    import Button from '$lib/components/base/button.svelte';
    import Dialog from '$lib/components/base/dialog.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';

    let { primaryColor, toneColor, radiusVal } = $props();

    let open = $state(false);
</script>

<Button onclick={() => (open = !open)} class="flex w-full flex-col gap-0 sm:w-max">
    <p>Copy theme</p>
</Button>

<Dialog title="Theme" bind:open>
    <Paragraph>Copy and paste the following code into your CSS file.</Paragraph>
    <CopySvelteCode
        open
        language="css"
        class="max-h-[calc(100vh-12rem)]"
        code={`/* Primary shades */
  --color-primary-50: var(--color-${primaryColor}-50);
  --color-primary-100: var(--color-${primaryColor}-100);
  --color-primary-200: var(--color-${primaryColor}-200);
  --color-primary-300: var(--color-${primaryColor}-300);
  --color-primary-400: var(--color-${primaryColor}-400);
  --color-primary-500: var(--color-${primaryColor}-500);
  --color-primary-600: var(--color-${primaryColor}-600);
  --color-primary-700: var(--color-${primaryColor}-700);
  --color-primary-800: var(--color-${primaryColor}-800);
  --color-primary-900: var(--color-${primaryColor}-900);
  --color-primary-950: var(--color-${primaryColor}-950);
  --color-primary-50: var(--color-${primaryColor}-50);

  /* General shades */
  --color-general-50: var(--color-${toneColor}-50);
  --color-general-100: var(--color-${toneColor}-100);
  --color-general-200: var(--color-${toneColor}-200);
  --color-general-300: var(--color-${toneColor}-300);
  --color-general-400: var(--color-${toneColor}-400);
  --color-general-500: var(--color-${toneColor}-500);
  --color-general-600: var(--color-${toneColor}-600);
  --color-general-700: var(--color-${toneColor}-700);
  --color-general-800: var(--color-${toneColor}-800);
  --color-general-900: var(--color-${toneColor}-900);
  --color-general-950: var(--color-${toneColor}-950);
  
  /* ... */
  
  /* Default border radius. */
  --radius: ${radiusVal}rem;`}
    />
</Dialog>

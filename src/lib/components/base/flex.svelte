<script lang="ts">
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = { children?: Snippet; class?: string };

    let { children, class: className }: Props = $props();
</script>

<div class={twMerge('flex', className)}>
    {@render children?.()}
</div>

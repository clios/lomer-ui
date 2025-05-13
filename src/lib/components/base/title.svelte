<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLElementTagNameMap['section']> & {
        children?: Snippet;
        class?: string;
        level?: 1 | 2 | 3 | 4 | 5 | 6;
    };

    let { children, class: className, level = 1, ...props }: Props = $props();
</script>

{#if level === 1}
    <h1 class={twMerge('text-xl font-semibold @sm:text-2xl @2xl:text-3xl', className)}>
        {@render children?.()}
    </h1>
{:else if level === 2}
    <h2>{@render children?.()}</h2>
{:else if level === 3}
    <h3>{@render children?.()}</h3>
{:else if level === 4}
    <h4>{@render children?.()}</h4>
{:else if level === 5}
    <h5>{@render children?.()}</h5>
{:else if level === 6}
    <h6>{@render children?.()}</h6>
{/if}

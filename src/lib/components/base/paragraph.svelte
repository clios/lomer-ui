<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLElementTagNameMap['p']> & {
        children?: Snippet;
        class?: string;
    };

    let { children, class: className, ...props }: Props = $props();
</script>

<p class={twMerge('text-muted text-sm @sm:text-base @2xl:text-xl', className)} {...props}>
    {@render children?.()}
</p>

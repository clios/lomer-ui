<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAnchorAttributes & {
        children?: Snippet;
        class?: string;
    };

    let { children, class: className, ...props }: Props = $props();
</script>

<a
    class={twMerge(
        'relative w-fit rounded', // base
        'text-primary active:text-fg', // colors
        'cursor-pointer underline-offset-2 hover:underline', // hovering
        className
    )}
    {...props}
>
    {@render children?.()}
</a>

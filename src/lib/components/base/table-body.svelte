<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLTableSectionElement> & {
        children?: Snippet;
        class?: string;
        zebra?: boolean;
        outline?: boolean;
    };

    let { children, class: className, outline, zebra, ...props }: Props = $props();
</script>

<tbody
    class={twMerge(
        '[&_tr:hover]:bg-primary/15',
        '[&_tr:focus]:bg-primary/15',
        '[&_tr:nth-child(odd):hover]:bg-primary/15',
        '[&_tr:nth-child(odd):focus-visible]:bg-primary/15',
        zebra && '[&_tr:nth-child(odd)]:bg-fg/5',
        outline && '[&_tr]:border-t',
        className
    )}
    {...props}
>
    {@render children?.()}
</tbody>

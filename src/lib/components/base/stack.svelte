<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLDivElement> & {
        autoGap?: boolean;
        autoMargin?: boolean;
        autoPadding?: boolean;
        children?: Snippet;
        class?: string;
        horizontal?: boolean;
    };

    let { autoGap, autoMargin, autoPadding, children, class: className, horizontal, ...props }: Props = $props();
</script>

<div
    class={twMerge(
        'flex',
        horizontal ? 'flex-row' : 'flex-col',
        autoGap && 'gap-2 @sm:gap-4', // configure your responsive gap here
        autoMargin && 'm-2 @sm:m-4', // configure your responsive margin here
        autoPadding && 'p-2 @sm:p-4', // configure your responsive padding here
        className
    )}
    {...props}
>
    {@render children?.()}
</div>

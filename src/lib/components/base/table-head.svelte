<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLTableSectionElement> & {
        children?: Snippet;
        class?: string;
    };

    let { class: className, children, ...props }: Props = $props();
</script>

<thead class={twMerge('peer', className)} {...props}>
    {@render children?.()}
</thead>

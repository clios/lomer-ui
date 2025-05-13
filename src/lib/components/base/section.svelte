<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLElementTagNameMap['section']> & {
        children?: Snippet;
        class?: string;
    };

    let { children, class: className, ...props }: Props = $props();
</script>

<div class="@container">
    <section
        class={twMerge(
            'flex flex-col',
            'p-4 @sm:p-6 @2xl:p-8 @4xl:p-10',
            'gap-4 @sm:gap-6 @2xl:gap-8 @4xl:gap-10',
            className
        )}
        {...props}
    >
        {@render children?.()}
    </section>
</div>

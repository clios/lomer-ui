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

<div class="border-b border-dotted">
    <div class="container mx-auto sm:px-4 lg:px-8">
        <div class="w-full p-4 sm:border-x sm:border-dotted md:p-8 lg:p-16">
            <section class={twMerge('relative', className)} {...props}>
                {@render children?.()}
            </section>
        </div>
    </div>
</div>

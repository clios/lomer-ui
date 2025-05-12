<script lang="ts">
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';
    type Props = {
        class?: string;
        id?: string;
        title?: string;
        children?: Snippet;
    };
    let { class: className = '', id = '', children, title = '' }: Props = $props();
</script>

<article class="relative">
    <div class="absolute -top-14" {id}></div>
    {#if title}
        <p class="font-semibold">
            {title}
        </p>
    {/if}
    <div class={twMerge('text-muted flex w-full flex-col gap-2 pt-2 pb-4 sm:pr-14 sm:pl-4', className)}>
        {@render children?.()}
    </div>
</article>

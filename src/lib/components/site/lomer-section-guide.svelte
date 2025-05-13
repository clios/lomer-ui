<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        children?: Snippet;
        withFooter?: boolean;
    };

    let { children, withFooter }: Props = $props();
</script>

<div
    class="bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pt-8 [--color-border:var(--color-fg)]/5 xl:pt-16 dark:[--color-border:var(--color-fg)]/5"
>
    <div class="container mx-auto sm:px-4 lg:px-8">
        <div class="border-muted-fg border">
            {@render children?.()}
        </div>
    </div>
</div>

{#if withFooter}
    <div
        class="border-b border-dotted bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pt-8 [--color-border:var(--color-fg)]/5 xl:pt-16 dark:[--color-border:var(--color-fg)]/5"
    ></div>
{/if}

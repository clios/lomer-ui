<script lang="ts">
    import { twMerge } from 'tailwind-merge';

    let { class: className, children } = $props();
</script>

<div
    class="dark:border-muted-fg relative h-full w-full overflow-hidden border bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed shadow-md [--color-border:var(--color-fg)]/25 dark:[--color-border:var(--color-fg)]/30"
>
    <div class={twMerge('flex p-8', className)}>
        {@render children?.()}
    </div>
</div>

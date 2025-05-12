<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLInputAttributes & {
        class?: string;
        disabled?: boolean;
        value?: string;
    };

    let { class: className, disabled, value = $bindable(''), ...props }: Props = $props();
</script>

<input
    class={twMerge(
        'px-2 py-1', // box sizing
        'text-input-fg bg-input outline-primary', // colors
        'outline-offset-2 hover:outline focus:outline', // outline
        'rounded border', // border
        disabled && 'bg-disabled text-disabled-fg cursor-not-allowed outline-none',
        className
    )}
    bind:value
    {disabled}
    {...props}
/>

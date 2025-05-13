<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLSelectAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    type Props = {
        children?: Snippet;
        class?: string;
        disabled?: boolean;
        open?: boolean;
        value?: any;
    } & HTMLSelectAttributes;

    let { children, class: className, disabled = false, value = $bindable(), ...props }: Props = $props();
</script>

<!-- Customize container here -->
<div class="bg-input text-input-fg relative flex w-full items-center rounded">
    <select
        class={twMerge(
            'w-full py-1 pr-10 pl-2', // box sizing
            'cursor-pointer appearance-none rounded border', // visual
            'outline-primary outline-offset-2 hover:outline focus:outline', // outline
            disabled && 'bg-disabled text-disabled-fg cursor-not-allowed outline-none',

            // Customize option here
            '[&>option]:bg-input',
            '[&>option]:text-input-fg',

            // Customize group here
            '[&>optgroup]:bg-input',
            '[&>optgroup]:text-primary',
            '[&>optgroup]:text-xs',

            // Customize group option here
            '[&>optgroup>option]:text-input-fg',
            '[&>optgroup>option]:text-base',
            '[&>optgroup>option:disabled]:text-disabled-fg',

            className
        )}
        {disabled}
        {...props}
        bind:value
    >
        {@render children?.()}
    </select>

    {@render ArrowDown()}
</div>

<!-- Customize icon for indicator -->
{#snippet ArrowDown()}
    <svg
        class="text-fg pointer-events-none absolute right-2 size-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m6 9l6 6l6-6"
        />
    </svg>
{/snippet}

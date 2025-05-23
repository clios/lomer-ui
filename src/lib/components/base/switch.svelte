<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { circInOut } from 'svelte/easing';
    import { draw } from 'svelte/transition';
    import { twMerge } from 'tailwind-merge';

    type Props = {
        children?: Snippet;
        class?: string;
        disabled?: boolean;
        edge?: 'default' | 'circle' | 'sharp';
        label?: string;
        loading?: boolean;
    } & HTMLInputAttributes;

    let {
        checked = $bindable(false),
        children,
        class: className,
        disabled = false,
        edge = 'default',
        label = '',
        loading = $bindable(false),
        ...props
    }: Props = $props();
</script>

<div>
    <!-- Hide input checkbox -->
    <input type="checkbox" class="hidden appearance-none" disabled={loading || disabled} bind:checked {...props} />

    <!-- Customize switch container here  -->
    <label
        class={twMerge(
            'flex items-center w-fit text-fg cursor-pointer',
            (disabled || loading) && 'text-disabled-fg cursor-not-allowed'
        )}
    >
        <!-- Customize switch outer box here -->
        <button
            class={twMerge(
                'relative flex items-center mr-2 min-w-12 max-w-12 min-h-6 max-h-6', // layout and positioning
                'outline-primary outline-offset-2 hover:outline focus:outline', // outline
                'cursor-pointer rounded border-y transition-all', // visual
                checked ? 'bg-primary border-primary border-l' : 'border-r',
                disabled && 'bg-disabled border-disabled cursor-not-allowed outline-none',
                loading && 'cursor-not-allowed outline-none',
                edge === 'default' && 'rounded',
                edge === 'circle' && 'rounded-full',
                edge === 'sharp' && 'rounded-none'
            )}
            type="button"
            onclick={() => (checked = !checked)}
            disabled={loading || disabled}
        >
            <!-- This will push the box -->
            <div class={twMerge('transition-all', checked ? 'w-6' : 'w-0')}></div>
            <!-- Customize inner box here -->
            <div
                class={twMerge(
                    'place-content-center grid bg-fg border rounded size-6 text-bg pointer-events-none',
                    checked ? 'border-primary' : 'border-fg',
                    disabled && 'border-disabled text-disabled bg-disabled-fg',
                    edge === 'default' && 'rounded',
                    edge === 'circle' && 'rounded-full',
                    edge === 'sharp' && 'rounded-none'
                )}
            >
                {#if loading}
                    <!-- Customize icon snippet below -->
                    {@render IconSpinner()}
                {:else if checked}
                    <!-- Customize icon snippet below -->
                    {@render CheckMark()}
                {:else}
                    <!-- Customize icon snippet below -->
                    {@render CrossMark()}
                {/if}
            </div>
        </button>

        <!-- Customize label here -->
        {label}
    </label>

    {#if children}
        <!-- Customize description here -->
        <div class={twMerge('ml-14 text-muted', disabled && 'text-disabled-fg')}>
            {@render children?.()}
        </div>
    {/if}
</div>

<!-- Customize icon for check mark -->
{#snippet CheckMark()}
    <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 32 31" fill="none">
        <path
            in:draw={{ duration: 150, easing: circInOut }}
            stroke-width="5"
            d="M1 16L8 23L30.5 0.5"
            stroke="currentColor"
        />
    </svg>
{/snippet}

<!-- Customize icon for cross mark -->
{#snippet CrossMark()}
    <svg class="size-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
        <path
            in:draw={{ duration: 100, easing: circInOut }}
            stroke-width="4"
            d="M0.5 1L23.5 24"
            stroke="currentColor"
        />
        <path
            in:draw={{ delay: 100, duration: 100, easing: circInOut }}
            stroke-width="4"
            d="M23.5 1L0.5 24"
            stroke="currentColor"
        />
    </svg>
{/snippet}

<!-- Customize icon for loading -->
{#snippet IconSpinner()}
    <svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-primary animate-spin" viewBox="0 0 16 16">
        <path
            fill="currentColor"
            d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 ` +
                `0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 ` +
                `15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
        />
    </svg>
{/snippet}

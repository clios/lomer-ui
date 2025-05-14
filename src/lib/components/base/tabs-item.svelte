<script lang="ts">
    import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Variant = 'default' | 'secondary';

    type BaseProps = {
        children?: Snippet;
        group?: string;
        class?: string;
        href?: string;
        disabled?: boolean;
        loading?: boolean;
        value?: string;
        variant?: Variant;
    };

    type AnchorProps = HTMLAnchorAttributes & BaseProps;
    type ButtonProps = HTMLButtonAttributes & BaseProps;

    // If href is "" or undefined, use ButtonProps
    type Props<T extends AnchorProps> = T['href'] extends '' | undefined ? ButtonProps : AnchorProps;

    let {
        group = $bindable(),
        children,
        class: className,
        href,
        loading,
        disabled,
        value = '',
        variant = 'default',
        ...props
    }: Props<AnchorProps> = $props();

    let isActive = $derived(group === value);

    function onclick() {
        if (disabled || loading) return;
        group = value;
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
    this={href ? 'a' : 'button'}
    class={twMerge(
        'relative flex h-min w-max items-center gap-2', // layout and positioning
        ' px-3 py-1 text-base', // box sizing
        'outline-primary rounded border', // base style
        'cursor-pointer text-nowrap select-none', // behaviour
        'focus-visible:outline focus-visible:-outline-offset-1', // focus-visible
        'hover:outline hover:-outline-offset-1', // hover

        // IF ACTIVE
        isActive ? 'text-bg bg-fg border-primary' : 'text-secondary-fg bg-secondary border-secondary',

        // DISABLED
        disabled && 'bg-disabled text-disabled-fg border-disabled pointer-events-none cursor-default outline-none',

        // LOADING
        loading && 'bg-disabled text-disabled border-disabled pointer-events-none cursor-default outline-none',

        // OVERRIDE
        className
    )}
    {href}
    {onclick}
    tabindex={disabled ? -1 : undefined}
    aria-disabled={disabled ? 'true' : 'false'}
    role={href ? 'link' : 'button'}
    {...props}
>
    <!-- Customize icon snippet below -->
    {#if loading}{@render IconSpinner()}{/if}
    <!-- Customize content here -->
    {@render children?.()}
</svelte:element>

<!-- Customize icon for loading -->
{#snippet IconSpinner()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="text-primary absolute right-1/2 bottom-1/2 size-4 translate-x-1/2 translate-y-1/2 animate-spin"
        viewBox="0 0 16 16"
    >
        <path
            fill="currentColor"
            d="M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8"
        />
    </svg>
{/snippet}

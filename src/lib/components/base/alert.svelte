<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLDivElement> & {
        children?: Snippet;
        class?: string;
        closable?: boolean;
        open?: boolean;
        title?: string;
        variant?: 'default' | 'destructive';
    };

    let {
        children,
        class: className,
        closable = false,
        open = $bindable(true),
        title,
        variant = 'default'
    }: Props = $props();
</script>

{#if open}
    <!-- Customize container here -->
    <div
        class={twMerge(
            'bg-bg border-fg text-fg relative flex h-min w-full items-start gap-3 rounded border p-3',
            variant === 'destructive' && 'border-destructive text-destructive',
            closable && 'pr-12',
            className
        )}
    >
        <!-- Customize icon snippet below  -->
        {@render IconInfo()}

        <div>
            <!-- Customize title here -->
            {#if title}<p class="font-semibold">{title}</p>{/if}
            <!-- Customize content here -->
            {@render children?.()}
        </div>

        {#if closable}
            <!-- Customize close button here -->
            <button
                class="outline-primary absolute top-2 right-2 cursor-pointer rounded p-1 hover:outline"
                onclick={() => (open = false)}
            >
                {@render IconClose()}
            </button>
        {/if}
    </div>
{/if}

<!-- Customize alert icon -->
{#snippet IconInfo()}
    <svg class="size-6 min-w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
            fill="currentColor"
            d="M12.432 0c1.34 0 2.01.912 2.01 1.957c0 1.305-1.164 2.512-2.679 2.512c-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0M8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141c-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467c1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271c.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20"
        />
    </svg>
{/snippet}

<!-- Customize icon for closing -->
{#snippet IconClose()}
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7" />
    </svg>
{/snippet}

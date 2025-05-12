<script lang="ts">
    import type { Snippet } from 'svelte';
    import { fade, slide } from 'svelte/transition';
    import { twMerge } from 'tailwind-merge';

    type Props = {
        children?: Snippet;
        class?: string;
        open?: boolean;
        placement?: 'top' | 'bottom';
    };

    let { children, class: className, open = $bindable(false), placement = 'top' }: Props = $props();
</script>

{#if open}
    <!-- Customize container here -->
    <div
        transition:slide={{ duration: 150 }}
        class={twMerge(
            'fixed right-0 left-0 z-[999999999] flex w-full items-center justify-between', // layout and position
            'bg-bg/10 border p-2 backdrop-blur-3xl', // background
            placement === 'top' ? 'top-0' : 'bottom-0',
            className
        )}
    >
        <!-- Customize content here -->
        <div
            in:fade={{ delay: 200, duration: 300 }}
            out:fade={{ duration: 150 }}
            class="flex w-full flex-wrap items-center gap-2"
        >
            {@render children?.()}
        </div>
        <!-- Customize close button here -->
        <button class="outline-primary cursor-pointer rounded p-1 hover:outline" onclick={() => (open = false)}>
            {@render IconClose()}
        </button>
    </div>
{/if}

<!-- Customize icon for closing -->
{#snippet IconClose()}
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7" />
    </svg>
{/snippet}

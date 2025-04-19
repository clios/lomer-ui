<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLAttributes<HTMLElementTagNameMap['section']> & {
    children?: Snippet;
    class?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };

  let { children, class: className, level = 1, ...props }: Props = $props();
</script>

{#if level === 1}
  <div class="relative">
    <div class="hidden md:block top-4 -left-5 md:-left-8 lg:-left-16 absolute border-b border-dotted w-4 lg:w-12"></div>
    <div
      class="top-3 -left-5 md:-left-5 lg:-left-6 absolute bg-primary ring ring-muted ring-offset-2 ring-offset-bg size-2 rotate-45"
    ></div>
    <h1 class={twMerge('text-2xl', className)} {...props}>
      {@render children?.()}
    </h1>
  </div>
{:else if level === 2}
  <div class="relative">
    <div
      class="hidden md:block top-3.5 -left-5 md:-left-8 lg:-left-16 absolute border-b border-dotted w-4 lg:w-12"
    ></div>
    <div class="top-2.5 -left-5 md:-left-5 lg:-left-6 absolute bg-primary size-2 rotate-45"></div>
    <h2 class={twMerge('mt-8 text-xl', className)} {...props}>
      {@render children?.()}
    </h2>
  </div>
{:else if level === 3}
  <div class="relative">
    <div
      class="hidden md:block top-3.5 -left-5 md:-left-8 lg:-left-16 absolute border-b border-dotted w-4 lg:w-12"
    ></div>
    <div class="top-2.5 -left-5 md:-left-5 lg:-left-6 absolute bg-bg bg-none border size-2 rotate-45"></div>
    <h3 class={twMerge('mt-4 text-lg', className)} {...props}>
      {@render children?.()}
    </h3>
  </div>
{:else if level === 4}
  <h4 class={twMerge('text-xl', className)} {...props}>
    {@render children?.()}
  </h4>
{:else if level === 5}
  <h5 class={twMerge('text-lg', className)} {...props}>
    {@render children?.()}
  </h5>
{:else if level === 6}
  <h6 class={twMerge('text-base', className)} {...props}>
    {@render children?.()}
  </h6>
{/if}

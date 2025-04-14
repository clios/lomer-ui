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
    <div
      class="absolute top-4 -left-5 hidden w-6 animate-pulse border-b border-dotted md:-left-9 md:block lg:-left-17 lg:w-14"
    ></div>
    <div
      class="bg-muted ring-offset-bg ring-primary absolute top-3 -left-5 size-2 rotate-45 ring ring-offset-2 md:-left-9 lg:-left-17"
    ></div>
    <h1 class={twMerge('mb-2 text-2xl', className)} {...props}>
      {@render children?.()}
    </h1>
  </div>
{:else if level === 2}
  <div class="relative">
    <div
      class="absolute top-3.5 -left-5 hidden w-4 border-b border-dotted md:-left-9 md:block lg:-left-17 lg:w-12"
    ></div>
    <div class="bg-muted absolute top-2.5 -left-5 size-2 rotate-45 md:-left-9 lg:-left-17"></div>
    <h2 class={twMerge('mt-4 text-xl', className)} {...props}>
      {@render children?.()}
    </h2>
  </div>
{:else if level === 3}
  <h3 class={twMerge('text-2xl', className)} {...props}>
    {@render children?.()}
  </h3>
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

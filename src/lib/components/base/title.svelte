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
    <div class="absolute top-4 -left-5 hidden w-4 border-b border-dotted md:-left-8 md:block lg:-left-16 lg:w-12"></div>
    <div
      class="bg-primary ring-muted ring-offset-bg absolute top-3 -left-5 hidden size-2 rotate-45 ring ring-offset-2 sm:block md:-left-5 lg:-left-6"
    ></div>
    <h1 class={twMerge('text-2xl', className)} {...props}>
      {@render children?.()}
    </h1>
  </div>
{:else if level === 2}
  <div class="relative">
    <div
      class="absolute top-3.5 -left-5 hidden w-4 border-b border-dotted md:-left-8 md:block lg:-left-16 lg:w-12"
    ></div>
    <div class="bg-primary absolute top-2.5 -left-5 hidden size-2 rotate-45 sm:block md:-left-5 lg:-left-6"></div>
    <h2 class={twMerge('mt-8 text-xl', className)} {...props}>
      {@render children?.()}
    </h2>
  </div>
{:else if level === 3}
  <div class="relative">
    <div
      class="absolute top-3.5 -left-5 hidden w-4 border-b border-dotted md:-left-8 md:block lg:-left-16 lg:w-12"
    ></div>
    <div
      class="bg-bg absolute top-2.5 -left-5 hidden size-2 rotate-45 border bg-none sm:block md:-left-5 lg:-left-6"
    ></div>
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

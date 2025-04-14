<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";

  type Props = HTMLAttributes<HTMLElementTagNameMap["section"]> & {
    children?: Snippet;
    class?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };

  let { children, class: className, level = 1, ...props }: Props = $props();
</script>

{#if level === 1}
  <h1
    class={twMerge("text-4xl sm:text-5xl md:text-6xl lg:text-7xl", className)}
    {...props}
  >
    {@render children?.()}
  </h1>
{:else if level === 2}
  <h2 class={twMerge("text-3xl", className)} {...props}>
    {@render children?.()}
  </h2>
{:else if level === 3}
  <h3 class={twMerge("text-2xl", className)} {...props}>
    {@render children?.()}
  </h3>
{:else if level === 4}
  <h4 class={twMerge("text-xl", className)} {...props}>
    {@render children?.()}
  </h4>
{:else if level === 5}
  <h5 class={twMerge("text-lg", className)} {...props}>
    {@render children?.()}
  </h5>
{:else if level === 6}
  <h6 class={twMerge("text-base", className)} {...props}>
    {@render children?.()}
  </h6>
{/if}

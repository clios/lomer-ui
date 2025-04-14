<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";

  type Props = HTMLAttributes<HTMLElementTagNameMap["section"]> & {
    children?: Snippet;
    class?: string;
  };

  let { children, class: className, ...props }: Props = $props();
</script>

<section class={twMerge("m-2 sm:m-4 md:m-8 lg:m-16", className)} {...props}>
  {@render children?.()}
</section>

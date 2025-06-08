<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";

  type Props = SVGAttributes<SVGSVGElement> & {
    children?: Snippet;
    class?: string;
  };

  let { children, class: className, ...props }: Props = $props();
</script>

<!-- Note: Remove width and height -->
<!-- Note: Use class property to set size -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  class={twMerge("min-w-6 max-w-6", className)}
  viewBox="0 0 16 16"
  {...props}
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z"
    clip-rule="evenodd"
  />
</svg>

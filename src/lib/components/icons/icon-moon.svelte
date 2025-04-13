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

<!-- Note: update proper viewBox value -->
<svg
    xmlns="http://www.w3.org/2000/svg"
    class={twMerge("min-w-6", className)}
    viewBox="0 0 128 128"
    {...props}
>
    <path
        fill="currentColor"
        d="M73.65 87.67c15.97-9.9 23.77-26.72 24.39-42.28c.9-22.79-6.68-38.8-6.68-38.8s14.01 11.5 21.68 28.08s9 43.87-7.78 63.4c-18.45 21.45-43.18 22.72-58.73 18.7c-32.27-8.35-41.09-28.83-41.09-28.83s17.78 9.95 37.77 8.9c14.88-.78 22.54-4.27 30.44-9.17"
    />
</svg>

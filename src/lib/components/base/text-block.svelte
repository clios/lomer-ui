<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import type { Snippet } from "svelte";
    import { twMerge } from "tailwind-merge";

    type Props = HTMLAttributes<HTMLElementTagNameMap["p"]> & {
        children?: Snippet;
        class?: string;
    };

    let { children, class: className, ...props }: Props = $props();
</script>

<p
    class={twMerge("text-base sm:text-lg md:text-xl lg:text-2xl", className)}
    {...props}
>
    {@render children?.()}
</p>

<script lang="ts">
    import type { SVGAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = SVGAttributes<SVGSVGElement> & {
        children?: Snippet;
        class?: string;
    };

    let { children, class: className, ...props }: Props = $props();
</script>

<!-- Note: Remove width and height -->
<!-- Note: Use class property to set size -->
<svg xmlns="http://www.w3.org/2000/svg" class={twMerge('max-w-6 min-w-6', className)} viewBox="0 0 24 24" {...props}>
    <!-- Note: Use currentColor to inherit colors. -->
    <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
</svg>

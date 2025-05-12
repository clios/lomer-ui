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

<!-- Note: update proper viewBox value -->
<svg xmlns="http://www.w3.org/2000/svg" class={twMerge('max-w-6 min-w-6', className)} viewBox="0 0 24 24" {...props}>
    <path
        fill="currentColor"
        d="M12 1C5.923 1 1 5.923 1 12c0 4.868 3.149 8.979 7.521 10.436c.55.096.756-.233.756-.522c0-.262-.013-1.128-.013-2.049c-2.764.509-3.479-.674-3.699-1.292c-.124-.317-.66-1.293-1.128-1.554c-.385-.206-.935-.715-.013-.729c.866-.014 1.485.797 1.691 1.128c.99 1.663 2.571 1.196 3.204.907c.096-.715.385-1.196.701-1.471c-2.447-.275-5.005-1.224-5.005-5.431c0-1.197.426-2.187 1.128-2.957c-.11-.275-.495-1.402.11-2.915c0 0 .92-.288 3.024 1.128c.88-.248 1.816-.372 2.75-.372c.936 0 1.87.124 2.75.372c2.104-1.43 3.025-1.128 3.025-1.128c.605 1.513.22 2.64.11 2.915c.702.77 1.128 1.747 1.128 2.957c0 4.22-2.571 5.156-5.019 5.43c.399.345.743 1.005.743 2.036c0 1.471-.014 2.654-.014 3.025c0 .288.206.632.756.522A11.02 11.02 0 0 0 23 12c0-6.077-4.922-11-11-11"
    />
</svg>

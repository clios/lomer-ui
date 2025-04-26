<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = { class?: string } & SVGAttributes<SVGSVGElement>;

  let { class: className, ...props }: Props = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" class={twMerge('max-w-6 min-w-6', className)} viewBox="0 0 24 24" {...props}>
  <path
    fill="currentColor"
    d="M3 3h18v18H3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03zM13 11.25H8v1.5h1.5V20h1.75v-7.25H13z"
  />
</svg>

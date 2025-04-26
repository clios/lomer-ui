<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = { class?: string } & SVGAttributes<SVGSVGElement>;

  let { class: className, ...props }: Props = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" class={twMerge('text-fg', className)} viewBox="0 0 208 208" {...props}>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M104 0L0 104L104 208L208 104L104 0ZM82 126H52L30 104L104 30L178 104L156 126H126L148 104L104 60L60 104L82 126Z"
    fill="currentColor"
  />
</svg>

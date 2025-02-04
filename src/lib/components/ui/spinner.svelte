<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  type Props = { class?: string };
  let { class: className }: Props = $props();
</script>

<svg
  class={twMerge('text-primary size-4 animate-spin', className)}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
>
  <path
    fill="currentColor"
    d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 ` +
      `0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 ` +
      `15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
  />
</svg>

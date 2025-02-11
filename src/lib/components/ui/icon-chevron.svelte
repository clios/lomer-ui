<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  type Props = { class?: string };
  let { class: className }: Props = $props();
</script>

<svg
  class={twMerge(className)}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z"
  />
</svg>

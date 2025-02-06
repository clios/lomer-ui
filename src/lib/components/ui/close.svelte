<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  type Props = { class?: string };
  let { class: className }: Props = $props();
</script>

<svg
  class={twMerge('size-4', className)}
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
>
  <rect width="24" height="24" fill="none" />
  <path
    fill="none"
    stroke="currentColor"
    stroke-dasharray="12"
    stroke-dashoffset="12"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
  >
    <animate
      fill="freeze"
      attributeName="stroke-dashoffset"
      dur="0.3s"
      values="12;0"
    />
  </path>
</svg>

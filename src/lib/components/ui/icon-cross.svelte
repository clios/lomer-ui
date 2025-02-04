<script lang="ts">
  import { circInOut } from 'svelte/easing';
  import { draw } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  type Props = { class?: string };
  let { class: className }: Props = $props();
</script>

<svg
  class={twMerge(className)}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 25"
  fill="none"
>
  <path
    in:draw={{ duration: 150, easing: circInOut }}
    stroke-width="4"
    d="M0.5 1L23.5 24"
    stroke="currentColor"
  />
  <path
    in:draw={{ delay: 150, duration: 150, easing: circInOut }}
    stroke-width="4"
    d="M23.5 1L0.5 24"
    stroke="currentColor"
  />
</svg>

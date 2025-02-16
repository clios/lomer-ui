<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    class?: string;
  } & HTMLImgAttributes;

  let { class: className, ...props }: Props = $props();
</script>

<img class={twMerge('size-7 rounded', className)} {...props} />

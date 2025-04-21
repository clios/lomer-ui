<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLAttributes<HTMLImageElement> & {
    class?: string;
  };

  let { class: className, ...props }: Props = $props();
</script>

<img class={twMerge('size-7 rounded', className)} {...props} />

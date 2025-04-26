<script lang="ts">
  import type { HTMLTableAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLTableAttributes & {
    children?: Snippet;
    class?: string;
  };

  let { class: className, children, ...props }: Props = $props();
</script>

<div class="overflow-x-auto">
  <table class={twMerge('bg-bg w-full border-collapse', className)} {...props}>
    {@render children?.()}
  </table>
</div>

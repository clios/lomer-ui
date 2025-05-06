<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLAttributes<HTMLElementTagNameMap['section']> & {
    children?: Snippet;
    class?: string;
  };

  let { children, class: className, ...props }: Props = $props();
</script>

<div class="border-b border-dotted">
  <div class="mx-auto sm:px-4 container">
    <div class="sm:border-x sm:border-dotted w-full">
      <section class={twMerge('relative', className)} {...props}>
        {@render children?.()}
      </section>
    </div>
  </div>
</div>

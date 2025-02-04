<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  type Props = {
    class?: string;
    id?: string;
    title?: string;
    children?: Snippet;
  };
  let {
    class: className = '',
    id = '',
    children,
    title = ''
  }: Props = $props();
</script>

<section class="relative">
  <div class="absolute -top-14" {id}></div>
  {#if title}
    <div class="border-b border-dotted">
      <p
        class="border-dotted pb-1 text-xl font-semibold sm:ml-4 sm:border-l sm:pb-2 sm:pl-4"
      >
        {title}
      </p>
    </div>
  {/if}
  <div
    class={twMerge(
      'mx-auto flex flex-col gap-16 border-dotted py-4 sm:ml-4 sm:border-l sm:px-4',
      className
    )}
  >
    {@render children?.()}
  </div>
</section>

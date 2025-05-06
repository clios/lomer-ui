<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import type { Snippet } from 'svelte';
  import { goto } from '$app/navigation';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';

  type Props = {
    url: string;
    open: boolean;
    children: Snippet;
  };

  let { url, children, open = $bindable() }: Props = $props();

  function handleRouting(url: string) {
    open = false;
    goto(url);
  }
</script>

<Button
  onclick={() => handleRouting(url)}
  class={twMerge(
    'ml-1 w-[calc(100%-2rem)] px-2 py-0.5 outline-none',
    'underline-offset-2 hover:underline focus-visible:underline',
    'hover:text-primary focus-visible:text-primary',
    $page.url.pathname === url && 'text-primary'
  )}
  variant="ghost"
>
  {#if $page.url.pathname === url}
    <div class="bg-primary absolute -left-2.5 size-2 rotate-45 animate-ping rounded-full"></div>
    <div class="bg-muted absolute -left-2.5 size-2 rotate-45 animate-pulse rounded-full"></div>
  {/if}
  {@render children?.()}
</Button>

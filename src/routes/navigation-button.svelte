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
  class={twMerge('ml-4 w-[calc(100%-2rem)] py-0', $page.url.pathname === url && 'text-primary')}
  variant="ghost"
>
  {@render children?.()}
</Button>

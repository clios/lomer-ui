<script lang="ts">
  import Link from '$lib/components/ui/link.svelte';
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    status?: 'new' | 'draft';
    label: string;
    href: string;
    onclick?: () => void;
  };

  let { label, href, status, onclick }: Props = $props();
</script>

<Link
  {href}
  {onclick}
  caret
  class={twMerge(
    'items-center pl-8 no-underline outline-none',
    $page.url.pathname === href && 'text-primary'
  )}
>
  {label}
  {#if status === 'new'}
    <span
      class="text-primary-fg dark:text-fg bg-primary rounded px-1 py-0.5 text-[.6rem]"
    >
      NEW
    </span>
  {/if}
</Link>

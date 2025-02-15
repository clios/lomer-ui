<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';
  import felipec from 'svelte-highlight/styles/felipec';
  import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    class?: string;
    code?: string;
    title?: string;
    highlightedLines?: number[];
    startingLineNumber?: number;
  };

  let {
    class: className,
    code,
    title = 'Svelte Code',
    highlightedLines,
    startingLineNumber
  }: Props = $props();

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(code || '');
      copyMessage = 'Copied!';
      setTimeout(() => (copyMessage = ''), 1000);
    } catch (err) {
      console.error('Failed to copy code:', err);
      copyMessage = 'Failed to copy!';
    }
  }

  let copyMessage = $state('');
</script>

<svelte:head>
  {@html felipec}
</svelte:head>

<div class={twMerge('relative flex flex-col text-sm', className)}>
  <div
    class="bg-fg dark:bg-bg text-bg dark:text-fg flex justify-between rounded-t border-x border-t py-1.5 pr-1.5 pl-2.5"
  >
    <p>{title}</p>

    <Button size="icon" variant="ghost" onclick={copyToClipboard}>
      {#if copyMessage}
        <Icon class="text-teal-500" icon="mdi:check" />
      {:else}
        <Icon class="text-bg dark:text-fg" icon="mdi:clipboard-outline" />
      {/if}
    </Button>
  </div>

  <div class="overflow-hidden rounded-b border-x border-b">
    <HighlightSvelte {code} let:highlighted>
      <LineNumbers
        {highlighted}
        {highlightedLines}
        {startingLineNumber}
        --line-number-color="rgba(255, 255, 255, 0.3)"
        --border-color="rgba(255, 255, 255, 0.1)"
        --highlighted-background="rgba(6, 182, 212, 0.2)"
      />
    </HighlightSvelte>
  </div>
</div>

<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import githubDark from 'svelte-highlight/styles/github-dark';
  import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    class?: string;
    code?: string;
    title?: string;
    highlightedLines?: number[];
    startingLineNumber?: number;
  };

  let { class: className, code, title = 'Svelte Code', highlightedLines, startingLineNumber }: Props = $props();

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
  {@html githubDark}
</svelte:head>

<div class={twMerge('relative flex flex-col border text-sm sm:text-base', className)}>
  <div class="flex justify-between bg-fg dark:bg-bg py-1.5 pr-1.5 pl-2.5 text-bg dark:text-fg">
    <p>{title}</p>
    <Button class="text-bg" size="icon" variant="ghost" onclick={copyToClipboard}>
      {#if copyMessage}
        <span class="text-teal-500">Copied!</span>
      {:else}
        <span class="text-zinc-50">Copy</span>
      {/if}
    </Button>
  </div>

  <div class="overflow-hidden">
    <HighlightSvelte {code} let:highlighted>
      <LineNumbers
        {highlighted}
        {highlightedLines}
        {startingLineNumber}
        wrapLines
        --line-number-color="rgba(255, 255, 255, 0.3)"
        --border-color="rgba(255, 255, 255, 0.1)"
        --highlighted-background="rgba(6, 182, 212, 0.2)"
      />
    </HighlightSvelte>
  </div>
</div>

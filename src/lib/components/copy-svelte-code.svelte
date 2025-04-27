<script lang="ts">
  import Icon from '@iconify/svelte';
  import css from 'svelte-highlight/languages/css';
  import highlight from 'svelte-highlight/styles/github-dark';
  import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
  import { slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    class?: string;
    code: string;
    highlightedLines?: number[];
    open?: boolean;
    startingLineNumber?: number;
    title?: string;
    language?: 'svelte' | 'css';
  };

  let {
    class: className,
    code,
    highlightedLines,
    language = 'svelte',
    open = false,
    startingLineNumber,
    title = 'example.svelte'
  }: Props = $props();

  function getLanguage() {
    if (language === 'css') return css;
    console.log(language);
  }

  async function copyToClipboard(e: Event) {
    e.stopPropagation();
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
  {@html highlight}
</svelte:head>

<div class={twMerge('relative flex flex-col mt-2 border border-dotted text-sm sm:text-base', className)}>
  <div class="z-10 flex justify-between items-center gap-0.5">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <button
      onclick={() => (open = !open)}
      class="group flex justify-between items-center gap-2 p-2 w-full h-full cursor-pointer"
    >
      <div class="flex items-center gap-2 group-hover:underline underline-offset-2">
        {#if language === 'css'}
          <Icon class="size-6" icon="devicon:css3" />
        {:else}
          <Icon class="size-6" icon="devicon:svelte" />
        {/if}
        {title}
      </div>
      {#if open}
        <Icon class="size-6 text-muted" icon="mdi:arrow-collapse" />
      {:else}
        <Icon class="size-6 text-muted" icon="mdi:arrow-expand" />
      {/if}
    </button>
    <button class="p-2 text-muted cursor-pointer" onclick={copyToClipboard}>
      {#if copyMessage}
        <Icon class="size-6 text-green-500" icon="tabler:clipboard-check-filled" />
      {:else}
        <Icon class="size-6" icon="mingcute:copy-fill" />
      {/if}
    </button>
  </div>

  {#if open}
    <div transition:slide class="overflow-auto">
      <HighlightSvelte lang={getLanguage()} {code} let:highlighted>
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
    <button
      transition:slide
      class="z-10 flex justify-center items-center gap-2 py-2 cursor-pointer"
      onclick={() => (open = false)}
    >
      <Icon class="size-6 text-muted" icon="mdi:arrow-collapse-vertical" />
      Collapse
    </button>
  {/if}
</div>

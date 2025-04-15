<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    class?: string;
    code?: string;
  };

  let { class: className, code }: Props = $props();

  // Copy code to clipboard
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

<div
  class={twMerge(
    'flex items-center gap-1 bg-fg dark:bg-bg pr-1 border rounded w-full max-w-fit h-10 overflow-x-auto overflow-y-hidden text-sm not-italic',
    className
  )}
>
  <pre class="bg-fg dark:bg-bg px-4 text-bg dark:text-fg"><code>{code}</code></pre>

  <Button class="outline-none" size="icon" variant="ghost" onclick={copyToClipboard}>
    {#if copyMessage}
      <Icon class="text-teal-500" icon="mdi:check" />
    {:else}
      <Icon class="text-bg dark:text-fg" icon="mdi:clipboard-outline" />
    {/if}
  </Button>
</div>

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
    'bg-fg dark:bg-bg flex h-10 w-full max-w-fit items-center gap-1 overflow-x-auto overflow-y-hidden rounded border pr-1 text-sm not-italic',
    className
  )}
>
  <pre class="bg-fg dark:bg-bg text-bg dark:text-fg px-4"><code>{code}</code
    ></pre>

  <Button
    class="outline-none"
    size="icon"
    variant="ghost"
    onclick={copyToClipboard}
  >
    {#if copyMessage}
      <Icon class="text-teal-500" icon="mdi:check" />
    {:else}
      <Icon class="text-bg dark:text-fg" icon="mdi:clipboard-outline" />
    {/if}
  </Button>
</div>

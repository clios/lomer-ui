<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import Icon from '@iconify/svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    class?: string;
    code?: string;
    title?: string;
  };

  let { class: className, code, title = 'Via CLI' }: Props = $props();

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(
        `npx lomer-ui craft ${code} [name]` || ''
      );
      copyMessage = 'Copied!';
      setTimeout(() => (copyMessage = ''), 1000);
    } catch (err) {
      console.error('Failed to copy code:', err);
      copyMessage = 'Failed to copy!';
    }
  }

  let copyMessage = $state('');
</script>

<div class={twMerge('relative flex flex-col text-sm', className)}>
  <div
    class="bg-fg dark:bg-bg text-bg dark:text-fg flex justify-between rounded-t border-x border-t py-1.5 pr-1.5 pl-2.5"
  >
    <p>{title}</p>

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

  <div class="overflow-hidden rounded-b border-x border-b">
    <pre class="text-fg flex h-10 items-center overflow-auto bg-zinc-800 px-4">
        <code
        ><span>npx lomer-ui </span><span class="text-primary"
          >craft {code} </span><span class="text-muted">[name]</span></code
      ></pre>
  </div>
</div>

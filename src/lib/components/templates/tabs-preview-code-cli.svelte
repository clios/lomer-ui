<script>
  import Tab from '$lib/components/ui/tab.svelte';
  import Screen from '$lib/components/screen.svelte';
  import Button from '$lib/components/base/button.svelte';
  import { toggleMode, mode } from 'mode-watcher';
  import Icon from '@iconify/svelte';
  import CopyCLI from '../copy-c-l-i.svelte';

  let group = $state('tab-1');
</script>

<div class="mt-4">
  <div class="flex gap-1 border-b border-dotted px-2">
    <Tab bind:group value="tab-1">Preview</Tab>
    <Tab bind:group value="tab-2">Code</Tab>
    <Tab bind:group value="tab-3">CLI</Tab>
  </div>

  {#if group === 'tab-1'}
    <div class="border-dotted">
      <Screen>
        <Button size="icon" onclick={toggleMode}>
          {#if $mode === 'light'}
            <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
          {:else}
            <Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
          {/if}
        </Button>
      </Screen>
    </div>
  {/if}

  {#if group === 'tab-2'}
    <div class="border-dotted p-4"></div>
  {/if}

  {#if group === 'tab-3'}
    <div class="border-dotted p-4">
      <CopyCLI code="npx lomer-ui snippet button-toggle-mode" />
    </div>
  {/if}
</div>

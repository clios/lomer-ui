<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import Icon from '@iconify/svelte';
  import { toggleMode, mode } from 'mode-watcher';
</script>

<Button class="gap-2" size="small" onclick={toggleMode}>
  {#if $mode === 'light'}
    <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
    Light Mode
  {:else}
    <Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
    Dark Mode
  {/if}
</Button>

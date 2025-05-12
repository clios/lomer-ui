<script lang="ts">
    import Button from '$lib/components/base/button.svelte';
    import Icon from '@iconify/svelte';
    import { toggleMode, mode } from 'mode-watcher';
</script>

<Button class="h-6 rounded-l text-sm" edge="sharp" onclick={toggleMode}>
    {#if $mode === 'light'}
        <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
        Light
    {:else}
        <Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
        Dark
    {/if}
</Button>

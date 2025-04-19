<script>
  import Button from '$lib/components/base/button.svelte';
  import IconMenu from '$lib/components/icons/icon-menu.svelte';
  import { hotkey } from '$lib/actions/hotkey.svelte.ts';

  let { open = $bindable() } = $props();
</script>

<Button size="icon" variant="ghost" edge="sharp" title="Sidebar (Ctrl + B)" onclick={() => (open = !open)}>
  <IconMenu />

  <!-- HOT KEY -->
  <div
    class="hidden"
    use:hotkey={{
      code: 'KeyB',
      ctrlKey: true,
      onKeydown: () => (open = !open)
    }}
  ></div>
</Button>

<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';

  export let link;
</script>

<div class="mt-1 flex gap-2">
  <p class="text-muted">Or copy-paste the</p>
  <Button
    variant="secondary"
    size="small"
    onclick={() => window.open(link, '_blank')}
    class="w-min whitespace-nowrap"
    >Component Code <Icon icon="mdi:code" /></Button
  >
</div>

<script>
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';
</script>

<Button>Default</Button>
<Button size="icon">
  <Icon class="size-6" icon="mdi:power" />
</Button>
<Button size="small">Small</Button>

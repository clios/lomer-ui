<script>
  import Avatar from '$lib/components/base/avatar.svelte';
  import Button from '$lib/components/base/button.svelte';
  import Icon from '@iconify/svelte';
</script>

<!-- Default -->
<Button>Default</Button>

<!-- Icon -->
<Button size="icon">
  <Icon class="size-6" icon="mdi:power" />
</Button>

<!-- Small -->
<Button size="small">Small</Button>

<!-- Fit -->
<Button size="fit">
  <Avatar
    class="size-8"
    src="https://avatars.githubusercontent.com/u/16535340?v=4&size=64"
    alt="profile"
  />
</Button>

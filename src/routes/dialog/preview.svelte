<script>
  import Button from '$lib/components/base/button.svelte';
  import Dialog from '$lib/components/base/dialog.svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open dialog</Button>
<Dialog title="Title here" bind:open>Content here...</Dialog>

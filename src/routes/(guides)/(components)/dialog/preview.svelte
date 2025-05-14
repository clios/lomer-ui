<script>
    import Dialog from '$lib/components/base/dialog.svelte';
    let open = $state(false);
</script>

<button onclick={() => (open = true)}>Open dialog here</button>
<Dialog title="Title here" bind:open>Content here...</Dialog>

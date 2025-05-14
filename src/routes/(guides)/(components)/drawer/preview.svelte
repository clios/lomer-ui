<script>
    import Drawer from '$lib/components/base/drawer.svelte';
    let open = $state(false);
</script>

<button onclick={() => (open = true)}>Open drawer here</button>
<Drawer bind:open title="Title here">Content here...</Drawer>

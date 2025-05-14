<script>
    import Collapsible from '$lib/components/base/collapsible.svelte';
    let open = $state(false);
</script>

<button onclick={() => (open = !open)}>Toggle here</button>
<Collapsible class="border" collapseClass="mt-0 p-0" expandClass="mt-2 p-2" bind:open>Content</Collapsible>

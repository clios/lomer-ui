<script lang="ts">
    import Banner from '$lib/components/base/banner.svelte';
    let open = $state(false);
</script>

<button onclick={() => (open = true)}>Open banner here</button>
<Banner bind:open>
    <p>Open-source resource for crafting project-specific UI components.</p>
</Banner>

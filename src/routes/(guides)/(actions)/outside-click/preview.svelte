<script>
    import Checkbox from '$lib/components/base/checkbox.svelte';
    import { outsideClick } from '$lib/actions/outside-click.svelte';

    let checked = $state(false);

    function handleOutsideClick() {
        if (!checked) return;
        alert('Click outside detected.');
    }
</script>

<div class="border border-dashed p-4" use:outsideClick={handleOutsideClick}>
    <Checkbox bind:checked label="Enable outside click">
        {#if checked}
            Now click outside the box
        {:else}
            Disabled
        {/if}
    </Checkbox>
</div>

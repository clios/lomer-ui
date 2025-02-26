<script>
  import Checkbox from '$lib/components/base/checkbox.svelte';
  import { outsideClick } from '$lib/actions/outside-click.svelte';

  let checked = $state(false);

  function handleOutsideClick() {
    if (!checked) return;
    alert('Click outside detected.');
  }
</script>

<div class="border p-4" use:outsideClick={handleOutsideClick}>
  <Checkbox bind:checked label="Outside click">
    {#if checked}
      Enabled
    {:else}
      Disabled
    {/if}
  </Checkbox>
</div>

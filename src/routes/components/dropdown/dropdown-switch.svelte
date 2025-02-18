<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Dropdown from '$lib/components/base/dropdown.svelte';
  import DropdownSwitch from '$lib/components/base/dropdown-switch.svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Dropdown</Button>
<Dropdown bind:open>
  <DropdownSwitch label="Dark Mode" onchange={() => console.log('onchange')} />
  <DropdownSwitch label="Loading" loading />
  <DropdownSwitch label="Loading checked" loading checked />
  <DropdownSwitch label="Disabled" disabled />
  <DropdownSwitch label="Disabled checked" disabled checked />
</Dropdown>

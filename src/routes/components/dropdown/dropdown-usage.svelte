<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Dropdown from '$lib/components/base/dropdown.svelte';
  import DropdownItem from '$lib/components/base/dropdown-item.svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Dropdown</Button>
<Dropdown bind:open>
  <DropdownItem>Dropdown Item 1</DropdownItem>
  <DropdownItem>Dropdown Item 2</DropdownItem>
  <DropdownItem>Dropdown Item 3</DropdownItem>
  <DropdownItem variant="destructive">Destructive</DropdownItem>
  <DropdownItem loading>Requesting...</DropdownItem>
  <DropdownItem disabled>Disabled</DropdownItem>
</Dropdown>

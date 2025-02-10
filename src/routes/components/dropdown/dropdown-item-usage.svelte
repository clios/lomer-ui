<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import Dropdown from '$lib/components/ui/dropdown.svelte';
  import DropdownItem from '$lib/components/ui/dropdown-item.svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Dropdown</Button>
<Dropdown bind:open>
  <DropdownItem>Dropdown Item 1</DropdownItem>
  <DropdownItem disabled>Dropdown Item 2</DropdownItem>
  <DropdownItem loading>Dropdown Item 3</DropdownItem>
  <DropdownItem variant="destructive">Dropdown Item 4</DropdownItem>
  <DropdownItem>Dropdown Item 5</DropdownItem>
</Dropdown>

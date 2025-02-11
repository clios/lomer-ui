<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import Dropdown from '$lib/components/ui/dropdown.svelte';
  import DropdownItem from '$lib/components/ui/dropdown-item.svelte';

  let openLeft = $state(false);
  let openCenter = $state(false);
  let openRight = $state(false);
</script>

<!-- Left -->
<Button onclick={() => (openLeft = true)}>Left</Button>
<Dropdown placement="left" bind:open={openLeft}>
  <DropdownItem>Dropdown Item 1</DropdownItem>
  <DropdownItem>Dropdown Item 2</DropdownItem>
  <DropdownItem>Dropdown Item 3</DropdownItem>
</Dropdown>

<!-- Center -->
<Button onclick={() => (openCenter = true)}>Center</Button>
<Dropdown placement="center" bind:open={openCenter}>
  <DropdownItem>Dropdown Item 1</DropdownItem>
  <DropdownItem>Dropdown Item 2</DropdownItem>
  <DropdownItem>Dropdown Item 3</DropdownItem>
</Dropdown>

<!-- Right -->
<Button onclick={() => (openRight = true)}>Right</Button>
<Dropdown placement="right" bind:open={openRight}>
  <DropdownItem>Dropdown Item 1</DropdownItem>
  <DropdownItem>Dropdown Item 2</DropdownItem>
  <DropdownItem>Dropdown Item 3</DropdownItem>
</Dropdown>

<script lang="ts">
    import Button from '$lib/components/base/button.svelte';
    import Dropdown from '$lib/components/base/dropdown.svelte';
    import DropdownOption from '$lib/components/base/dropdown-option.svelte';
    import DropdownSwitch from '$lib/components/base/dropdown-switch.svelte';

    let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Dropdown</Button>
<Dropdown bind:open placement="left">
    <DropdownOption>Option</DropdownOption>
    <DropdownOption variant="destructive">Destructive option</DropdownOption>
    <DropdownOption loading>Option is loading</DropdownOption>
    <DropdownOption disabled>Option is disabled</DropdownOption>
    <DropdownSwitch>Switch</DropdownSwitch>
    <DropdownSwitch loading>Switch is loading</DropdownSwitch>
    <DropdownSwitch disabled>Switch is disabled</DropdownSwitch>
</Dropdown>

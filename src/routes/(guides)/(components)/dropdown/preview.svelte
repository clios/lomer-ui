<script lang="ts">
    import Dropdown from '$lib/components/base/dropdown.svelte';
    import DropdownOption from '$lib/components/base/dropdown-option.svelte';
    import DropdownSwitch from '$lib/components/base/dropdown-switch.svelte';
    let open = $state(false);
</script>

<button onclick={() => (open = true)}>Open dropdown here</button>
<Dropdown bind:open placement="left">
    <DropdownOption>Option</DropdownOption>
    <DropdownOption variant="destructive">Destructive option</DropdownOption>
    <DropdownOption loading>Option is loading</DropdownOption>
    <DropdownOption disabled>Option is disabled</DropdownOption>
    <DropdownSwitch>Switch</DropdownSwitch>
    <DropdownSwitch loading>Switch is loading</DropdownSwitch>
    <DropdownSwitch disabled>Switch is disabled</DropdownSwitch>
</Dropdown>

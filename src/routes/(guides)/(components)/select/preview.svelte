<script lang="ts">
    import Select from '$lib/components/base/select.svelte';
    let value = $state();
</script>

<Select bind:value>
    <optgroup label="Group">
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
        <option value="option 3" disabled>Option 3 disabled</option>
        <option value="option 4">Option 4</option>
    </optgroup>
</Select>
<p>Value: {value}</p>

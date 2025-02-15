<script lang="ts">
  import Select from '$lib/components/ui/select.svelte';

  let value = $state('');
</script>

<Select bind:value>
  <optgroup label="Colors">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green" disabled>Green</option>
    <option value="yellow">Yellow</option>
  </optgroup>
</Select>

<p>Value: {value}</p>

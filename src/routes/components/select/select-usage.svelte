<script lang="ts">
  import Select from '$lib/components/base/select.svelte';
</script>

<Select>
  <optgroup label="Colors">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green" disabled>Green</option>
    <option value="yellow">Yellow</option>
  </optgroup>
</Select>

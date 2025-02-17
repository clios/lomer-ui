<script lang="ts">
  import Select from '$lib/components/base/select.svelte';

  let value = $state('');
</script>

<Select bind:value>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</Select>

<p>Value: {value}</p>

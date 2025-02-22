<script lang="ts">
  import Checkbox from '$lib/components/base/checkbox.svelte';
  let checked = $state(false);
</script>

<Checkbox label="Label here" bind:checked>Helper text here</Checkbox>
<p>Checked: {checked}</p>

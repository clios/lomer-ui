<script lang="ts">
  import Switch from '$lib/components/base/switch.svelte';
  let checked = $state(false);
</script>

<Switch label="Label here" bind:checked>Optional helper text here</Switch>
<p>Checked: {checked}</p>

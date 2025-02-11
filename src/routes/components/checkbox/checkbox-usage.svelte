<script lang="ts">
  import Checkbox from '$lib/components/ui/checkbox.svelte';
</script>

<!-- Basic -->
<Checkbox label="Label here">Helper text here</Checkbox>

<!-- Loading -->
<Checkbox label="Loading" loading>Helper text here</Checkbox>

<!-- Disabled -->
<Checkbox label="Disabled" disabled></Checkbox>
<Checkbox label="Disabled" disabled checked></Checkbox>

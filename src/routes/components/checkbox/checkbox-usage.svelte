<script lang="ts">
  import Checkbox from '$lib/components/ui/checkbox.svelte';
</script>

<!-- Basic -->
<Checkbox label="Label here">Helper text here</Checkbox>

<!-- Disabled -->
<Checkbox label="Disabled" disabled>Helper text here</Checkbox>
<Checkbox label="Disabled" disabled checked>Helper text here</Checkbox>

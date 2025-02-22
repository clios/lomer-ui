<script lang="ts">
  import Checkbox from '$lib/components/base/checkbox.svelte';
</script>

<!-- Basic -->
<Checkbox label="Label">Additional description</Checkbox>

<!-- Disabled not checked -->
<Checkbox label="Disabled checkbox" disabled>
  This is disabled not checked.
</Checkbox>

<!-- Disabled checked -->
<Checkbox label="Disabled checkbox" disabled checked>
  This is disabled checked.
</Checkbox>

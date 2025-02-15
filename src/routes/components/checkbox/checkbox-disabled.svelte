<script lang="ts">
  import Checkbox from '$lib/components/base/checkbox.svelte';
</script>

<Checkbox label="Disabled checkbox" disabled>
  This is disabled not checked.
</Checkbox>

<Checkbox label="Disabled checkbox" disabled checked>
  This is disabled checked.
</Checkbox>

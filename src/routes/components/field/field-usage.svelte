<script lang="ts">
  import Field from '$lib/components/base/field.svelte';
  import Input from '$lib/components/base/input.svelte';
</script>

<!-- Basic -->
<Field label="Label here" helper="Helper here" issue="Issue here">
  Content here
</Field>

<!-- Required -->
<Field label="Email" required>
  <Input />
</Field>

<!-- Optional -->
<Field label="Name" optional>
  <Input />
</Field>

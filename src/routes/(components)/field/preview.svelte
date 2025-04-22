<script lang="ts">
  import Field from '$lib/components/base/field.svelte';
  import Input from '$lib/components/base/input.svelte';
</script>

<Field label="Name" optional>
  <Input />
</Field>

<Field label="Email" helper="Verification link will be sent here" required>
  <Input type="email" />
</Field>

<Field label="Password" issue="Password is too short" required>
  <Input />
</Field>

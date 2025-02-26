<script>
  import Field from '$lib/components/base/field.svelte';
  import Input from '$lib/components/base/input.svelte';
  import { verticalNavigation } from '$lib/actions/vertical-navigation.svelte.ts';
</script>

<form class="flex flex-col gap-4" use:verticalNavigation>
  <div class="mb-2">
    <p>Focus inside form.</p>
    <p>Then use up/down arrow keys to navigate.</p>
  </div>
  <Field label="Field 1">
    <Input />
  </Field>
  <Field label="Field 2">
    <Input />
  </Field>
  <Field label="Field 3">
    <Input />
  </Field>
  <Field label="Field 4">
    <Input />
  </Field>
</form>

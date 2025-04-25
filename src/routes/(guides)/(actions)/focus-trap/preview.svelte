<script>
  import Button from '$lib/components/base/button.svelte';
  import Field from '$lib/components/base/field.svelte';
  import Input from '$lib/components/base/input.svelte';
  import { focusTrap } from '$lib/actions/focus-trap.svelte';
</script>

<!-- Use focusTrap to keep focus within the form -->
<form use:focusTrap class="flex flex-col gap-2 p-4 border">
  <p>Press tab key to cycle through focusable elements.</p>
  <Field label="Email">
    <Input type="email" />
  </Field>
  <Field label="Password">
    <Input type="password" />
  </Field>
  <Field class="flex justify-end mt-4">
    <Button>Sign In</Button>
  </Field>
</form>

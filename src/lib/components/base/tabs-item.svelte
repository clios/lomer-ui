<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import Button from '$lib/components/base/button.svelte';

  type Props = {
    active?: string;
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    value?: string;
  } & HTMLButtonAttributes;

  let {
    active = $bindable(),
    children,
    class: className,
    disabled = false,
    value = '',
    ...props
  }: Props = $props();

  function onclick() {
    if (active || value) {
      active = value;
    }
    onclick;
  }
</script>

<Button
  class="text-nowrap"
  variant={active === value ? 'default' : 'secondary'}
  {onclick}
  {...props}
  {disabled}
>
  {@render children?.()}
</Button>

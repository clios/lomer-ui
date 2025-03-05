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
    onclick?: () => void;
  } & HTMLButtonAttributes;

  let {
    active = $bindable(),
    children,
    class: className,
    disabled = false,
    value = '',
    onclick,
    ...props
  }: Props = $props();

  function handleOnClick() {
    active = value;
    onclick?.();
  }
</script>

<Button
  class="text-nowrap"
  variant={active === value ? 'default' : 'secondary'}
  onclick={handleOnClick}
  {...props}
  {disabled}
>
  {@render children?.()}
</Button>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fade, slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Orientation = 'vertical' | 'horizontal';

  type Props = {
    children?: Snippet;
    class?: string;
    helper?: string | boolean | number;
    issue?: string;
    label?: string;
    optional?: boolean;
    orientation?: Orientation;
    required?: boolean;
  };

  let {
    children,
    class: className,
    helper,
    issue,
    label,
    optional = false,
    orientation = 'vertical',
    required = false
  }: Props = $props();
</script>

<div
  class={twMerge(
    // BASE
    'text-fg flex gap-1', // layout

    // ORIENTATION
    orientation === 'vertical' ? 'flex-col' : 'items-start'
  )}
>
  {#if label}
    <p
      class={twMerge(
        // BASE
        'semibold flex text-sm',

        // ORIENTATION
        orientation === 'vertical' ? 'text-left' : 'mt-[.5rem] mr-2 text-right'
      )}
    >
      {label}

      <!-- REQUIRED INDICATOR -->
      {#if required}<span class="text-destructive ml-1">*</span>{/if}

      <!-- OPTIONAL INDICATOR -->
      {#if optional}
        <span class="text-muted ml-1 rounded-sm px-1 py-[2px] text-xs">
          Optional
        </span>
      {/if}
    </p>
  {/if}

  <div class="flex flex-col gap-1">
    <div class={twMerge(className)}>
      {@render children?.()}
    </div>

    {#if helper || helper === false || helper === 0}
      <p
        in:fade={{ delay: 200, duration: 200 }}
        out:slide={{ axis: 'x', duration: 1000 }}
        class="text-muted overflow-hidden text-left text-sm text-nowrap"
      >
        {helper}
      </p>
    {/if}

    {#if issue}
      <p
        in:fade={{ delay: 200, duration: 200 }}
        out:slide={{ axis: 'x', duration: 1000 }}
        class="text-destructive overflow-hidden text-left text-sm text-nowrap"
      >
        {issue}
      </p>
    {/if}
  </div>
</div>

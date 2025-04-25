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

<!-- Customize container here -->
<div class={twMerge('flex gap-1 mt-2 text-fg', orientation === 'vertical' ? 'flex-col' : 'items-start')}>
  {#if label}
    <!-- Customize label here -->
    <p
      class={twMerge('flex text-sm semibold', orientation === 'vertical' ? 'text-left' : 'mt-[.5rem] mr-2 text-right')}
    >
      {label}
      <!-- Customize required field here -->
      {#if required}<span class="ml-1 text-destructive">*</span>{/if}
      <!-- Customize optional field here -->
      {#if optional}
        <span class="ml-1 px-1 py-[2px] rounded-sm text-muted text-xs"> Optional </span>
      {/if}
    </p>
  {/if}

  <div class="flex flex-col gap-1">
    <!-- Customize content here -->
    <div class={twMerge(className)}>
      {@render children?.()}
    </div>

    {#if helper || helper === false || helper === 0}
      <!-- Customize helper here -->
      <p
        in:fade={{ delay: 200, duration: 200 }}
        out:slide={{ axis: 'x', duration: 1000 }}
        class="overflow-hidden text-muted text-sm text-left text-nowrap"
      >
        {helper}
      </p>
    {/if}

    {#if issue}
      <!-- Customize issue here -->
      <p
        in:fade={{ delay: 200, duration: 200 }}
        out:slide={{ axis: 'x', duration: 1000 }}
        class="overflow-hidden text-destructive text-sm text-left text-nowrap"
      >
        {issue}
      </p>
    {/if}
  </div>
</div>

<script>
  import { twMerge } from 'tailwind-merge';
  let { class: className = '', children } = $props();
</script>

<div class="mt-8">
  <div class="flex items-center">
    <p class="text-border font-mono text-nowrap">/// DEMO START ///</p>
    <div class="border-b border-dotted w-full"></div>
  </div>
  <div class={twMerge('flex my-4', className)}>
    {@render children?.()}
  </div>
  <div class="flex items-center">
    <div class="border-b border-dotted w-full"></div>
    <p class="text-border font-mono text-nowrap">/// DEMO END ///</p>
  </div>
</div>

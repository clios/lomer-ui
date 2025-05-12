<script>
    import { twMerge } from 'tailwind-merge';
    let { class: className = '', children } = $props();
</script>

<div class="my-16">
    <div class="flex items-center">
        <div class="w-8 border-b border-dotted"></div>
        <p class="text-border font-mono text-nowrap">/// <span class="text-muted">DEMO</span> ///</p>
        <div class="w-full border-b border-dotted"></div>
    </div>
    <div class={twMerge('my-8 flex sm:mx-4 md:mx-8', className)}>
        {@render children?.()}
    </div>
    <div class="flex items-center">
        <div class="w-full border-b border-dotted"></div>
        <p class="text-border font-mono text-nowrap">///</p>
        <div class="w-8 border-b border-dotted"></div>
    </div>
</div>

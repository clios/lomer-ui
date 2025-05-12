<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    let { class: className, ...props }: HTMLImgAttributes = $props();
</script>

<img class={twMerge('size-7 rounded', className)} {...props} />

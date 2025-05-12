<script lang="ts">
    import Link from '$lib/components/base/link.svelte';
    import Icon from '@iconify/svelte';
</script>

<div class="container mx-auto sm:px-4">
    <div class="w-full p-4 md:p-8 lg:p-16">
        <p class="mb-4 flex items-center gap-2">
            Share treats:
            <Link
                class="text-muted hover:text-primary transition-all"
                href="https://github.com/sponsors/clios"
                target="_blank"
            >
                <Icon class="size-6" icon="mdi:heart" />
            </Link>
            <Link class="text-muted hover:text-primary transition-all" href="https://ko-fi.com/clios" target="_blank">
                <Icon class="size-6" icon="raphael:coffee" />
            </Link>
        </p>
        <p class="italic">Copyright © 2025 - Cliemtor Fabros</p>
    </div>
</div>

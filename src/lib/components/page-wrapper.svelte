<script lang="ts">
    import { twMerge } from 'tailwind-merge';
    import Button from '$lib/components/base/button.svelte';
    import { goto } from '$app/navigation';
    import Icon from '@iconify/svelte';

    let {
        class: className = '',
        children,
        tickler = [],
        sub = '',
        title = '',
        info = '',
        prevLabel = '',
        prevLink = '',
        nextLabel = '',
        nextLink = ''
    } = $props();

    function scrollToId(id: string) {
        const element = document.getElementById(id);
        if (!element) return;
        element.scrollIntoView({ behavior: 'smooth' });
    }

    function scrollToTop() {
        const element = document.getElementById('page');
        if (!element) return;
        element.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<div class="mx-auto flex w-full gap-8">
    <section class={twMerge('mb-16 ml-auto flex w-full flex-col gap-16 lg:mr-auto', className)}>
        <div>
            <p class="text-muted text-sm">{sub}</p>
            <p class="text-primary font-mono text-2xl font-semibold md:text-3xl">
                {title}
            </p>
            <p class="text-muted">{info}</p>
        </div>

        {@render children?.()}

        <div class="flex justify-between gap-2 pt-16 xl:gap-8">
            {#if prevLabel || prevLink}
                <Button class="flex w-full flex-col items-start" variant="ghost" onclick={() => goto(prevLink)}>
                    <p class="text-muted pl-2 text-sm">Previous</p>
                    <div class="flex items-center">
                        <Icon icon="mdi:chevron-left" width={24} />
                        {prevLabel}
                    </div>
                </Button>
            {:else}
                <div class="w-full"></div>
            {/if}
            {#if nextLabel || nextLink}
                <Button class="flex w-full flex-col items-end" variant="ghost" onclick={() => goto(nextLink)}>
                    <p class="text-muted pr-2 text-sm">Next</p>
                    <div class="flex items-center">
                        {nextLabel}
                        <Icon icon="mdi:chevron-right" width={24} />
                    </div>
                </Button>
            {:else}
                <div class="w-full"></div>
            {/if}
        </div>
    </section>

    {#if tickler.length > 0}
        <div class="relative mr-auto hidden xl:block xl:max-w-[260px] xl:min-w-[260px]">
            <div class="sticky xl:top-16 2xl:top-23">
                <div class="border-b border-dotted">
                    <p class="text-muted mr-4 border-r border-dotted px-4 pb-1 text-sm">
                        <Button
                            class={twMerge(
                                'text-muted hover:text-primary focus:text-primary h-min border-r p-0 text-left text-sm outline-none'
                            )}
                            variant="ghost"
                            size="small"
                            onclick={() => scrollToTop()}>Page Content</Button
                        >
                    </p>
                </div>
                <div
                    class="mr-4 flex flex-col gap-2 overflow-y-auto border-r border-dotted pt-2 pr-4 pb-4 xl:h-[calc(100vh-8rem)] 2xl:h-[calc(100vh-12rem)] [&::-webkit-scrollbar]:w-0"
                >
                    {#each tickler as t}
                        <Button
                            class={twMerge(
                                'text-muted hover:text-primary focus:text-primary h-min w-full p-0 px-4 text-left text-sm outline-none',
                                t.sub && 'ml-4 pr-8 pl-4'
                            )}
                            variant="ghost"
                            size="small"
                            onclick={() => scrollToId(t.id)}>{t.label}</Button
                        >
                    {/each}
                    <div class="relative">
                        <div class="absolute -right-4 w-[calc(100%+2rem)] border-b border-dotted"></div>
                    </div>
                    <Button
                        class={twMerge(
                            'text-muted hover:text-primary focus:text-primary h-min w-full p-0 px-4 text-left text-sm outline-none'
                        )}
                        variant="ghost"
                        size="small"
                        onclick={() => scrollToTop()}
                    >
                        <Icon class="size-4" icon="mdi:arrow-top" />
                        Back to top</Button
                    >
                </div>
            </div>
        </div>
    {/if}
</div>

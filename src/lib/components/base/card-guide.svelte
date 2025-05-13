<script lang="ts">
    import { PaneGroup, Pane, PaneResizer } from 'paneforge';

    let { children } = $props();
    let clientWidth: number = $state(0);

    let containerSize = $derived(computeContainer());

    function computeContainer() {
        if (clientWidth >= 1280) {
            return '7xl';
        } else if (clientWidth >= 1152) {
            return '6xl';
        } else if (clientWidth >= 1024) {
            return '5xl';
        } else if (clientWidth >= 896) {
            return '4xl';
        } else if (clientWidth >= 768) {
            return '3xl';
        } else if (clientWidth >= 672) {
            return '2xl';
        } else if (clientWidth >= 576) {
            return 'xl';
        } else if (clientWidth >= 512) {
            return 'lg';
        } else if (clientWidth >= 448) {
            return 'md';
        } else if (clientWidth >= 384) {
            return 'sm';
        } else if (clientWidth >= 320) {
            return 'xs';
        } else if (clientWidth >= 288) {
            return '2xs';
        } else if (clientWidth >= 256) {
            return '3xs';
        } else {
            return 'Below 3xs';
        }
    }
</script>

<div class="border-muted-fg w-full border-t">
    <!-- <div class="w-screen -translate-x-4 sm:w-full sm:translate-none"> -->
    <PaneGroup direction="horizontal" class="w-full">
        <Pane defaultSize={100} class="bg-bg relative">
            <div bind:clientWidth class="relative h-full w-full min-w-[256px]">
                <p class="bg-bg/80 absolute top-2 right-2 z-10 px-1 text-xs text-fuchsia-500 backdrop-blur">
                    {containerSize} - {clientWidth}px
                </p>
                {@render children?.()}
            </div>
        </Pane>
        <PaneResizer
            class="group bg-muted-fg relative flex w-4 items-center justify-center border-dotted transition-all"
        >
            <div
                class="bg-muted group-hover:bg-primary z-10 h-12 w-2 rounded border transition-all group-hover:h-18"
            ></div>
        </PaneResizer>
        <Pane defaultSize={0}>
            <div
                class="bg-general-500 dark:bg-muted relative h-full w-full overflow-hidden bg-[radial-gradient(#D4D4D8_1px,transparent_1px)] [background-size:16px_16px] bg-fixed dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]"
            ></div>
        </Pane>
    </PaneGroup>
    <!-- </div> -->
</div>

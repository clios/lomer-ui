<script>
    import Button from '$lib/components/base/button.svelte';
    import CardBoard from '$lib/components/card-board.svelte';
    import CopyCLI from '$lib/components/copy-c-l-i.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import HighlightText from '$lib/components/highlight-text.svelte';
    import Link from '$lib/components/base/link.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import { toggleMode, mode } from 'mode-watcher';
</script>

<svelte:head>
    <title>Lomer UI - Dark Mode Implementation</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Setup</p>
    <LomerTitle>Dark Mode Implementation</LomerTitle>
    <Paragraph>Adding dark mode to your site using mode-watcher.</Paragraph>
</LomerSection>

<LomerSection>
    <LomerTitle>Usage</LomerTitle>
    <LomerTitle level={2}>Install mode-watcher</LomerTitle>
    <CopyCLI code="npm install mode-watcher" />
    <Paragraph>
        See <Link target="_blank" href="https://mode-watcher.svecosystem.com">Mode Watcher</Link> for details.
    </Paragraph>
    <LomerTitle level={2}>Add ModeWatcher component</LomerTitle>
    <Paragraph>
        Add the <HighlightText>{`<ModeWatcher />`}</HighlightText>
        component to your root layout file.
    </Paragraph>
    <CopySvelteCode
        open
        title="+layout.svelte"
        code={`<script\ lang="ts">` +
            `\n\timport { ModeWatcher } from "mode-watcher";` +
            `\n\tlet { children } = $props();` +
            `\n</script>` +
            `\n` +
            `\n<ModeWatcher defaultMode="system" />` +
            `\n{@render children()}`}
    />
    <LomerTitle level={2}>That's it!</LomerTitle>
    <Paragraph>
        Use the <HighlightText>toggleMode</HighlightText> function and <HighlightText>$mode</HighlightText> to toggle:
    </Paragraph>
    <CardBoard class="justify-center">
        <Button onclick={toggleMode}>
            {#if $mode === 'light'}
                Light
            {:else}
                Dark
            {/if}
        </Button>
    </CardBoard>
    <CopySvelteCode
        open
        code={`<script\ lang="ts">` +
            `\n\timport Button from '$lib/components/base/button.svelte';` +
            `\n\timport { toggleMode, mode } from 'mode-watcher';` +
            `\n</script>` +
            `\n` +
            `\n<Button onclick={toggleMode}>` +
            `\n\t{#if mode.current === 'light'}` +
            `\n\t\tLight` +
            `\n\t{:else}` +
            `\n\t\tDark` +
            `\n\t{/if}` +
            `\n</Button>`}
    />
</LomerSection>

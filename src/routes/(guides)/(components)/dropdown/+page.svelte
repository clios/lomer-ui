<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import DropdownOptionRaw from '$lib/components/base/dropdown-option.svelte?raw';
    import DropdownRaw from '$lib/components/base/dropdown.svelte?raw';
    import DropdownSwitchRaw from '$lib/components/base/dropdown-switch.svelte?raw';
    import Link from '$lib/components/base/link.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
</script>

<svelte:head>
    <title>Lomer UI - Dropdown</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Dropdown</LomerTitle>
    <Paragraph>A compact menu for quick options.</Paragraph>
    <CardDemo class="flex-col items-start">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>
        1. Create <Link href="/escape-key" target="_blank">escape key</Link> action to close the dropdown by pressing escape
        key.
    </Paragraph>
    <Paragraph>
        2. Create <Link href="/focus-trap" target="_blank">focus trap</Link> action to trap the focus inside dropdown component.
    </Paragraph>
    <Paragraph>
        3. Create <Link href="/outside-click" target="_blank">outside click</Link> action to close dropdown component.
    </Paragraph>
    <Paragraph>
        4. Create <Link href="/vertical-navigation" target="_blank">vertical navigation</Link> action to focus elements using
        up and down arrow keys.
    </Paragraph>
    <Paragraph>5. Create dropdown component.</Paragraph>
    <CopySvelteCode title="dropdown.svelte" code={DropdownRaw} />
    <Paragraph>6. Create dropdown option component.</Paragraph>
    <CopySvelteCode title="dropdown-option.svelte" code={DropdownOptionRaw} />
    <Paragraph>7. Create dropdown switch component.</Paragraph>
    <CopySvelteCode title="dropdown-switch.svelte" code={DropdownSwitchRaw} />
</LomerSection>

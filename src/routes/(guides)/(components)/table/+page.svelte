<script lang="ts">
    import CardDemo from '$lib/components/card-demo.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import LomerSection from '$lib/components/site/lomer-section.svelte';
    import LomerTitle from '$lib/components/site/lomer-title.svelte';
    import Paragraph from '$lib/components/base/paragraph.svelte';
    import Preview from './preview.svelte';
    import PreviewRaw from './preview.svelte?raw';
    import TableBodyRaw from '$lib/components/base/table-body.svelte?raw';
    import TableDataRaw from '$lib/components/base/table-data.svelte?raw';
    import TableHeadRaw from '$lib/components/base/table-head.svelte?raw';
    import TableHeaderRaw from '$lib/components/base/table-header.svelte?raw';
    import TableRaw from '$lib/components/base/table.svelte?raw';
    import TableRowRaw from '$lib/components/base/table-row.svelte?raw';
</script>

<svelte:head>
    <title>Lomer UI - Table</title>
</svelte:head>

<LomerSection>
    <p class="text-muted mb-2 text-xs">Component</p>
    <LomerTitle>Table</LomerTitle>
    <Paragraph>Organize and display data in a structured grid.</Paragraph>
    <CardDemo class="max-w-96 flex-col gap-4">
        <Preview />
    </CardDemo>
    <CopySvelteCode open code={PreviewRaw} />
</LomerSection>

<LomerSection>
    <LomerTitle>Guide</LomerTitle>
    <Paragraph>1. Create table component.</Paragraph>
    <CopySvelteCode title="table.svelte" code={TableRaw} />
    <Paragraph>2. Create table head component.</Paragraph>
    <CopySvelteCode title="table-head.svelte" code={TableHeadRaw} />
    <Paragraph>3. Create table body component.</Paragraph>
    <CopySvelteCode title="table-body.svelte" code={TableBodyRaw} />
    <Paragraph>4. Create table row component.</Paragraph>
    <CopySvelteCode title="table-row.svelte" code={TableRowRaw} />
    <Paragraph>5. Create table header component.</Paragraph>
    <CopySvelteCode title="table-header.svelte" code={TableHeaderRaw} />
    <Paragraph>6. Create table data component.</Paragraph>
    <CopySvelteCode title="table-data.svelte" code={TableDataRaw} />
</LomerSection>

<script lang="ts">
  import Table from '$lib/components/base/table.svelte';
  import TableHead from '$lib/components/base/table-head.svelte';
  import TableRow from '$lib/components/base/table-row.svelte';
  import TableBody from '$lib/components/base/table-body.svelte';
  import TableData from '$lib/components/base/table-data.svelte';
  import TableHeader from '$lib/components/base/table-header.svelte';

  type TableParameters = {
    parameter?: string;
    type?: string;
    description?: string;
  };

  let { data = [{}] }: { data: TableParameters[] } = $props();
</script>

<Table>
  <TableHead>
    <TableRow>
      <TableHeader>Parameter</TableHeader>
      <TableHeader>Type</TableHeader>
      <TableHeader>Description</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody outline>
    {#each data as item}
      <TableRow>
        <TableData><code>{item.parameter}</code></TableData>
        <TableData><code>{item.type}</code></TableData>
        <TableData class="min-w-72">{item.description}</TableData>
      </TableRow>
    {/each}
  </TableBody>
</Table>

<script lang="ts">
  import Table from '$lib/components/base/table.svelte';
  import TableBody from '$lib/components/base/table-body.svelte';
  import TableData from '$lib/components/base/table-data.svelte';
  import TableHead from '$lib/components/base/table-head.svelte';
  import TableHeader from '$lib/components/base/table-header.svelte';
  import TableRow from '$lib/components/base/table-row.svelte';

  const data = [
    { month: 'January', expense: 513, savings: 96 },
    { month: 'February', expense: 768, savings: 32 },
    { month: 'March', expense: 635, savings: 51 },
    { month: 'April', expense: 678, savings: 64 },
    { month: 'May', expense: 584, savings: 57 },
    { month: 'June', expense: 559, savings: 43 },
    { month: 'July', expense: 497, savings: 76 }
  ];
</script>

<Table>
  <TableHead>
    <TableRow>
      <TableHeader>Month</TableHeader>
      <TableHeader class="text-right">Expense $</TableHeader>
      <TableHeader class="text-right">Savings $</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody zebra>
    {#each data as d}
      <TableRow>
        <TableData>{d.month}</TableData>
        <TableData class="text-right font-mono">{d.expense}</TableData>
        <TableData class="text-right font-mono">{d.savings}</TableData>
      </TableRow>
    {/each}
  </TableBody>
</Table>

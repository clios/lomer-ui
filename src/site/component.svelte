<script lang="ts">
  type Props = { code: string };
  let { code }: Props = $props();
</script>

<span class="font-mono text-cyan-600 dark:text-cyan-400">
  {code}
</span>

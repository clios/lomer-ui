<script lang="ts">
  import { scrollToId } from './helper.ts';

  let { title, id }: { title: string; id: string } = $props();
</script>

<button
  onclick={() => scrollToId(id)}
  class="cursor-pointer text-left font-semibold text-zinc-500 hover:text-cyan-500 dark:text-zinc-400"
>
  {title}
</button>

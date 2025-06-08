<script lang="ts">
  import { slide, fade } from "svelte/transition";
  type Props = { loading: boolean };
  let { loading }: Props = $props();
</script>

{#if loading}
  <div
    in:slide={{ duration: 1000, axis: "x" }}
    out:fade
    class="top-0 left-0 fixed bg-gradient-to-r from-primary via-90% via-primary to-cyan-600 w-screen h-[2px]"
  ></div>
{/if}

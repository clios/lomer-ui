<script lang="ts">
  export let title = '';
  export let sub = '';
  export let info = '';
</script>

<div>
  <p class="text-muted text-sm">{sub}</p>
  <p class="text-primary font-mono text-2xl font-semibold md:text-3xl">
    {title}
  </p>
  <p class="text-muted">{info}</p>
</div>

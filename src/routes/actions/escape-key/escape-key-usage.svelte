<script>
  import { escapeKey } from '$lib/actions/escape-key.svelte.ts';
</script>

<div use:escapeKey={() => alert('^_^')}>
  <p>Press escape key</p>
</div>

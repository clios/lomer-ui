<script>
  import { hotKey } from '$lib/actions/hot-key.svelte';
</script>

<!-- Basic -->
<div use:hotKey={{ key: 'f', onKeydown: () => alert('F') }}>
  <p>Press "F".</p>
</div>

<!-- With Ctrl -->
<div
  use:hotKey={{
    key: 'f',
    ctrlKey: true,
    onKeydown: () => alert('Ctrl + F')
  }}
>
  <p>Press "Ctrl + F".</p>
</div>

<!-- With multiple -->
<div
  use:hotKey={{
    key: 'f',
    shiftKey: true,
    altKey: true,
    onKeydown: () => alert('Shift + Alt + F')
  }}
>
  <p>Press "Shift + Alt + F".</p>
</div>

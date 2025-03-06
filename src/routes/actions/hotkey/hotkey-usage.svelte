<script>
  import { hotkey } from '$lib/actions/hotkey.svelte';
</script>

<!-- Basic -->
<div use:hotkey={{ code: 'KeyF', onKeydown: () => alert('F') }}>
  <p>Press "F".</p>
</div>

<!-- With Ctrl -->
<div
  use:hotkey={{
    code: 'KeyF',
    ctrlKey: true,
    onKeydown: () => alert('Ctrl + F')
  }}
>
  <p>Press "Ctrl + F".</p>
</div>

<!-- With multiple -->
<div
  use:hotkey={{
    code: 'KeyF',
    shiftKey: true,
    altKey: true,
    onKeydown: () => alert('Shift + Alt + F')
  }}
>
  <p>Press "Shift + Alt + F".</p>
</div>

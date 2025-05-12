<script lang="ts">
    import '../app.css';
    import '@fontsource-variable/nunito-sans';
    import { ModeWatcher } from 'mode-watcher';

    let { children } = $props();
</script>

<ModeWatcher defaultMode="system" />
{@render children()}

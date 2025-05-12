<script lang="ts">
    import ShellHeader from './shell-header.svelte';
    import ShellSidebar from './shell-sidebar.svelte';
    import ShellFooter from './shell-footer.svelte';
    import { afterNavigate } from '$app/navigation';
    import { onMount } from 'svelte';

    let { children } = $props();
    let open = $state(false);
    let elPage: HTMLDivElement;

    afterNavigate(() => {
        elPage.scrollIntoView({ behavior: 'instant' });
    });

    onMount(() => {
        let localPrimary = localStorage.getItem('theme-primary');
        localPrimary && document.body.classList.add('primary-' + localPrimary);

        let localGeneral = localStorage.getItem('theme-general');
        localGeneral && document.body.classList.add('tone-' + localGeneral);

        let localRadius = localStorage.getItem('theme-radius');
        localRadius && document.body.classList.add('roundness-' + localRadius);
    });
</script>

<div class="bg-bg text-fg h-screen w-screen overflow-auto">
    <div bind:this={elPage} id="page"></div>
    <ShellHeader bind:open />
    <ShellSidebar bind:open />
    {@render children()}
    <ShellFooter />
</div>

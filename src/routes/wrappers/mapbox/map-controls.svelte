<script lang="ts">
    import Map from '$lib/components/base/map.mapbox-gl.svelte';
    import mapboxgl from 'mapbox-gl';
    import { onMount } from 'svelte';

    let map: mapboxgl.Map;

    onMount(() => {
        const fullscreen = new mapboxgl.FullscreenControl();
        map.addControl(fullscreen);

        const navigation = new mapboxgl.NavigationControl();
        map.addControl(navigation);

        const geolocate = new mapboxgl.GeolocateControl();
        map.addControl(geolocate, 'top-left');
    });
</script>

<Map bind:map />

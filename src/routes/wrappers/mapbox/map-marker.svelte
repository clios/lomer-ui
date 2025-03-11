<script lang="ts">
  import Map from '$lib/components/base/map.mapbox-gl.svelte';
  import mapboxgl from 'mapbox-gl';
  import { onMount } from 'svelte';

  let map: mapboxgl.Map;

  onMount(() => {
    new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);
  });
</script>

<Map bind:map />

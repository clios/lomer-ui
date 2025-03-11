<script lang="ts">
  import Map from '$lib/components/base/map.mapbox-gl.svelte';
  import { onMount } from 'svelte';

  let map: mapboxgl.Map;

  onMount(() => {
    map.on('load', () => {
      console.log('A load event occurred.');
    });

    map.on('resize', () => {
      console.log('A resize event occurred.');
    });

    map.on('click', (e) => {
      console.log(`A click event has occurred at ${e.lngLat}`);
    });
  });
</script>

<Map bind:map />

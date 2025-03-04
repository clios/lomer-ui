<script lang="ts">
  import Mapbox from '$lib/components/base/mapbox.svelte';

  let map: mapboxgl.Map;
</script>

<Mapbox bind:map />

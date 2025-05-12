<script lang="ts">
    import CopyCLI from '$lib/components/copy-c-l-i.svelte';
    import CopyCSSCode from '$lib/components/copy-c-s-s-code.svelte';
    import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
    import HighlightText from '$lib/components/highlight-text.svelte';
    import Link from '$lib/components/base/link.svelte';
    import MapControl from './map-controls.svelte';
    import MapControlRaw from './map-controls.svelte?raw';
    import MapUsage from './map-usage.svelte';
    import MapUsageRaw from './map-usage.svelte?raw';
    import PageArticle from '$lib/components/page-article.svelte';
    import PageSection from '$lib/components/page-section.svelte';
    import PageWrapper from '$lib/components/page-wrapper.svelte';
    import MapOptions from './map-options.svelte';
    import MapOptionsRaw from './map-options.svelte?raw';
    import MapMarker from './map-marker.svelte';
    import MapMarkerRaw from './map-marker.svelte?raw';
    import MapEvents from './map-events.svelte';
    import MapEventsRaw from './map-events.svelte?raw';

    const tickler = [
        {
            id: '1',
            label: 'Installation'
        },
        {
            id: '2',
            label: 'Usage'
        },
        {
            id: '3',
            label: 'Options'
        },
        {
            id: '4',
            label: 'Controls'
        },
        {
            id: '5',
            label: 'Events'
        },
        {
            id: '6',
            label: 'Marker'
        }
    ];
</script>

<svelte:head>
    <title>Map . lomer-ui</title>
</svelte:head>

<PageWrapper
    {tickler}
    title="Mapbox"
    sub="Wrapper"
    info="Interactive and customizable map visualization."
    prevLabel="Vertical Navigation"
    prevLink="/components/vertical-navigation"
>
    <!-- INSTALLATION -->
    <PageSection id="1" title="Installation">
        <!-- INSTALL MAPBOX -->
        <PageArticle title="Install Mapbox">
            <CopyCLI code={`npm install --save mapbox-gl`} />
            <p>
                Reference: <Link
                    href="https://docs.mapbox.com/mapbox-gl-js/guides/install/#import-or-install-mapbox-gl-js"
                    target="_blank"
                >
                    Import or Install Mapbox-GL-JS
                </Link>
            </p>
        </PageArticle>

        <!-- ADD MAPBOX TOKEN -->
        <PageArticle title="Add Mapbox access token">
            <p>
                Insert access token in your <HighlightText>.env</HighlightText> file.
            </p>
            <CopyCSSCode title=".env" code="PUBLIC_MAPBOX_TOKEN=[your_api_key_here]" />
        </PageArticle>

        <!-- GET THE COMPONENT -->
        <PageArticle title="Get the base component">
            <CopyCLI code={`npx lomer-ui get map.mapbox-gl`} />
            <p>
                Source code:
                <Link
                    href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/mapbox.svelte"
                    target="_blank"
                >
                    map.mapbox-gl.svelte
                </Link>
            </p>
        </PageArticle>
    </PageSection>

    <!-- USAGE -->
    <PageSection id="2" title="Usage">
        <PageArticle title="Preview">
            <MapUsage />
            <CopySvelteCode code={MapUsageRaw} />
        </PageArticle>
    </PageSection>

    <!-- OPTIONS -->
    <PageSection id="3" title="Options">
        <PageArticle title="Preview">
            <MapOptions />
            <CopySvelteCode code={MapOptionsRaw} highlightedLines={[8, 9, 10, 11]} />
        </PageArticle>
    </PageSection>

    <!-- CONTROLS -->
    <PageSection id="4" title="Controls">
        <PageArticle title="Preview">
            <MapControl />
            <CopySvelteCode code={MapControlRaw} highlightedLines={[2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]} />
        </PageArticle>
    </PageSection>

    <!-- EVENTS -->
    <PageSection id="5" title="Events">
        <PageArticle title="Preview">
            <MapEvents />
            <CopySvelteCode code={MapEventsRaw} highlightedLines={[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]} />
        </PageArticle>
    </PageSection>

    <!-- MARKER -->
    <PageSection id="6" title="Marker">
        <PageArticle title="Preview">
            <MapMarker />
            <CopySvelteCode code={MapMarkerRaw} highlightedLines={[2, 7, 8, 9]} />
        </PageArticle>
    </PageSection>
</PageWrapper>

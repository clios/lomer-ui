<script>
    import TabsItem from '$lib/components/base/tabs-item.svelte';
    import Tabs from '$lib/components/base/tabs.svelte';

    let active = $state('home');
</script>

<Tabs>
    <TabsItem bind:active value="home">Home</TabsItem>
    <TabsItem bind:active value="about">About</TabsItem>
    <TabsItem bind:active value="service">Service</TabsItem>
    <TabsItem disabled>Disabled</TabsItem>
    <TabsItem bind:active value="settings">Settings</TabsItem>
    <TabsItem bind:active value="monitoring">Monitoring</TabsItem>
    <TabsItem bind:active value="profile">Profile</TabsItem>
    <TabsItem bind:active value="dashboard">Dashboard</TabsItem>
    <TabsItem bind:active value="gis">GIS</TabsItem>
    <TabsItem bind:active value="ai">AI</TabsItem>
    <TabsItem bind:active value="map">Map</TabsItem>
    <TabsItem bind:active value="time">Real-time</TabsItem>
</Tabs>

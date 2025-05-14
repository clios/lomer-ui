<script>
    import TabsItem from '$lib/components/base/tabs-item.svelte';
    import Tabs from '$lib/components/base/tabs.svelte';
    let group = $state('home');
</script>

<Tabs>
    <TabsItem bind:group value="home">Home</TabsItem>
    <TabsItem bind:group value="about">About</TabsItem>
    <TabsItem bind:group value="service" loading>Service</TabsItem>
    <TabsItem disabled>Disabled</TabsItem>
    <TabsItem bind:group value="settings">Settings</TabsItem>
    <TabsItem bind:group value="monitoring">Monitoring</TabsItem>
    <TabsItem bind:group value="profile">Profile</TabsItem>
    <TabsItem bind:group value="dashboard">Dashboard</TabsItem>
    <TabsItem bind:group value="gis">GIS</TabsItem>
    <TabsItem bind:group value="ai">AI</TabsItem>
    <TabsItem bind:group value="map">Map</TabsItem>
    <TabsItem bind:group value="time">Real-time</TabsItem>
</Tabs>

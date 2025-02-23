<script>
  import TabsContent from '$lib/components/base/tabs-content.svelte';
  import TabsItem from '$lib/components/base/tabs-item.svelte';
  import Tabs from '$lib/components/base/tabs.svelte';

  let active = $state('home');
</script>

<Tabs>
  <TabsItem bind:active value="home">Home</TabsItem>
  <TabsItem bind:active value="about">About</TabsItem>
  <TabsItem bind:active value="service">Service</TabsItem>
  <TabsItem bind:active value="disabled" disabled>Disabled</TabsItem>
</Tabs>
<TabsContent {active} value="home">Home</TabsContent>
<TabsContent {active} value="about">About</TabsContent>
<TabsContent {active} value="service">Service</TabsContent>

<script>
  import Accordion from '$lib/components/base/accordion.svelte';
  import Alert from '$lib/components/base/alert.svelte';
  import Avatar from '$lib/components/base/avatar.svelte';
  import Button from '$lib/components/base/button.svelte';
  import CardBoard from '$lib/components/card-board.svelte';
  import Checkbox from '$lib/components/base/checkbox.svelte';
  import Collapsible from '$lib/components/base/collapsible.svelte';
  import Dialog from '$lib/components/base/dialog.svelte';
  import Drawer from '$lib/components/base/drawer.svelte';
  import Dropdown from '$lib/components/base/dropdown.svelte';
  import DropdownOption from '$lib/components/base/dropdown-option.svelte';
  import DropdownSwitch from '$lib/components/base/dropdown-switch.svelte';
  import Field from '$lib/components/base/field.svelte';
  import Flex from '$lib/components/base/flex.svelte';
  import Input from '$lib/components/base/input.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Radio from '$lib/components/base/radio.svelte';
  import ScrollArea from '$lib/components/base/scroll-area.svelte';
  import Section from '$lib/components/base/section.svelte';
  import Select from '$lib/components/base/select.svelte';
  import Shell from './shell.svelte';
  import Switch from '$lib/components/base/switch.svelte';
  import Table from '$lib/components/base/table.svelte';
  import TableBody from '$lib/components/base/table-body.svelte';
  import TableData from '$lib/components/base/table-data.svelte';
  import TableHead from '$lib/components/base/table-head.svelte';
  import TableHeader from '$lib/components/base/table-header.svelte';
  import TableRow from '$lib/components/base/table-row.svelte';
  import Tabs from '$lib/components/base/tabs.svelte';
  import TabsItem from '$lib/components/base/tabs-item.svelte';
  import Textarea from '$lib/components/base/textarea.svelte';
  import Title from '$lib/components/base/title.svelte';
  import Icon from '@iconify/svelte';

  let open = $state(false);
  let open1 = $state(false);
  let open2 = $state(false);
  let open3 = $state(false);
  let group = $state('radio1');
  let checked = $state(false);
  let active = $state('home');

  const data = [
    { month: 'January', expense: 513, savings: 96 },
    { month: 'February', expense: 768, savings: 32 },
    { month: 'March', expense: 635, savings: 51 },
    { month: 'April', expense: 678, savings: 64 },
    { month: 'May', expense: 584, savings: 57 },
    { month: 'June', expense: 559, savings: 43 },
    { month: 'July', expense: 497, savings: 76 }
  ];
</script>

<svelte:head>
  <title>Lomer UI</title>
</svelte:head>

<Shell>
  <Section>
    <p class="text-muted text-sm">Svelte v5</p>
    <p class="text-muted text-sm">Tailwind CSS v4</p>
    <p class="my-4 text-2xl sm:text-3xl md:text-4xl">Lomer UI</p>
    <Paragraph>Open-source resource for crafting project-specific UI components.</Paragraph>
    <Flex class="my-4 flex-wrap gap-2">
      <div class="bg-general-500 rounded">
        <Button href="/theming-structure" class="from-primary to-primary/80 text-general-50 bg-gradient-to-r pr-2 pl-3">
          Get Started
          <Icon class="size-6" icon="iconoir:fast-arrow-right" />
        </Button>
      </div>
      <Flex class="gap-2">
        <Button href="/accordion" variant="secondary">Components</Button>
        <Button href="/escape-key" variant="secondary">Actions</Button>
        <!-- <Button href="/blocks/hero-sections" variant="secondary">Blocks</Button> -->
      </Flex>
    </Flex>
    <Alert class="max-w-96 animate-pulse border-dotted md:absolute md:top-0 md:right-0">
      Currently reworking the CLI so we can quickly create our components.
    </Alert>
  </Section>

  <Section>
    <Title>Create these components from scratch.</Title>
    <div class="mt-4 w-full columns-1 sm:columns-2 lg:columns-3">
      <CardBoard>
        <Accordion title="Accordion">Content here...</Accordion>
      </CardBoard>
      <CardBoard>
        <Alert title="Simple Alert">
          <p>Content here...</p>
        </Alert>
      </CardBoard>
      <CardBoard>
        <Checkbox label="Checkbox">Additional description here if needed.</Checkbox>
      </CardBoard>
      <CardBoard class="items-center gap-4">
        <Avatar src="https://avatars.githubusercontent.com/u/16535340?v=4&quot" />
        <p class="text-muted">Avatar</p>
      </CardBoard>
      <CardBoard class="flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="inverted">Inverted</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button edge="circle">Circle</Button>
        <Button edge="sharp">Sharp</Button>
      </CardBoard>
      <CardBoard class="flex-col">
        <Collapsible class="rounded ring" collapseClass="mt-0 p-0" expandClass="mb-2 p-2" bind:open>Content</Collapsible
        >
        <Button onclick={() => (open = !open)} variant="outline">Expand / Collapse</Button>
      </CardBoard>
      <CardBoard class="gap-2">
        <Button variant="ghost" onclick={() => (open1 = true)}>Open dialog</Button>
        <Dialog bind:open={open1} title="Dialog title here">Content here...</Dialog>
        <Button variant="ghost" onclick={() => (open2 = true)}>Open drawer</Button>
        <Drawer bind:open={open2} title="Drawer title here">Content here...</Drawer>
      </CardBoard>
      <CardBoard>
        <Button onclick={() => (open3 = true)}>Dropdown</Button>
        <Dropdown bind:open={open3} placement="left">
          <DropdownOption>Option</DropdownOption>
          <DropdownOption variant="destructive">Destructive option</DropdownOption>
          <DropdownOption loading>Option is loading</DropdownOption>
          <DropdownOption disabled>Option is disabled</DropdownOption>
          <DropdownSwitch>Switch</DropdownSwitch>
          <DropdownSwitch loading>Switch is loading</DropdownSwitch>
          <DropdownSwitch disabled>Switch is disabled</DropdownSwitch>
        </Dropdown>
      </CardBoard>
      <CardBoard>
        <Field label="Field Component" helper="Additional helper here...">
          <Input placeholder="Input text" />
        </Field>
      </CardBoard>
      <CardBoard class="flex-col gap-2">
        <Radio value="radio1" label="Radio 1" bind:group>Additional content here...</Radio>
        <Radio value="radio2" label="Radio 2" bind:group></Radio>
        <Radio value="radio3" label="Radio 3" bind:group></Radio>
      </CardBoard>
      <CardBoard>
        <ScrollArea class="h-52 w-40 p-2 ring">
          <p class="text-muted text-xs">Scroll Area</p>
          <p>Start</p>
          {#each Array(40) as _, i}
            <p>Line {i}</p>
          {/each}
          <p>End</p>
        </ScrollArea>
      </CardBoard>
      <CardBoard>
        <Select>
          <optgroup label="Group">
            <option value="option 1">Option 1</option>
            <option value="option 2">Option 2</option>
            <option value="option 3" disabled>Option 3 disabled</option>
          </optgroup>
        </Select>
      </CardBoard>
      <CardBoard>
        <Switch label="Switch" bind:checked>Additional description here if needed.</Switch>
      </CardBoard>
      <CardBoard>
        <Table class="border">
          <TableHead>
            <TableRow>
              <TableHeader>Month</TableHeader>
              <TableHeader class="text-right">Expense $</TableHeader>
              <TableHeader class="text-right">Savings $</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody outline>
            {#each data as d}
              <TableRow clickable onclick={() => alert(d.month)}>
                <TableData>{d.month}</TableData>
                <TableData class="text-right font-mono">{d.expense}</TableData>
                <TableData class="text-right font-mono">{d.savings}</TableData>
              </TableRow>
            {/each}
          </TableBody>
        </Table>
      </CardBoard>
      <CardBoard>
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
      </CardBoard>
      <CardBoard>
        <Textarea placeholder="Textarea" />
      </CardBoard>
    </div>
  </Section>

  <Section>
    <Title>Why not a library?</Title>
    <Paragraph>
      I believe that for simple components, it's more valuable to focus on learning how to write the code and understand
      the underlying concepts, rather than relying entirely on a library.
    </Paragraph>
    <Paragraph>
      By combining the simplicity of Svelte with the versatility of Tailwind CSS, we can build UI components that are
      both straightforward and fully customizable — with complete control over structure, style, and behavior.
    </Paragraph>
    <Title level={2}>More control</Title>
    <Paragraph>You’re not limited by a library’s rules. You write the code your way.</Paragraph>
    <Title level={2}>Custom designs</Title>
    <Paragraph>Tailwind makes it easy to create your own look without fighting against prebuilt styles.</Paragraph>
    <Title level={2}>Better performance</Title>
    <Paragraph>No extra code—just the pieces you build and need.</Paragraph>
  </Section>
</Shell>

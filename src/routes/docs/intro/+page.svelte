<script>
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';

  const tickler = [
    {
      id: '1',
      label: 'FAQ'
    },
    {
      id: '1.1',
      label: 'Can I contribute?',
      sub: true
    },
    {
      id: '1.2',
      label: 'How can I support you?',
      sub: true
    },
    {
      id: '1.3',
      label: 'Can I use it in my projects?',
      sub: true
    }
  ];
</script>

<svelte:head>
  <title>Intro . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Intro"
  sub="Docs"
  info="Base components for your next project."
  nextLabel="Setup"
  prevLabel="Home"
  nextLink="/docs/setup"
  prevLink="/"
>
  <PageSection class="gap-4 lg:text-xl">
    <div class="flex flex-col gap-1">
      <p>Free and open-source collection of standalone components.</p>
      <p>Styled with Tailwind CSS for simplicity and customization.</p>
      <p>
        <span> Quickly add components to your project.</span>
        <span class="text-muted">Copy and paste.</span>
      </p>
      <p>Minimal dependency, making them easy to customize.</p>
    </div>
  </PageSection>

  <PageSection id="1" title="FAQ">
    <PageArticle id="1.1" title="Can I contribute?">
      <p>Yes, you can! Feel free to open a pull request.</p>
      <p>Reach me out for suggestions or feedback.</p>
      <p>I’d love to hear from you!</p>
    </PageArticle>

    <PageArticle id="1.2" title="How can I support you?">
      <p>
        Feel free to star the <Link
          href="https://github.com/clios/lomer-ui"
          target="_blank">repo</Link
        > on GitHub.
      </p>
      <p>You can also share it with your friends or on social media.</p>
      <p>I’d really appreciate it!</p>
    </PageArticle>

    <PageArticle id="1.3" title="Can I use it in my projects?">
      <p>Feel free to use it in your personal or commercial projects.</p>
    </PageArticle>
  </PageSection>
</PageWrapper>

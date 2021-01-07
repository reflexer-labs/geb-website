<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://reflexer.finance" target="_blank">
    <img alt="Reflexer" src="https://i.ibb.co/CtWRHQd/android-chrome-512x512.png" width="60" />
  </a>
</p>
<h1 align="center">
  Reflexer Website
</h1>

Reflexer website is built with [Gatsby](https://www.gatsbyjs.com/) and [Contentful CMS](https://www.contentful.com/).

## Advantages of using this stack

1. Gatsby is a framework built upon React and provides something called SSG (Static Site Generation) which means it generates HTML files at build time, and that is useful for SEO and Search Engines crawlers to rank the website since they do not read full js applications like normal react app.

2. Gatsby connects with headless CMS called [Contentful](https://www.contentful.com/) which provides a great GUI where we can just add model and content and save it somewhere for free (Gives us 1GB of storage) also it renders GraphQL API that we use it in Gatsby to show our content.

_Bottom line is we are having the best of both, as Developer we use React like app and at the same time we are having some kind of a backend with an admin interface built for us for free to use it in content manipulation and as non-developer I can go manipulate content from an admin interface without touching the code. 🚀_

## Preview

A preview link on [Render](https://render.com/) will be generated when you make a new branch with the fixes you want and then make a PR to the _develop_ branch and this link stays live as long as the PR is opened.

## Deployment

1.  **Development.**

    This is used for staging changes/features and you can view it from [here](/), also this link changes everytime you merge a new branch into _develop_ branch.

1.  **Production.**

    You have to CREATE a new RELEASE! on MASTER branch.

    - Change in content only
      Unfortunately there is no easy way ATM for this except we have to release everytime we change something in the Contentful CMS, so all you have to do is just after you are done publishing your changes on contentufl come here to the repo and then create a new realse on _master_ branch

    - Change in app files  
      You have to make a PR and merge _develop_ with _master_ then create a new release on _master_ and this will trigger github Actions and release the new version of the source plus the new data from contentful

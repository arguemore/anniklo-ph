import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '2756e12ab3664d85ba7439420eb12ce7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'spoqsaf9291f',

  // basic site info (required)
  name: 'ANNIKLO PH',
  domain: 'anniklo.vercel.app',
  author: 'Algomore Tech',

  // open graph metadata (optional)
  description: 'Shop unique thrift finds while supporting genuine bipolar disorder awareness. Help bring hope and understanding. Join our pop-up garage-sale thrift shop!',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'Shop',
       pageId: '2756e12ab3664d85ba7439420eb12ce7'
     },
     {
      title: 'Tracking',
      pageId: 'f8b6f44a89bb43bc8a869b7f917f1dea'
    },
     {
       title: 'FAQs',
       pageId: '10f57492a2dc41f8b1aa34c33d8a710b'
     },
     {
       title: 'Advocacy',
       pageId: 'caf29141d31e48fca3c96819034caa3a'
     },
     {
       title: 'Hire Me',
       pageId: '4841af4f90cd4193bd3a273916ebda9c'
     },

   ]
})

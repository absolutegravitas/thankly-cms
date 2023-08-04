# Payload Website CMS

This is the code that powers the official website CMS for [Payload](https://github.com/payloadcms/payload). The frontend is built with NextJS and [the code can be found here](https://github.com/payloadcms/website).


Content Block Component Hierarchy

ContentBlock
- basic
    - single col
    - double col
- 

FeatureBlock
- featuredProducts
    -> 1 or may
    -> 1 = featured collectin
- featuredReviews

- featuredPartners (as seen on / corp)

- featured FAQs

Standard Page
- Hero
    -> Full Screen -- https://tailwindui.com/components/ecommerce/page-examples/storefront-pages#component-04740945117f4ec46b10f866630a6347
    -> With Mockup RHS -- https://tailwindui.com/components/marketing/sections/heroes#component-816bf20fe4e1cd0cc2fefabfa6a6732b

- As Seen On (Featured Partners)
- How It Works
x- Featured Reviews
- Major Feature (large image with content)
x- Featured FAQs
- Perks
- CTA Block
- Promo Block

Curated Collections (Bundles also Discontinued) Page
x- Hero
- As Seen On
- Major Features (bundle contents)
- Pricing Block
- Perks
- Featured FAQs

Cards Page (aka Products Page)
- Hero
- As Seen On
- Cards Product Cards --> send card, send multiple cards

Create Your Thankly Page


### Features shown

This CMS showcases many powerful features that Payload is capable of, including:

1. [Collections](https://payloadcms.com/docs/configuration/collections) and [Globals](https://payloadcms.com/docs/configuration/globals)
1. [Access Control](https://payloadcms.com/docs/access-control/overview) to restrict who can do what to the site's data
1. [Versions](https://payloadcms.com/docs/versions/overview) and [Drafts](https://payloadcms.com/docs/versions/drafts) functionality
1. A great pattern for how to create [reusable fields](https://github.com/payloadcms/website-cms/tree/master/src/fields) that can be used and re-used easily
1. Many advanced field types, including the [relationship](https://payloadcms.com/docs/fields/relationship), [blocks](https://payloadcms.com/docs/fields/blocks), [array](https://payloadcms.com/docs/fields/array), and many more
1. The official [Payload SEO plugin](https://github.com/payloadcms/plugin-seo)
1. The official [Payload Form Builder plugin](https://github.com/payloadcms/plugin-form-builder)
1. Auto-generated [TypeScript types](https://github.com/payloadcms/public-demo/blob/master/src/payload-types.ts)
1. Lots more

### Running locally

You can clone this repo to your own computer and play around super easily.

To do so, you'll need the following software:

- Yarn or NPM
- NodeJS version 10+
- A Mongo Database - **IMPORTANT: you need to either have MongoDB running locally, or have signed up for a free MongoDB Atlas server in order to test this repo locally.**

##### Local installation steps:

**1. Clone the repo by running the following command at your terminal:**

```bash
git clone git@github.com:payloadcms/public-demo.git
```

**Navigate to folder and install dependencies**

Type `cd ./payload-website` and then `yarn` or `npm install --legacy-peer-deps` to add all required dependencies.

**Duplicate the example `.env` file and fill in your own values**

Type `cp .env.example .env` in your terminal to make a copy of the example `.env` file, and then edit that file to fill in your own values.

**Fire up the development server**

Finally, type `yarn dev` to start up the server and see it in action!

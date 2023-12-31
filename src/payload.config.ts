import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

// plugins
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import stripePlugin from '@payloadcms/plugin-stripe'
import { LexicalPlugin } from 'payload-plugin-lexical'

// webhooks
// import { invoiceCreatedOrUpdated } from './stripe/webhooks/invoiceCreatedOrUpdated'
// import { productUpdated } from './stripe/webhooks/productUpdated'
// import { priceUpdated } from './stripe/webhooks/priceUpdated'
// import { checkout } from './routes/checkout'
import BeforeDashboard from './components/BeforeDashboard'

import Menus from './globals/Menus'
import GlobalSettings from './globals/GlobalSettings'

import {
  Media,
  Reviews,
  Orders,
  Pages,
  Products,
  ReusableContent,
  Brands,
  StockItems,
  Suppliers,
  Users,
  Discounts,
  Faqs,
  Categories
} from './collections'

dotenv.config({ path: path.resolve(__dirname, '../.env') })
const generateTitle: GenerateTitle = () => {
  return 'Thankly'
}
const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: String(process.env.S3_ACCESS_KEY_ID),
      secretAccessKey: String(process.env.S3_SECRET_ACCESS_KEY),
    },
    region: process.env.S3_REGION,
  },
  bucket: process.env.S3_BUCKET,
})

export default buildConfig({
  globals: [Menus, GlobalSettings],
  collections: [
    // Globals
    Users,
    Media,

    // content
    Pages,
    ReusableContent,
    Faqs,

    Orders,
    Products,
    Categories,
    Reviews,
    Discounts,

    StockItems,
    Suppliers,
    Brands,
  ],
  upload: {
    limits: {
      fileSize: 10000000, // 10MB, written in bytes
    },
  },
  plugins: [
    LexicalPlugin({
      // Only set this if you want to use the the AISuggest Feature
      // ai: {
      //   openai_key: process.env.OPENAI_KEY,
      // },
    }),
    nestedDocs({
      collections: ['pages', 'products'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    redirects({ collections: ['pages', 'products'] }),
    seo({
      collections: ['pages', 'products'],
      uploadsCollection: 'media',
      generateTitle,
      
    }),
    // stripePlugin({
    //   stripeSecretKey: String(process.env.STRIPE_SECRET_KEY),
    //   isTestKey: Boolean(process.env.PAYLOAD_PUBLIC_STRIPE_IS_TEST_KEY),
    //   stripeWebhooksEndpointSecret: String(process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET),
    //   webhooks: {
    //     'invoice.created': invoiceCreatedOrUpdated,
    //     'invoice.updated': invoiceCreatedOrUpdated,
    //     'product.created': productUpdated,
    //     'product.updated': productUpdated,
    //     'price.updated': priceUpdated,
    //   },
    // }),
    cloudStorage({
      enabled: true,
      collections: {
        media: {
          disableLocalStorage: true,
          adapter: adapter, // see docs for the adapter you want to use
          generateFileURL: ({ filename, prefix }) => {
            console.log(filename, prefix)
            return ['https://d1qkl36l6oj3o3.cloudfront.net', prefix, filename]
              .filter(Boolean)
              .join('/')
          },
        },
      },
    }),
  ],

  admin: {
    components: {
      beforeDashboard: [BeforeDashboard], //renders the 'welcome' block that you see after logging into your admin panel.
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
          'react-router-dom': path.resolve(__dirname, '../node_modules/react-router-dom'),
          [path.resolve(__dirname, '../node_modules/cli-progress')]: mockModulePath,
          [path.resolve(__dirname, 'collections/Products/hooks/beforeChange')]: mockModulePath,
          [path.resolve(__dirname, 'collections/Users/hooks/createStripeCustomer')]: mockModulePath,
          [path.resolve(__dirname, 'routes/checkout')]: mockModulePath,
          react: path.resolve(__dirname, '../node_modules/react'),
        },
      },
    }),
  },

  csrf: [
    process.env.PAYLOAD_PUBLIC_APP_URL,
    'https://checkout.stripe.com',
    'https://rq5f65r3bd.ap-southeast-2.awsapprunner.com',
    'https://www.thankly.co',
    'https://thankly.com.au',
    'https://thankly.com.au',
    'https://thankly.au',
  ].filter(Boolean),
  cors: [
    process.env.PAYLOAD_PUBLIC_APP_URL,
    'https://checkout.stripe.com',
    'https://rq5f65r3bd.ap-southeast-2.awsapprunner.com',
    'https://www.thankly.co',
    'https://thankly.co',
    'https://www.thankly.com.au',
    'https://thankly.com.au',
    'https://thankly.au',
  ].filter(Boolean),
  // endpoints: [{ path: '/checkout', method: 'post', handler: checkout }],
  graphQL: {
    disablePlaygroundInProduction: false,
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  rateLimit: { trustProxy: true, max: 4000 },
  typescript: { outputFile: path.resolve(__dirname, 'payload-types.ts') },
})

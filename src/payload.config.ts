import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'
import { checkout } from './routes/checkout'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { invoiceCreatedOrUpdated } from './stripe/webhooks/invoiceCreatedOrUpdated'
import { Media } from './collections/Media'
import { Menus } from './globals/Menus'
import { Orders } from './collections/Orders'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { priceUpdated } from './stripe/webhooks/priceUpdated'
import { Products } from './collections/Products'
import { productUpdated } from './stripe/webhooks/productUpdated'
import { ReusableContent } from './collections/ReusableContent'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import BeforeDashboard from './components/BeforeDashboard'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import ProductBrands from './collections/ProductBrands'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import StockItems from './collections/StockItems'
import stripePlugin from '@payloadcms/plugin-stripe'
import Suppliers from './collections/Suppliers'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import Users from './collections/Users'
import Discounts from './collections/Discounts'
import Reviews from './collections/Reviews'

dotenv.config({ path: path.resolve(__dirname, '../.env'), })
const generateTitle: GenerateTitle = () => { return 'Thankly' }
const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: String(process.env.S3_ACCESS_KEY_ID), secretAccessKey: String(process.env.S3_SECRET_ACCESS_KEY),
    },
    region: process.env.S3_REGION,
  },
  bucket: process.env.S3_BUCKET,
})

export default buildConfig({
  collections: [
    // shop
    Orders,
    Products,
    Discounts,
    StockItems,
    Suppliers,
    ProductBrands,
    Reviews,

    // website
    Pages,
    Posts,

    // other (content blocks etc.)
    Media,
    ReusableContent,
    Users,
  ],
  plugins: [
    nestedDocs({
      collections: ['pages', 'categories', 'products'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    redirects({ collections: ['pages', 'posts', 'products'], }),
    seo({
      collections: ['pages', 'posts', 'products'],
      uploadsCollection: 'media',
      generateTitle,

    }),
    stripePlugin({
      stripeSecretKey: String(process.env.STRIPE_SECRET_KEY),
      isTestKey: Boolean(process.env.PAYLOAD_PUBLIC_STRIPE_IS_TEST_KEY),
      stripeWebhooksEndpointSecret: String(process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET),
      webhooks: {
        'invoice.created': invoiceCreatedOrUpdated,
        'invoice.updated': invoiceCreatedOrUpdated,
        'product.created': productUpdated,
        'product.updated': productUpdated,
        'price.updated': priceUpdated,
      },
    }),
    cloudStorage({
      enabled: true,
      collections: {
        media: {
          disableLocalStorage: true,
          adapter: adapter, // see docs for the adapter you want to use
          generateFileURL: ({ filename, prefix }) => {
            console.log(filename, prefix)
            return ['https://d1qkl36l6oj3o3.cloudfront.net', prefix, filename].filter(Boolean).join('/')
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
          // [path.resolve(__dirname, '../node_modules/discord-markdown')]: mockModulePath,
          // [path.resolve(__dirname, '../node_modules/discord.js')]: mockModulePath,
          // [path.resolve(__dirname, './scripts/fetch-discord')]: mockModulePath,
          // [path.resolve(__dirname, './scripts/fetch-github')]: mockModulePath,
          react: path.resolve(__dirname, '../node_modules/react'),
        },
      },
    }),
  },

  csrf: [process.env.PAYLOAD_PUBLIC_APP_URL, 'https://checkout.stripe.com', 'https://rq5f65r3bd.ap-southeast-2.awsapprunner.com', 'https://www.thankly.co', 'https://thankly.com.au', 'https://thankly.com.au', 'https://thankly.au'].filter(Boolean),
  cors: [process.env.PAYLOAD_PUBLIC_APP_URL, 'https://checkout.stripe.com', 'https://rq5f65r3bd.ap-southeast-2.awsapprunner.com', 'https://www.thankly.co', 'https://thankly.co', 'https://www.thankly.com.au', 'https://thankly.com.au', 'https://thankly.au'].filter(Boolean),
  endpoints: [{ path: '/checkout', method: 'post', handler: checkout, },],
  globals: [Menus],
  graphQL: { disablePlaygroundInProduction: false, schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'), },
  rateLimit: { trustProxy: true, max: 4000, },
  typescript: { outputFile: path.resolve(__dirname, 'payload-types.ts'), },
})  

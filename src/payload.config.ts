import dotenv from 'dotenv'
import path from 'path'
// import formBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import stripePlugin from '@payloadcms/plugin-stripe'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'



// import richText from './fields/richText'
import { Brand } from './globals/Brand'
import { buildConfig } from 'payload/config'
import { checkout } from './routes/checkout'
import { invoiceCreatedOrUpdated } from './stripe/webhooks/invoiceCreatedOrUpdated'
import { Media } from './collections/Media'
import { Menus } from './globals/Menus'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { priceUpdated } from './stripe/webhooks/priceUpdated'
import { productUpdated } from './stripe/webhooks/productUpdated'
import { ReusableContent } from './collections/ReusableContent'
// import { Users } from './collections/Users'
import Users from './collections/Users'

import BeforeDashboard from './components/BeforeDashboard'
import Categories from './collections/Categories'
import Orders from './collections/Orders'
import ProductBrands from './collections/ProductBrands'
import Products from './collections/Products'
import StockItems from './collections/StockItems'
import Suppliers from './collections/Suppliers'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const generateTitle: GenerateTitle = () => {
  return 'My Store'
}

const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: String(process.env.S3_ACCESS_KEY_ID),
      secretAccessKey: String(process.env.S3_SECRET_ACCESS_KEY),
    },
    region: process.env.S3_REGION,
    // ... Other S3 configuration
  },
  bucket: process.env.S3_BUCKET,
})

export default buildConfig({
  admin: {
    components: {
      // The BeforeDashboard component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import BeforeDashboard statement on line 15.
      beforeDashboard: [BeforeDashboard],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          react: path.resolve(__dirname, '../node_modules/react'),
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
          'react-router-dom': path.resolve(__dirname, '../node_modules/react-router-dom'),
          // [path.resolve(__dirname, './scripts/fetch-discord')]: mockModulePath,
          [path.resolve(__dirname, '../node_modules/cli-progress')]: mockModulePath,
          // [path.resolve(__dirname, '../node_modules/discord.js')]: mockModulePath,
          // [path.resolve(__dirname, '../node_modules/discord-markdown')]: mockModulePath,
          // [path.resolve(__dirname, './scripts/fetch-github')]: mockModulePath,
          [path.resolve(__dirname, 'collections/Products/hooks/beforeChange')]: mockModulePath,
          [path.resolve(__dirname, 'collections/Users/hooks/createStripeCustomer')]: mockModulePath,
          [path.resolve(__dirname, 'routes/checkout')]: mockModulePath,
        },
      },
    }),
  },

  collections: [
    Orders,
    Products,
    Pages,
    Posts,
    StockItems,
    Suppliers,
    Categories,
    ProductBrands,
    Media,
    ReusableContent,
    Users,
  ],
  csrf: [process.env.PAYLOAD_PUBLIC_APP_URL, 'https://checkout.stripe.com', 'https://rq5f65r3bd.ap-southeast-2.awsapprunner.com', 'https://www.thankly.co', 'https://thankly.com.au', 'https://thankly.com.au', 'https://thankly.au'].filter(Boolean),
  cors: [process.env.PAYLOAD_PUBLIC_APP_URL, 'https://checkout.stripe.com', 'https://rq5f65r3bd.ap-southeast-2.awsapprunner.com', 'https://www.thankly.co', 'https://thankly.co', 'https://www.thankly.com.au', 'https://thankly.com.au', 'https://thankly.au'].filter(Boolean),

  endpoints: [
    {
      path: '/checkout',
      method: 'post',
      handler: checkout,
    },
  ],
  globals: [Menus, Brand,],
  graphQL: {
    disablePlaygroundInProduction: true,
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),

  },

  plugins: [
    // formBuilder({
    //   formOverrides: {
    //     fields: [
    //       richText({
    //         name: 'leader',
    //         label: 'Leader Text',
    //         admin: {
    //           elements: [],
    //         },
    //       }),
    //       {
    //         name: 'hubSpotFormID',
    //         type: 'text',
    //         admin: {
    //           position: 'sidebar',
    //         },
    //       },
    //     ],
    //   },
    //   formSubmissionOverrides: {
    //     hooks: {
    //       afterChange: [
    //         ({ doc, req }) => {
    //           const sendSubmissionToHubSpot = async (): Promise<void> => {
    //             const { form, submissionData } = doc
    //             const portalID = process.env.PRIVATE_HUBSPOT_PORTAL_KEY
    //             const data = {
    //               fields: submissionData.map(key => ({
    //                 name: key.field,
    //                 value: key.value,
    //               })),
    //               context: {
    //                 hutk: req.body?.hubspotCookie,
    //                 pageUri: req.body?.pageUri,
    //                 pageName: req.body?.pageName,
    //               },
    //             }
    //             try {
    //               await fetch(
    //                 `https://api.hsforms.com/submissions/v3/integration/submit/${portalID}/${form.hubSpotFormID}`,
    //                 {
    //                   method: 'POST',
    //                   headers: {
    //                     'Content-Type': 'application/json',
    //                   },
    //                   body: JSON.stringify(data),
    //                 },
    //               )
    //             } catch (err: unknown) {
    //               req.payload.logger.error({
    //                 msg: 'Fetch to HubSpot form submissions failed',
    //                 err,
    //               })
    //             }
    //           }
    //           sendSubmissionToHubSpot()
    //         },
    //       ],
    //     },
    //   },
    // }),

    nestedDocs({
      collections: ['pages', 'categories'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    redirects({
      collections: ['pages', 'posts'],
    }),
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
  rateLimit: {
    trustProxy: true,
    max: 4000,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})

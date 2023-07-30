import type { StripeWebhookHandler } from '@payloadcms/plugin-stripe/dist/types'
import type Stripe from 'stripe'

import type { Order } from '@types'

const logs = true

export const invoiceCreatedOrUpdated: StripeWebhookHandler<{
  data: {
    object: Stripe.Invoice
  }
}> = async args => {
  const {
    event,
    payload,
    // stripe
  } = args

  const {
    id: stripeInvoiceID,
    payment_intent,
    lines: invoiceItems,
    customer,
    customer_email: invoiceCustomerEmail,
    customer_name: invoiceCustomerName,
  } = event.data.object

  const stripePaymentIntentID =
    typeof payment_intent === 'string' ? payment_intent : payment_intent?.id
  const invoiceCustomerID = typeof customer === 'string' ? customer : customer?.id

  if (logs)
    payload.logger.info(`🪝 An invoice was created or updated in Stripe, syncing to Payload...`)

  let existingOrder: Order

  if (stripeInvoiceID) {
    const {
      docs: [order],
    } = await payload.find({
      collection: 'orders',
      where: {
        stripeInvoiceID: {
          equals: stripeInvoiceID,
        },
      },
    })

    if (order) {
      existingOrder = order
    }
  }

  const users = await payload.find({
    collection: 'users',
    where: {
      stripeCustomerID: {
        equals: invoiceCustomerID,
      },
    },
  })

  const [user] = users.docs

  try {
    if (invoiceItems) {
      // find all payload products that are assigned to "stripeProductID"
      const items = await Promise.all(
        invoiceItems.data.map(async item => {
          const productQuery = await payload.find({
            collection: 'products',
            where: {
              stripeProductID: {
                equals: item.price.product,
              },
            },
          })

          const [product] = productQuery.docs

          const stripeProductID =
            typeof item.price.product === 'string' ? item.price.product : item.price.product?.id

          return {
            product: product?.id || null,
            title: product?.name || null,
            priceJSON: JSON.stringify(item.price),
            stripeProductID,
            quantity: item.quantity,
          }
        }),
      )

      // const orderData: Partial<Order> = {
      //   stripeInvoiceID,
      //   stripePaymentIntentID,
      //   orderedBy: {
      //     user: user?.id || null,
      //     name: invoiceCustomerName,
      //     email: invoiceCustomerEmail,
      //     stripeCustomerID: invoiceCustomerID,
      //   },
      //   items,
      // }

      // have to do this otherwise New Order screws up because of some shitty type safety nonsense that I can't be bothered fixing
      const orderData: any = {
        stripeInvoiceID,
        stripePaymentIntentID,
        customer: {
          user: user?.id || null,
          name: invoiceCustomerName,
          email: invoiceCustomerEmail,
          stripeCustomerID: invoiceCustomerID,
        },
        items,
      }

      if (existingOrder) {
        if (logs) payload.logger.info(`🪝 Updating existing order...`)

        await payload.update({
          collection: 'orders',
          id: existingOrder.id,
          data: orderData,
        })
      } else {
        if (logs) payload.logger.info(`🪝 Creating new order...`)

        await payload.create({
          collection: 'orders',
          data: orderData, // this line fucks up if orderData is Partial<Order>
        })
      }
    }

    if (logs) payload.logger.info(`# Successfully synced invoice.`)
  } catch (error: unknown) {
    payload.logger.error(`- Error syncing invoice: ${error}`)
  }
}

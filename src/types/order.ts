import { User } from './_global'
import { Discount } from './discount'
import { Product } from './product'
import { Receiver } from './receiver'

export interface Order {
    // basic
    id: string
    orderID: string
    status: 'pending' | 'cancelled' | 'onhold' | 'processing' | 'completed'
    channel: 'manual' | 'web' | 'fb' | 'insta' // records the initiating channel for the order
    termsAccepted: Boolean;
    notes: string // store order notes / messages to thankly

    // identifiers
    customer: { user?: string | User; name?: string; email?: string; stripeCustomerID?: string; }
    stripeInvoiceID?: string;
    stripePaymentIntentID?: string;

    // order items
    items:
    Discount[]
    | {
        id: number;
        status: 'cancelled' | 'processing' | 'shipped' | 'delivered' // individual fulfilment status
        product: Product; // card or bundle
        stripePriceID: String; // price used for this order
        message: { text: String; style: 'normal' | 'cursive' | 'block' };
        receiver: Receiver;
    }[]

    // invoice totals
    subtotalAmount: number // total of all order items
    shippingAmount: number // add value of shipping costs
    discountAmount: number // less value of discount applied on whole order
    invoiceAmount: number // equals

    // other
    events: JSON // store events for future audits
    createdAt: string
    updatedAt: string

    // pending -- order created (temp cart)
    // Processing — Payment received (paid) and stock has been reduced; order is awaiting fulfillment. All product orders require processing, except those that only contain products which are both Virtual and Downloadable.
    // Completed — Order fulfilled and complete – requires no further action.
    // On hold — Awaiting payment – stock is reduced, but you need to confirm payment.
    // Cancelled — Cancelled by an admin or the customer – stock is increased, no further action required.
}
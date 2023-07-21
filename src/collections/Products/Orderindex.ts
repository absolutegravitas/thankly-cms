// import type { CollectionConfig } from 'payload/types'

// import { admins } from '../../access/admins'
// import { adminsAndOrderedBy } from './access/adminsAndOrderedBy'
// import { syncUser } from './hooks/syncUser'

// const Orders: CollectionConfig = {
//   slug: 'orders',
//   admin: { useAsTitle: 'createdAt', defaultColumns: ['createdAt'], group: 'Shop' },
//   access: {
//     // read: adminsAndOrderedBy,
//     // create: adminsAndOrderedBy,
//     update: admins,
//     delete: admins,
//   },
//   hooks: { afterChange: [syncUser], },
//   timestamps: true,
//   fields: [
//     {
//       type: "tabs", // required
//       // admin: { readOnly: true, },
//       tabs: [
//         {
//           name: "info",
//           label: "Order Info", // required
//           interfaceName: "info", // optional (`name` must be present)
//           fields: [
//             {
//               type: 'row', // required
//               fields: [
//                 // { name: 'orderID', type: 'text', admin: { width: '33%', } },
//                 { name: 'stripeInvoiceID', type: 'text', admin: { width: '33%', } },
//                 { name: 'stripePaymentIntentID', type: 'text', admin: { width: '33%', } },
//                 {
//                   name: 'status', // required
//                   type: 'select', // required
//                   hasMany: false,
//                   required: true,
//                   defaultValue: 'pending',
//                   admin: { width: '50%', isClearable: true, },
//                   options: [
//                     { label: 'Pending', value: 'pending', },
//                     { label: 'Cancelled', value: 'cancelled', },
//                     { label: 'On Hold', value: 'onhold', },
//                     { label: 'Processing', value: 'processing', },
//                     { label: 'Completed', value: 'completed', },
//                     { label: 'Refunded', value: 'refunded', },

//                     // Pending payment — Order received, no payment initiated. Awaiting payment (unpaid).
//                     // Failed — Payment failed or was declined (unpaid) or requires authentication (SCA). Note that this status may not show immediately and instead show as Pending until verified (e.g., PayPal).
//                     // Processing — Payment received (paid) and stock has been reduced; order is awaiting fulfillment. All product orders require processing, except those that only contain products which are both Virtual and Downloadable.
//                     // Completed — Order fulfilled and complete – requires no further action.
//                     // On hold — Awaiting payment – stock is reduced, but you need to confirm payment.
//                     // Cancelled — Cancelled by an admin or the customer – stock is increased, no further action required.
//                     // Please note: This status does not refund the customer.
//                     // An example use case: The merchant wants to cancel the order because the customer has become unresponsive and they do not know where to ship the product. The customer is not eligible for a refund in this case.
//                     // To issue a refund please follow the Manage refunds documentation.
//                     // Refunded — Refunded by an admin – no further action required.
//                     // Authentication required — Awaiting action by the customer to authenticate the transaction and/or complete SCA requirements.

//                   ],
//                 },
//                 { name: 'termsAccepted', type: 'checkbox', },

//               ]
//             },

//             {
//               name: 'Customer',
//               type: 'group',
//               // admin: { readOnly: true, },
//               fields: [
//                 {
//                   type: 'row', // required
//                   fields: [
//                     // { name: 'user', type: 'relationship', relationTo: 'users', label: 'Customer', hasMany: false, admin: { width: '50%', }, },
//                     // keep a static copy of these fields as they appear at the time of the order
//                     { name: 'stripeCustomerID', label: 'Stripe Customer ID', type: 'text', admin: { width: '50%', }, },
//                     { name: 'name', type: 'text', admin: { width: '50%', }, },
//                     { name: 'email', type: 'text', admin: { width: '50%', }, },
//                   ]
//                 },
//               ],
//             },



//           ],
//         },

//         {
//           name: "items",
//           label: "Items", // required
//           interfaceName: "items", // optional (`name` must be present)
//           fields: [
//             {
//               name: 'orderedBy',
//               type: 'group',
//               admin: {
//                 readOnly: true,
//               },
//               fields: [
//                 {
//                   type: 'row', // required
//                   fields: [
//                   ]
//                 },
//               ],
//             },
//           ],
//         },
//       ]
//     },

//     {
//       name: 'items',
//       type: 'array',
//       admin: { readOnly: true, },
//       fields: [
//         { name: 'product', type: 'relationship', relationTo: 'products', hasMany: false, },
//         // keep a static copy of these fields as they appear at the time of the order
//         { name: 'title', type: 'text', },
//         { name: 'priceJSON', type: 'text', }, {
//           name: 'stripeProductID',
//           label: 'Stripe Product ID',
//           type: 'text',
//           admin: {
//             readOnly: true,
//             position: 'sidebar',
//           },
//         },
//         { name: 'note', type: 'richText' },
//         {
//           name: 'quantity',
//           type: 'number',
//         },
//       ],
//     },

//   ],
// }

// export default Orders

// // const emptyCart = {



// //   voucher: {},

// //   subtotal: 0, // subtotal of all card & gifts for the Order
// //   discount: 0, // discount for overall order | sum of discounts applied in each Thankly
// //   shipping: 0, // total shipping costs
// //   total: 0, //amount after discounts applied
// //   voucherAmount: 0, // voucher value used
// //   totalDue: 0, // after voucher is applied any more due

// //   currentThankly: {
// //     // {
// //     status: 'inprogress', // notdone, done
// //     errors: [],
// //     card: {}, // card product, only 1 is allowed at a time
// //     gifts: [], // one or more gift products
// //     extras: { ribbon: {} }, // ribbon selection
// //     message: { text: '', style: '' }, // text and style of message on card
// //     instructions: '', // instructions for the thankly
// //     subtotal: 0, // subtotal of all card & gifts & extras for this Thankly
// //     discount: 0, // discount for this THankly if applied
// //     shipping: 0, // cost of shipping this Thankly (to all recipients) | sum of shipping cost per Recipient
// //     total: 0, // amount after discounts applied
// //     recipients: [
// //       // {
// //       //   current: true, // true | false
// //       //   name: '',
// //       //   company: '',
// //       //   address: {
// //       //     fulladdress: '',
// //       //     addressLine1: '',
// //       //     addressLine2: '',
// //       //     suburb: '',
// //       //     state: '',
// //       //     postcode: '',
// //       //   },
// //       // },
// //     ],
// //     // },
// //   },
// //   thanklys: [
// //     // completed thanklys
// //     // {
// //     //   status: 'added',  // current | added
// //     //   errors: [],
// //     //   card: {}, // card product, only 1 is allowed at a time
// //     //   gifts: [], // one or more gift products
// //     //   extras: { ribbon: {} }, // ribbon selection
// //     //   message: { text: '', style: '' }, // text and style of message on card
// //     //   instructions: '', // instructions for the thankly
// //     //   subtotal: 0, // subtotal of all card & gifts & extras for this Thankly
// //     //   discount: 0, // discount for this THankly if applied
// //     //   shipping: 0, // cost of shipping this Thankly (to all recipients) | sum of shipping cost per Recipient
// //     //   total: 0, // amount after discounts applied
// //     //   recipients: [
// //     //     // {
// //     //     //   current: true, // true | false
// //     //     //   name: '',
// //     //     //   company: '',
// //     //     //   address: {
// //     //     //     fulladdress: '',
// //     //     //     addressLine1: '',
// //     //     //     addressLine2: '',
// //     //     //     suburb: '',
// //     //     //     state: '',
// //     //     //     postcode: '',
// //     //     //   },
// //     //     // },
// //     //   ],
// //     // },
// //   ],
// // }

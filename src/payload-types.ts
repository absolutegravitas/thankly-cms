/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    pages: Page;
    'reusable-content': ReusableContent;
    faqs: Faq;
    orders: Order;
    products: Product;
    reviews: Review;
    discounts: Discount;
    stockItems: StockItem;
    suppliers: Supplier;
    brands: Brand;
    redirects: Redirect;
  };
  globals: {
    menus: Menu;
  };
}
export interface User {
  id: string;
  name: string;
  business?: string;
  roles?: ('admin' | 'customer' | 'user')[];
  stripeCustomerID?: string;
  skipSync?: boolean;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Media {
  id: string;
  alt?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Page {
  id: string;
  fullTitle?: string;
  slug?: string;
  title: string;
  layout: (
    | {
        heroFields: {
          layout: 'default' | 'imageRight';
          textColor: 'dark' | 'white';
          image: string | Media;
          content?: {
            [k: string]: unknown;
          }[];
          links?: {
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'default' | 'primary' | 'secondary';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'hero';
      }
    | {
        ctaFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          layout?: '2options' | 'simpleCentred' | 'centredImage';
          items: {
            media?: string | Media;
            content: {
              [k: string]: unknown;
            }[];
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'primary' | 'secondary' | 'default';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        contentFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          layout?: 'oneColumn' | 'twoColumns' | 'threeColumns';
          columnOne: {
            [k: string]: unknown;
          }[];
          columnTwo: {
            [k: string]: unknown;
          }[];
          columnThree: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        featuredContentFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          type?: 'products' | 'reviews' | 'seenon' | 'faqs';
          layout?: 'centredAccordion' | 'threeColGrid';
          items?:
            | (
                | {
                    value: string;
                    relationTo: 'products';
                  }
                | {
                    value: string;
                    relationTo: 'reviews';
                  }
                | {
                    value: string;
                    relationTo: 'faqs';
                  }
              )[]
            | (
                | {
                    value: Product;
                    relationTo: 'products';
                  }
                | {
                    value: Review;
                    relationTo: 'reviews';
                  }
                | {
                    value: Faq;
                    relationTo: 'faqs';
                  }
              )[];
          images?: {
            image: string | Media;
            id?: string;
          }[];
          trailingNote?: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'featuredContent';
      }
    | {
        linkGridFields?: {
          links?: {
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'primary' | 'secondary' | 'default';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'linkGrid';
      }
    | {
        mediaBlockFields: {
          position?: 'default' | 'wide';
          media: string | Media;
          caption?: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        mediaContentFields: {
          layout?: 'threeColGrid' | 'twoColGrid' | 'twoColBig';
          alignment?: 'contentMedia' | 'mediaContent' | 'centredMedia';
          content: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Product;
                  relationTo: 'products';
                };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
          };
          media: string | Media;
        };
        id?: string;
        blockName?: string;
        blockType: 'mediaContent';
      }
    | {
        reusableContentBlockFields: {
          reusableContent: string | ReusableContent;
        };
        id?: string;
        blockName?: string;
        blockType: 'reusableContentBlock';
      }
  )[];
  parent?: string | Page;
  breadcrumbs?: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Product {
  id: string;
  fullTitle?: string;
  slug?: string;
  title: string;
  description: string;
  stripeID?: string;
  quantity: number;
  stock?: {
    stock?: string[] | StockItem[];
    id?: string;
  }[];
  currency?: string;
  unit_amount?: number;
  layout: (
    | {
        productOverviewFields: {
          images?: {
            image: string | Media;
            id?: string;
          }[];
          content: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'productOverview';
      }
    | {
        productComponentsFields: {
          layout: 'twoColumns' | 'fourColumns' | 'imageLeft' | 'imageRight';
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          features?: {
            image: string | Media;
            content: {
              [k: string]: unknown;
            }[];
            id?: string;
          }[];
          image: string | Media;
          content?: {
            content: {
              [k: string]: unknown;
            }[];
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'productComponents';
      }
    | {
        perksFields?: {
          items?: {
            image: string | Media;
            content?: {
              [k: string]: unknown;
            }[];
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'perks';
      }
    | {
        heroFields: {
          layout: 'default' | 'imageRight';
          textColor: 'dark' | 'white';
          image: string | Media;
          content?: {
            [k: string]: unknown;
          }[];
          links?: {
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'default' | 'primary' | 'secondary';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'hero';
      }
    | {
        ctaFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          layout?: '2options' | 'simpleCentred' | 'centredImage';
          items: {
            media?: string | Media;
            content: {
              [k: string]: unknown;
            }[];
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'primary' | 'secondary' | 'default';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        contentFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          layout?: 'oneColumn' | 'twoColumns' | 'threeColumns';
          columnOne: {
            [k: string]: unknown;
          }[];
          columnTwo: {
            [k: string]: unknown;
          }[];
          columnThree: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        featuredContentFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          type?: 'products' | 'reviews' | 'seenon' | 'faqs';
          layout?: 'centredAccordion' | 'threeColGrid';
          items?:
            | (
                | {
                    value: string;
                    relationTo: 'products';
                  }
                | {
                    value: string;
                    relationTo: 'reviews';
                  }
                | {
                    value: string;
                    relationTo: 'faqs';
                  }
              )[]
            | (
                | {
                    value: Product;
                    relationTo: 'products';
                  }
                | {
                    value: Review;
                    relationTo: 'reviews';
                  }
                | {
                    value: Faq;
                    relationTo: 'faqs';
                  }
              )[];
          images?: {
            image: string | Media;
            id?: string;
          }[];
          trailingNote?: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'featuredContent';
      }
    | {
        linkGridFields?: {
          links?: {
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'primary' | 'secondary' | 'default';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'linkGrid';
      }
    | {
        mediaBlockFields: {
          position?: 'default' | 'wide';
          media: string | Media;
          caption?: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        mediaContentFields: {
          layout?: 'threeColGrid' | 'twoColGrid' | 'twoColBig';
          alignment?: 'contentMedia' | 'mediaContent' | 'centredMedia';
          content: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Product;
                  relationTo: 'products';
                };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
          };
          media: string | Media;
        };
        id?: string;
        blockName?: string;
        blockType: 'mediaContent';
      }
    | {
        reusableContentBlockFields: {
          reusableContent: string | ReusableContent;
        };
        id?: string;
        blockName?: string;
        blockType: 'reusableContentBlock';
      }
  )[];
  parent?: string | Product;
  breadcrumbs?: {
    doc?: string | Product;
    url?: string;
    label?: string;
    id?: string;
  }[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface StockItem {
  id: string;
  title?: string;
  type?: 'card' | 'gift' | 'box' | 'ribbon';
  description?: string;
  value?: 'high' | 'medium' | 'low' | 'discontinued';
  brand?: string | Brand;
  supplier?: string | Supplier;
  sku?: string;
  totalQty?: number;
  retailUnitCost?: number;
  wholesaleUnitCost?: number;
  comments?: string;
  discontinued?: boolean;
  image?: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface Brand {
  id: string;
  title: string;
  website: string;
  comments?: string;
  logo: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface Supplier {
  id: string;
  title: string;
  website: string;
  relationship: 'positive' | 'neutral' | 'negative';
  comments?: string;
  logo: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface Review {
  id: string;
  note?: string;
  providerName?: string;
  providerOrg?: string;
  link?: string;
  channel?: 'instagram' | 'facebook' | 'other';
  image?: string | Media;
  rating?: number;
  updatedAt: string;
  createdAt: string;
}
export interface Faq {
  id: string;
  question: string;
  answer: {
    [k: string]: unknown;
  }[];
  tags: {
    name: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface ReusableContent {
  id: string;
  title: string;
  layout: (
    | {
        contentFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          layout?: 'oneColumn' | 'twoColumns' | 'threeColumns';
          columnOne: {
            [k: string]: unknown;
          }[];
          columnTwo: {
            [k: string]: unknown;
          }[];
          columnThree: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        ctaFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          layout?: '2options' | 'simpleCentred' | 'centredImage';
          items: {
            media?: string | Media;
            content: {
              [k: string]: unknown;
            }[];
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'primary' | 'secondary' | 'default';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        featuredContentFields: {
          useLeadingHeader?: boolean;
          leadingHeader: {
            [k: string]: unknown;
          }[];
          type?: 'products' | 'reviews' | 'seenon' | 'faqs';
          layout?: 'centredAccordion' | 'threeColGrid';
          items?:
            | (
                | {
                    value: string;
                    relationTo: 'products';
                  }
                | {
                    value: string;
                    relationTo: 'reviews';
                  }
                | {
                    value: string;
                    relationTo: 'faqs';
                  }
              )[]
            | (
                | {
                    value: Product;
                    relationTo: 'products';
                  }
                | {
                    value: Review;
                    relationTo: 'reviews';
                  }
                | {
                    value: Faq;
                    relationTo: 'faqs';
                  }
              )[];
          images?: {
            image: string | Media;
            id?: string;
          }[];
          trailingNote?: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'featuredContent';
      }
    | {
        heroFields: {
          layout: 'default' | 'imageRight';
          textColor: 'dark' | 'white';
          image: string | Media;
          content?: {
            [k: string]: unknown;
          }[];
          links?: {
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'default' | 'primary' | 'secondary';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'hero';
      }
    | {
        linkGridFields?: {
          links?: {
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              label: string;
              appearance?: 'primary' | 'secondary' | 'default';
            };
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'linkGrid';
      }
    | {
        mediaBlockFields: {
          position?: 'default' | 'wide';
          media: string | Media;
          caption?: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        perksFields?: {
          items?: {
            image: string | Media;
            content?: {
              [k: string]: unknown;
            }[];
            id?: string;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'perks';
      }
    | {
        mediaContentFields: {
          layout?: 'threeColGrid' | 'twoColGrid' | 'twoColBig';
          alignment?: 'contentMedia' | 'mediaContent' | 'centredMedia';
          content: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Product;
                  relationTo: 'products';
                };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
          };
          media: string | Media;
        };
        id?: string;
        blockName?: string;
        blockType: 'mediaContent';
      }
    | {
        pricingFields?: {
          plans?: {
            name: string;
            hasPrice?: boolean;
            price: string;
            title: string;
            description?: string;
            enableLink?: boolean;
            link?: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Product;
                    relationTo: 'products';
                  };
              url: string;
              appearance?: 'primary' | 'secondary' | 'default';
            };
            features?: {
              icon?: 'check' | 'x';
              feature?: string;
              id?: string;
            }[];
            id?: string;
          }[];
          disclaimer?: string;
        };
        id?: string;
        blockName?: string;
        blockType: 'product-grid';
      }
  )[];
  updatedAt: string;
  createdAt: string;
}
export interface Order {
  id: string;
  fullTitle?: string;
  customer?: string | User;
  status?: 'pending' | 'cancelled' | 'onhold' | 'processing' | 'completed';
  termsAccepted?: boolean;
  subtotalAmount: string;
  shippingAmount: string;
  discountAmount: string;
  invoiceAmount: string;
  orderID: string;
  notes?: string;
  stripeInvoiceID?: string;
  stripePaymentIntentID?: string;
  events?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  items: {
    type?: 'product' | 'discount' | 'other';
    thankly?: {
      status?: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
      product?: string[] | Product[];
      tracking?: {
        number?: string;
        link?: string;
      };
      stripePriceID?: string;
      message?: {
        styles?: 'normal' | 'cursive' | 'capitals';
        text?: string;
      };
      receiver?: {
        name?: string;
        business?: string;
        type?: 'Residential' | 'Business' | 'PO Box / Locker';
        fulladdress?: string;
        addressLine1?: string;
        addressLine2?: string;
        suburb?: string;
        state?: string;
        postcode?: string;
      };
      requestedShipDate?: string;
    };
    discount?: string | Discount;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Discount {
  id: string;
  code?: string;
  description?: string;
  activeDate?: string;
  expiryDate?: string;
  value?: number;
  type?: 'percent' | 'amount';
  updatedAt: string;
  createdAt: string;
}
export interface Redirect {
  id: string;
  from: string;
  to: {
    type?: 'reference' | 'custom';
    reference:
      | {
          value: string | Page;
          relationTo: 'pages';
        }
      | {
          value: string | Product;
          relationTo: 'products';
        };
    url: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Menu {
  id: string;
  header: {
    name: string;
    navItems?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference:
          | {
              value: string | Page;
              relationTo: 'pages';
            }
          | {
              value: string | Product;
              relationTo: 'products';
            };
        url: string;
        label: string;
        appearance?: 'primary' | 'secondary' | 'default';
      };
      id?: string;
    }[];
  };
  footer: {
    logo?: string | Media;
    name: string;
    tagline: string;
    copyright: string;
    columns?: {
      name: string;
      navItems?: {
        link: {
          type?: 'reference' | 'custom';
          newTab?: boolean;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Product;
                relationTo: 'products';
              };
          url: string;
          label: string;
          appearance?: 'primary' | 'secondary' | 'default';
        };
        id?: string;
      }[];
      id?: string;
    }[];
  };
  updatedAt?: string;
  createdAt?: string;
}

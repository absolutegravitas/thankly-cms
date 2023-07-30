export interface User {
    id: string;
    stripeCustomerID?: string;
    email: string;
    name?: string;
    business?: string;

    hash?: string;
    lockUntil?: string;
    loginAttempts?: number;
    password?: string;
    resetPasswordExpiration?: string;
    resetPasswordToken?: string;
    roles?: ('admin' | 'customer' | 'user')[];
    salt?: string;
    skipSync?: boolean;

    // orders & carts
    orders?: Order[];
    cart: {
        items: {
            product?: string | Product | any;
            quantity?: number;
            id?: string;
        }[];
    };

    createdAt: string;
    updatedAt: string;
}

export interface Redirect {
    id: string;
    from: string;
    to: {
        type?: 'reference' | 'custom';
        reference:
        | { value: string | Page; relationTo: 'pages'; }
        | { value: string | Post; relationTo: 'posts'; }
        | { value: string | Post; relationTo: 'products'; };

        url: string;
    };

    updatedAt: string;
    createdAt: string;
}

export interface Menu {
    id: string;
    name: string;
    header: {
        navItems?: {
            link: {
                type?: 'reference' | 'custom';
                newTab?: boolean;
                reference:
                | { value: string | Page; relationTo: 'pages'; }
                | { value: string | Post; relationTo: 'posts'; }
                | { value: string | Product; relationTo: 'product'; };

                url: string;
                label: string;
                appearance?: 'primary' | 'secondary' | 'default';
            };
            id?: string;
        }[];
    };
    footer: {
        logo?: Media;
        name: string;
        tagline?: string;
        copyright: string;

        columns?: {
            name: string;
            navItems?: {
                link: {
                    type?: 'reference' | 'custom';
                    newTab?: boolean;
                    reference:
                    | { value: string | Page; relationTo: 'pages'; }
                    | { value: string | Post; relationTo: 'posts'; }
                    | { value: string | Product; relationTo: 'product'; };

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




export interface Post {
    id: string;
    title: string;
    image: string | Media;
    excerpt: { [k: string]: unknown; }[];
    content: (
        | { blogContentFields: { richText: { [k: string]: unknown; }[]; }; id?: string; blockName?: string; blockType: 'blogContent'; }
        | { blogMarkdownFields: { markdown: string; }; id?: string; blockName?: string; blockType: 'blogMarkdown'; }
        | { mediaBlockFields: MediaBlock; id?: string; blockName?: string; blockType: 'mediaBlock'; }
    )[];
    slug?: string;
    author?: string | User;
    publishedOn: string;
    meta?: Meta
    updatedAt: string;
    createdAt: string;
    _status?: 'draft' | 'published';
}



export interface Page {
    id: string;
    title: string;
    fullTitle?: string;
    layout: (any
        | { heroFields?: HeroBlock; id?: string; blockName?: string; blockType: 'hero'; }
        | { ctaFields?: CallToActionBlock; id?: string; blockName?: string; blockType: 'cta'; }
        | { cardGridFields?: CardGridBlock; id?: string; blockName?: string; blockType: 'cardGrid'; }
        | { contentFields?: ContentBlock; id?: string; blockName?: string; blockType: 'content'; }
        // | { contentGridFields?: ContentGridBlock; id?: string; blockName?: string; blockType: 'contentGrid'; }
        | { linkGridFields?: LinkGridBlocks; id?: string; blockName?: string; blockType: 'linkGrid'; }
        | { mediaBlockFields?: MediaBlock; id?: string; blockName?: string; blockType: 'mediaBlock'; }
        | { mediaContentFields?: MediaContentBlock; id?: string; blockName?: string; blockType: 'mediaContent'; }
        | { pricingFields?: PricingBlock; id?: string; blockName?: string; blockType: 'pricing'; }
        | { reusableContentBlockFields?: ReusableContent; id?: string; blockName?: string; blockType: 'reusableContentBlock'; }
        | { sliderFields?: SliderBlock; id?: string; blockName?: string; blockType: 'slider'; }
        | { stepsFields?: StepsBlock; id?: string; blockName?: string; blockType: 'steps'; }
        | { stickyHighlightsFields?: StickyHighlightsBlock; id?: string; blockName?: string; blockType: 'stickyHighlights'; }
    )[];
    slug?: string;
    parent?: string | Page;
    breadcrumbs?: {
        doc?: string | Page;
        url?: string;
        label?: string;
        id?: string;
    }[];
    meta?: Meta

    updatedAt: string;
    createdAt: string;
    _status?: 'draft' | 'published';
}


export interface Product {
    id: string;
    slug?: string;
    name: string;
    description: string;
    publishedDate?: string;
    quantity: number;
    sku: string;
    priceJSON?: string
    stripeProductID?: string
    type: 'card' | 'bundle'
    parent?: string | Page;
    breadcrumbs?: {
        doc?: string | Page;
        url?: string;
        label?: string;
        id?: string;
    }[];
    images?: {
        title?: string;
        image: string | Media;
        alt?: string;
        id?: string;
    }[];
    meta?: Meta

    layout: (
        | { heroFields: HeroBlock; id?: string; blockName?: string; blockType: 'hero'; }
        | { ctaFields: CallToActionBlock; id?: string; blockName?: string; blockType: 'cta'; }
        | { cardGridFields: CardGridBlock; id?: string; blockName?: string; blockType: 'cardGrid'; }
        | { contentFields: ContentBlock; id?: string; blockName?: string; blockType: 'content'; }
        | { contentGridFields: ContentGridBlock; id?: string; blockName?: string; blockType: 'contentGrid'; }
        | { linkGridFields?: LinkGridBlocks; id?: string; blockName?: string; blockType: 'linkGrid'; }
        | { mediaBlockFields: MediaBlock; id?: string; blockName?: string; blockType: 'mediaBlock'; }
        | { mediaContentFields: MediaContentBlock; id?: string; blockName?: string; blockType: 'mediaContent'; }
        | { pricingFields?: PricingBlock; id?: string; blockName?: string; blockType: 'pricing'; }
        | { reusableContentBlockFields: ReusableContent; id?: string; blockName?: string; blockType: 'reusableContentBlock'; }
        | { sliderFields: SliderBlock; id?: string; blockName?: string; blockType: 'slider'; }
        | { stepsFields: StepsBlock; id?: string; blockName?: string; blockType: 'steps'; }
        | { stickyHighlightsFields?: StickyHighlightsBlock; id?: string; blockName?: string; blockType: 'stickyHighlights'; }
    )[];
    skipSync?: boolean;

    updatedAt: string;
    createdAt: string;
    _status?: 'draft' | 'published';
}

export interface ProductBrand {
    id: string;

    comments: string;
    logo: string | Media;
    title: string;
    website: string;

    updatedAt: string;
    createdAt: string;
}

export interface Review {
    providerName?: string
    providerOrg?: string
    image?: string | Media;
    rating?: number
    note: string
}

export interface StockItem {
    id: string;
    title: string;

    brand?: string | ProductBrand;
    comments: string;
    description: string;
    image: string | Media;
    retailUnitCost: number;
    sku?: string;
    supplier?: string | Supplier;
    totalQty: number;
    type: 'card' | 'gift' | 'box' | 'ribbon';
    value: 'high' | 'medium' | 'low' | 'discontinued';
    wholesaleUnitCost: number;

    updatedAt: string;
    createdAt: string;
}
export interface Supplier {
    id: string;
    title: string;
    website: string;
    relationship: 'positive' | 'neutral' | 'negative';
    logo: string | Media;
    updatedAt: string;
    createdAt: string;
    comments: string;

}
export interface ReusableContent {

    id: string;
    title: string;
    layout: (
        | {
            blogContentFields: { richText: { [k: string]: unknown; }[]; };
            id?: string;
            blockName?: string;
            blockType: 'blogContent';
        }
        | {
            blogMarkdownFields: { markdown: string; };
            id?: string;
            blockName?: string;
            blockType: 'blogMarkdown';
        }
        | { ctaFields: CallToActionBlock; id?: string; blockName?: string; blockType: 'cta'; }
        | { cardGridFields: CardGridBlock; id?: string; blockName?: string; blockType: 'cardGrid'; }
        | { contentFields: ContentBlock; id?: string; blockName?: string; blockType: 'content'; }
        | { contentGridFields: ContentGridBlock; id?: string; blockName?: string; blockType: 'contentGrid'; }
        | { linkGridFields?: LinkGridBlocks; id?: string; blockName?: string; blockType: 'linkGrid'; }
        | { mediaBlockFields: MediaBlock; id?: string; blockName?: string; blockType: 'mediaBlock'; }
        | { mediaContentFields: MediaContentBlock; id?: string; blockName?: string; blockType: 'mediaContent'; }
        | { pricingFields?: PricingBlock; id?: string; blockName?: string; blockType: 'pricing'; }
        | { sliderFields: SliderBlock; id?: string; blockName?: string; blockType: 'slider'; }
        | { stepsFields: StepsBlock; id?: string; blockName?: string; blockType: 'steps'; }
        | { stickyHighlightsFields?: StickyHighlightsBlock; id?: string; blockName?: string; blockType: 'stickyHighlights'; }
    )[];
    updatedAt: string;
    createdAt: string;

}
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
        receiver: {
            name: string,
            business?: string,
            address: {
                fulladdress: string,
                type?: 'po-box' | 'parcel-locker' | 'business' | 'residential'
                addressLine1: string,
                addressLine2?: string,
                suburb: string,
                state: string,
                postcode: string,
                // country: string | 'Australia'
            }
        };
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

export interface Meta {
    title?: string;
    description?: string;
    image?: string | Media;
}
export interface Media {
    alt: string;
    createdAt: string;
    darkModeFallback?: string | Media;
    filename?: string;
    filesize?: number;
    height?: number;
    id: string;
    mimeType?: string;
    updatedAt: string;
    url?: string;
    width?: number;
}
export interface Discount {
    activeDate: Date
    code: string
    description?: string
    type: 'percent' | 'amount'
    expiryDate: Date
    value: number
}


export interface CallToActionBlock {
    ctaBackgroundColor?: 'white' | 'black';

    richText: { [k: string]: unknown; }[];
    feature: 'none' | 'cpa';
    layout: 'none' | 'cpa';
    links?: {
        link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
            | { value: string | Page; relationTo: 'pages'; }
            | { value: string | Post; relationTo: 'posts'; };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
        };
        id?: string;
    }[];
};

export interface ContentBlock {
    useLeadingHeader?: boolean;
    leadingHeader: { [k: string]: unknown; }[];
    layout?: 'oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
    columnOne: { [k: string]: unknown; }[];
    columnTwo: { [k: string]: unknown; }[];
    columnThree: { [k: string]: unknown; }[];
};

export interface MediaBlock {
    position?: 'default' | 'wide';
    media: string | Media;
    caption?: { [k: string]: unknown; }[];
};

export interface HeroBlock {
    type: 'default' | 'contentMedia' | 'home' | 'livestream';
    livestream?: {
        id?: string;
        date: string;
        hideBreadcrumbs?: boolean;
        richText?: { [k: string]: unknown; }[];
        guests?: {
            name?: string;
            link?: string;
            image?: string | Media;
            id?: string;
        }[];
    };
    richText?: { [k: string]: unknown; }[];
    sidebarContent?: { [k: string]: unknown; }[];
    links?: {
        link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
            | { value: string | Page; relationTo: 'pages'; }
            | { value: string | Post; relationTo: 'posts'; };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
        };
        id?: string;
    }[];
    actions?: {
        link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
            | { value: string | Page; relationTo: 'pages'; }
            | { value: string | Post; relationTo: 'posts'; };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
        };
        id?: string;
    }[];
    buttons?: {
        link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
            | { value: string | Page; relationTo: 'pages'; }
            | { value: string | Post; relationTo: 'posts'; };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
        };
        id?: string;
    }[];
    media: string | Media;
    adjectives?: {
        adjective: string;
        id?: string;
    }[];
}

export interface CardGridBlock {
    richText: {
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
                value: string | Post;
                relationTo: 'posts';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
        };
        id?: string;
    }[];
    cards?: {
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
                value: string | Post;
                relationTo: 'posts';
            };
            url: string;
            appearance?: 'primary' | 'secondary' | 'default';
        };
        id?: string;
    }[];
}

export interface ContentBlock {
    useLeadingHeader?: boolean;
    leadingHeader: { [k: string]: unknown; }[];
    layout?: 'oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
    columnOne: { [k: string]: unknown; }[];
    columnTwo: { [k: string]: unknown; }[];
    columnThree: { [k: string]: unknown; }[];
}

export interface ContentGridBlock {
    forceDarkBackground?: boolean;
    useLeadingHeader?: boolean;
    leadingHeader: { [k: string]: unknown; }[];
    cells?: { content: { [k: string]: unknown; }[]; id?: string; }[];
}

export interface LinkGridBlocks {
    links?: {
        link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
            | { value: string | Page; relationTo: 'pages'; }
            | { value: string | Post; relationTo: 'posts'; };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
        };
        id?: string;
    }[];
}

export interface MediaContentBlock {
    alignment?: 'contentMedia' | 'mediaContent';
    container?: boolean;
    richText: { [k: string]: unknown; }[];
    enableLink?: boolean;
    link?: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference:
        | { value: string | Page; relationTo: 'pages'; }
        | { value: string | Post; relationTo: 'posts'; };
        url: string;
        label: string;
        appearance?: 'primary' | 'secondary' | 'default';
    };
    media: string | Media;
}

export interface PricingBlock {
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
            | { value: string | Page; relationTo: 'pages'; }
            | { value: string | Post; relationTo: 'posts'; };
            url: string;
            appearance?: 'primary' | 'secondary' | 'default';
        };
        features?: { icon?: 'check' | 'x'; feature?: string; id?: string; }[];
        id?: string;
    }[];
    disclaimer?: string;
}

export interface SliderBlock {
    useLeadingHeader?: boolean;
    leadingHeader: { [k: string]: unknown; }[];
    sliderType: 'quoteSlider' | 'imageSlider';
    imageSlides: { image: string | Media; id?: string; }[];
    quoteSlides: {
        richText: { [k: string]: unknown; }[];
        quoteDate: string;
        id?: string;
    }[];
}

export interface StepsBlock {
    steps: {
        layout?: (
            | { contentFields: ContentBlock; id?: string; blockName?: string; blockType: 'content'; }
            | { stickyHighlightsFields?: StickyHighlightsBlock; id?: string; blockName?: string; blockType: 'stickyHighlights'; }
        )[];
        id?: string;
    }[];
}

export interface StickyHighlightsBlock {
    highlights?: {
        richText: { [k: string]: unknown; }[];
        enableLink?: boolean;
        link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference:
            | { value: string | Page; relationTo: 'pages'; }
            | { value: string | Post; relationTo: 'posts'; };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
        };
        type?: 'code' | 'media';
        code: string;
        media: string | Media;
        id?: string;
    }[];
}

export interface ReusableContent {
    id: string;
    title: string;
    layout: (
        | { blogContentFields: { richText: { [k: string]: unknown; }[]; }; id?: string; blockName?: string; blockType: 'blogContent'; }
        | { blogMarkdownFields: { markdown: string; }; id?: string; blockName?: string; blockType: 'blogMarkdown'; }
        | { ctaFields: CallToActionBlock; id?: string; blockName?: string; blockType: 'cta'; }
        | { cardGridFields: CardGridBlock; id?: string; blockName?: string; blockType: 'cardGrid'; }
        | { contentFields: ContentBlock; id?: string; blockName?: string; blockType: 'content'; }
        | { contentGridFields: ContentGridBlock; id?: string; blockName?: string; blockType: 'contentGrid'; }
        | { linkGridFields?: LinkGridBlocks; id?: string; blockName?: string; blockType: 'linkGrid'; }
        | { mediaBlockFields: MediaBlock; id?: string; blockName?: string; blockType: 'mediaBlock'; }
        | { mediaContentFields: MediaContentBlock; id?: string; blockName?: string; blockType: 'mediaContent'; }
        | { pricingFields?: PricingBlock; id?: string; blockName?: string; blockType: 'pricing'; }
        | { sliderFields: SliderBlock; id?: string; blockName?: string; blockType: 'slider'; }
        | { stepsFields: StepsBlock; id?: string; blockName?: string; blockType: 'steps'; }
        | { stickyHighlightsFields?: StickyHighlightsBlock; id?: string; blockName?: string; blockType: 'stickyHighlights'; }
    )[];
    updatedAt: string;
    createdAt: string;
}

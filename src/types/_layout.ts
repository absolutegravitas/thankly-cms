import { Page } from "./page";
import { Post } from "./post";
import { Media } from "./media";

export interface BannerBlock {
    type?: 'default' | 'success' | 'warning' | 'error';
    addCheckmark?: boolean;
    content: {
        [k: string]: unknown;
    }[];
};

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

export interface HoverHighlightBlock {
    richText: { [k: string]: unknown; }[];
    addRowNumbers?: boolean;
    highlights?: {
        title: string;
        description: string;
        media: string | Media;
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
        id?: string;
    }[];
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
            | { hoverHighlightsFields: HoverHighlightBlock; id?: string; blockName?: string; blockType: 'hoverHighlights'; }
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
        | { bannerFields: BannerBlock; id?: string; blockName?: string; blockType: 'banner'; }
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
        | { hoverHighlightsFields: HoverHighlightBlock; id?: string; blockName?: string; blockType: 'hoverHighlights'; }
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
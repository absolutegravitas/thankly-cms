import { Meta } from './meta';
import { Media } from './media';
import { Page } from './page';
import { BannerBlock, CallToActionBlock, CardGridBlock, ContentBlock, ContentGridBlock, HeroBlock, HoverHighlightBlock, LinkGridBlocks, MediaBlock, MediaContentBlock, PricingBlock, ReusableContent, SliderBlock, StepsBlock, StickyHighlightsBlock } from "./_layout";

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
        | { bannerFields: BannerBlock; id?: string; blockName?: string; blockType: 'banner'; }
        | { heroFields: HeroBlock; id?: string; blockName?: string; blockType: 'hero'; }
        | { ctaFields: CallToActionBlock; id?: string; blockName?: string; blockType: 'cta'; }
        | { cardGridFields: CardGridBlock; id?: string; blockName?: string; blockType: 'cardGrid'; }
        | { contentFields: ContentBlock; id?: string; blockName?: string; blockType: 'content'; }
        | { contentGridFields: ContentGridBlock; id?: string; blockName?: string; blockType: 'contentGrid'; }
        | { hoverHighlightsFields: HoverHighlightBlock; id?: string; blockName?: string; blockType: 'hoverHighlights'; }
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
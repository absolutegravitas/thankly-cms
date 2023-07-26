import type { Media } from './media'
import type { User } from './_global'
import { Meta } from './meta';
import { BannerBlock, MediaBlock, ReusableContent } from './_layout';

export interface Post {
  id: string;
  title: string;
  image: string | Media;
  excerpt: { [k: string]: unknown; }[];
  content: (
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
    | { mediaBlockFields: MediaBlock; id?: string; blockName?: string; blockType: 'mediaBlock'; }
    | {
      reusableContentBlockFields: ReusableContent; id?: string; blockName?: string; blockType: 'reusableContentBlock';
    }
  )[];
  slug?: string;
  author: string | User;
  publishedOn: string;
  meta?: Meta
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
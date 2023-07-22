/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  globals: {
    menus: Menu;
    brand: Brand;
  };

  collections: {
    'product-brands': ProductBrand;
    'reusable-content': ReusableContent;
    categories: Category;
    media: Media;
    orders: Order;
    pages: Page;
    posts: Post;
    products: Product;
    redirects: Redirect;
    stockItems: StockItem;
    suppliers: Supplier;
    users: User;
  };

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
  layout: (
    | {
      ctaFields: {
        richText: {
          [k: string]: unknown;
        }[];
        feature: 'none' | 'cpa';
        layout: 'none' | 'cpa';
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
        layout?: 'oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
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
      introContent: {
        [k: string]: unknown;
      }[];
      populateBy?: 'collection' | 'selection';
      relationTo?: 'products';
      categories?: string[] | Category[];
      limit?: number;
      selectedDocs?:
      | {
        value: string;
        relationTo: 'products';
      }[]
      | {
        value: Product;
        relationTo: 'products';
      }[];
      populatedDocs?:
      | {
        value: string;
        relationTo: 'products';
      }[]
      | {
        value: Product;
        relationTo: 'products';
      }[];
      populatedDocsTotal?: number;
      id?: string;
      blockName?: string;
      blockType: 'archive';
    }
  )[];
  categories?: string[] | Category[];
  skipSync?: boolean;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Media {
  id: string;
  alt: string;
  darkModeFallback?: string | Media;
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
  title: string;
  fullTitle?: string;
  layout: (
    | {
      bannerFields: {
        type: 'default' | 'contentMedia' | 'home' | 'livestream';
        livestream?: {
          id?: string;
          date: string;
          hideBreadcrumbs?: boolean;
          richText?: {
            [k: string]: unknown;
          }[];
          guests?: {
            name?: string;
            link?: string;
            image?: string | Media;
            id?: string;
          }[];
        };
        richText?: {
          [k: string]: unknown;
        }[];
        sidebarContent?: {
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
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        actions?: {
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
        buttons?: {
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
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        media: string | Media;
        adjectives?: {
          adjective: string;
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'hero';
    }
    | {
      bannerFields: {
        type?: 'default' | 'success' | 'warning' | 'error';
        addCheckmark?: boolean;
        content: {
          [k: string]: unknown;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'banner';
    }
    | {
      ctaFields: {
        richText: {
          [k: string]: unknown;
        }[];
        feature: 'none' | 'cpa';
        layout: 'none' | 'cpa';
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
      };
      id?: string;
      blockName?: string;
      blockType: 'cta';
    }
    | {
      cardGridFields: {
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
      };
      id?: string;
      blockName?: string;
      blockType: 'cardGrid';
    }
    | {
      contentFields: {
        useLeadingHeader?: boolean;
        leadingHeader: {
          [k: string]: unknown;
        }[];
        layout?: 'oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
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
      contentGridFields: {
        forceDarkBackground?: boolean;
        useLeadingHeader?: boolean;
        leadingHeader: {
          [k: string]: unknown;
        }[];
        cells?: {
          content: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'contentGrid';
    }
    | {
      hoverHighlightsFields: {
        richText: {
          [k: string]: unknown;
        }[];
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
      };
      id?: string;
      blockName?: string;
      blockType: 'hoverHighlights';
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
              value: string | Post;
              relationTo: 'posts';
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
        alignment?: 'contentMedia' | 'mediaContent';
        container?: boolean;
        richText: {
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
            value: string | Post;
            relationTo: 'posts';
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
              value: string | Post;
              relationTo: 'posts';
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
      blockType: 'pricing';
    }
    | {
      reusableContentBlockFields: {
        reusableContent: string | ReusableContent;
      };
      id?: string;
      blockName?: string;
      blockType: 'reusableContentBlock';
    }
    | {
      sliderFields: {
        useLeadingHeader?: boolean;
        leadingHeader: {
          [k: string]: unknown;
        }[];
        sliderType: 'quoteSlider' | 'imageSlider';
        imageSlides: {
          image: string | Media;
          id?: string;
        }[];
        quoteSlides: {
          richText: {
            [k: string]: unknown;
          }[];
          quoteDate: string;
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'slider';
    }
    | {
      stepsFields: {
        steps: {
          layout?: (
            | {
              contentFields: {
                useLeadingHeader?: boolean;
                leadingHeader: {
                  [k: string]: unknown;
                }[];
                layout?: 'oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
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
              hoverHighlightsFields: {
                richText: {
                  [k: string]: unknown;
                }[];
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
              };
              id?: string;
              blockName?: string;
              blockType: 'hoverHighlights';
            }
            | {
              stickyHighlightsFields?: {
                highlights?: {
                  richText: {
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
                      value: string | Post;
                      relationTo: 'posts';
                    };
                    url: string;
                    label: string;
                    appearance?: 'primary' | 'secondary' | 'default';
                  };
                  type?: 'code' | 'media';
                  code: string;
                  media: string | Media;
                  id?: string;
                }[];
              };
              id?: string;
              blockName?: string;
              blockType: 'stickyHighlights';
            }
          )[];
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'steps';
    }
    | {
      stickyHighlightsFields?: {
        highlights?: {
          richText: {
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
              value: string | Post;
              relationTo: 'posts';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
          };
          type?: 'code' | 'media';
          code: string;
          media: string | Media;
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'stickyHighlights';
    }
  )[];
  slug?: string;
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
export interface Post {
  id: string;
  title: string;
  image: string | Media;
  excerpt: {
    [k: string]: unknown;
  }[];
  content: (
    | {
      bannerFields: {
        type?: 'default' | 'success' | 'warning' | 'error';
        addCheckmark?: boolean;
        content: {
          [k: string]: unknown;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'banner';
    }
    | {
      blogContentFields: {
        richText: {
          [k: string]: unknown;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'blogContent';
    }
    | {
      blogMarkdownFields: {
        markdown: string;
      };
      id?: string;
      blockName?: string;
      blockType: 'blogMarkdown';
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
      reusableContentBlockFields: {
        reusableContent: string | ReusableContent;
      };
      id?: string;
      blockName?: string;
      blockType: 'reusableContentBlock';
    }
  )[];
  slug?: string;
  author: string | User;
  publishedOn: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface ReusableContent {
  id: string;
  title: string;
  layout: (
    | {
      bannerFields: {
        type?: 'default' | 'success' | 'warning' | 'error';
        addCheckmark?: boolean;
        content: {
          [k: string]: unknown;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'banner';
    }
    | {
      blogContentFields: {
        richText: {
          [k: string]: unknown;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'blogContent';
    }
    | {
      blogMarkdownFields: {
        markdown: string;
      };
      id?: string;
      blockName?: string;
      blockType: 'blogMarkdown';
    }
    | {
      ctaFields: {
        richText: {
          [k: string]: unknown;
        }[];
        feature: 'none' | 'cpa';
        layout: 'none' | 'cpa';
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
      };
      id?: string;
      blockName?: string;
      blockType: 'cta';
    }
    | {
      cardGridFields: {
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
      };
      id?: string;
      blockName?: string;
      blockType: 'cardGrid';
    }
    | {
      contentFields: {
        useLeadingHeader?: boolean;
        leadingHeader: {
          [k: string]: unknown;
        }[];
        layout?: 'oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
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
      contentGridFields: {
        forceDarkBackground?: boolean;
        useLeadingHeader?: boolean;
        leadingHeader: {
          [k: string]: unknown;
        }[];
        cells?: {
          content: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'contentGrid';
    }
    | {
      hoverHighlightsFields: {
        richText: {
          [k: string]: unknown;
        }[];
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
      };
      id?: string;
      blockName?: string;
      blockType: 'hoverHighlights';
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
              value: string | Post;
              relationTo: 'posts';
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
        alignment?: 'contentMedia' | 'mediaContent';
        container?: boolean;
        richText: {
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
            value: string | Post;
            relationTo: 'posts';
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
              value: string | Post;
              relationTo: 'posts';
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
      blockType: 'pricing';
    }
    | {
      sliderFields: {
        useLeadingHeader?: boolean;
        leadingHeader: {
          [k: string]: unknown;
        }[];
        sliderType: 'quoteSlider' | 'imageSlider';
        imageSlides: {
          image: string | Media;
          id?: string;
        }[];
        quoteSlides: {
          richText: {
            [k: string]: unknown;
          }[];
          quoteDate: string;
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'slider';
    }
    | {
      stepsFields: {
        steps: {
          layout?: (
            | {
              contentFields: {
                useLeadingHeader?: boolean;
                leadingHeader: {
                  [k: string]: unknown;
                }[];
                layout?: 'oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
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
              hoverHighlightsFields: {
                richText: {
                  [k: string]: unknown;
                }[];
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
              };
              id?: string;
              blockName?: string;
              blockType: 'hoverHighlights';
            }
            | {
              stickyHighlightsFields?: {
                highlights?: {
                  richText: {
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
                      value: string | Post;
                      relationTo: 'posts';
                    };
                    url: string;
                    label: string;
                    appearance?: 'primary' | 'secondary' | 'default';
                  };
                  type?: 'code' | 'media';
                  code: string;
                  media: string | Media;
                  id?: string;
                }[];
              };
              id?: string;
              blockName?: string;
              blockType: 'stickyHighlights';
            }
          )[];
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'steps';
    }
    | {
      stickyHighlightsFields?: {
        highlights?: {
          richText: {
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
              value: string | Post;
              relationTo: 'posts';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary' | 'default';
          };
          type?: 'code' | 'media';
          code: string;
          media: string | Media;
          id?: string;
        }[];
      };
      id?: string;
      blockName?: string;
      blockType: 'stickyHighlights';
    }
  )[];
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  name: string;
  business: string;

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
  orders?: string[] | Order[]

  cart: {
    items: Array<{
      product?: string | Product
      quantity?: number
      id?: string
    }>
  }
}
// export interface Voucher {
//   code: string
//   totalValue: number
//   remainingValue: number
// }

export interface Discount {
  code: string
  value: number
  activeDate: Date
  expiryDate: Date
}

export interface Recipient {
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
}

export interface Event {
  date: Date
  type: 'delivery' | 'updates' | 'error'
  message:String
}
export interface Order {
  // basic fields
  id: string
  termsAccepted: Boolean
  stripeInvoiceID?: string
  stripePaymentIntentID?: string

  // pending -- order created (temp cart)
  // Processing — Payment received (paid) and stock has been reduced; order is awaiting fulfillment. All product orders require processing, except those that only contain products which are both Virtual and Downloadable.
  // Completed — Order fulfilled and complete – requires no further action.
  // On hold — Awaiting payment – stock is reduced, but you need to confirm payment.
  // Cancelled — Cancelled by an admin or the customer – stock is increased, no further action required.
  status: 'pending' | 'canceled' | 'onhold' | 'processing' | 'completed'
  channel: 'manual' | 'web' | 'fb' | 'insta' // records the initiating channel for the order
  notes: string // store order notes / messages to thankly
  events: JSON // store events user or api generated

  // invoice totals
  subtotalAmount: number // total of all order items
  shippingAmount: number // add value of shipping costs
  discountAmount: number // less value of discount applied on whole order
  // voucherAmount: number // less value of voucher(s) applied
  // TODO: implement tax rates based on originating country or let Stripe Tax do it
  // taxAmount: number // plus taxes on order (GST 10%)
  invoiceAmount: number // equals

  // vouchers: Array<{ voucher: Voucher }>
  discount: Discount

  // order line items
  items: Array<{
    product: Product
    stripePriceID: String // price used for this order
    message: { text: String; style: 'normal' | 'cursive' | 'block' }
    status: 'cancelled' | 'processing' | 'shipped' | 'delivered'
    recipient: Recipient
  }>

  // customer that ordered
  customer: {
    user?: string | User
    name?: string
    email?: string
    stripeCustomerID?: string
  }

  createdAt: string
  updatedAt: string
}


export interface Category {
  id: string;
  title?: string;
  parent?: string | Category;
  breadcrumbs?: {
    doc?: string | Category;
    url?: string;
    label?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface StockItem {
  id: string;
  title: string;
  description: string;
  type: 'card' | 'gift' | 'box' | 'ribbon';
  categories?: string[] | Category[];
  brand?: string | ProductBrand;
  supplier?: string | Supplier;
  sku?: string;
  totalQty: number;
  unitCost: number;
  image: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface ProductBrand {
  id: string;
  title: string;
  website: string;
  logo: string | Media;
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
      value: string | Post;
      relationTo: 'posts';
    };
    url: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Menu {
  id: string;
  header: {
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
          value: string | Post;
          relationTo: 'posts';
        };
        url: string;
        label: string;
        appearance?: 'primary' | 'secondary' | 'default';
      };
      id?: string;
    }[];
  };
  footer: {
    columns?: {
      columnName: string;
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
            value: string | Post;
            relationTo: 'posts';
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
  topBar: {
    text?: string;
    icon?: string;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Brand {
  id: string;
  basicInfo: {
    name: string;
    tagline: string;
    domain: string;
    copyright: string;
    cookieNotice: string;
  };
  styleLight: {
    logo?: string | Media;
    colorText: string;
    colorAccent: string;
    colorBackground: string;
  };
  styleDark: {
    logo?: string | Media;
    colorText: string;
    colorAccent: string;
    colorBackground: string;
  };
  keyPages: {
    homePage?: string | Page;
    shopPage?: string | Page;
    blogPage?: string | Page;
    privacyPage?: string | Page;
    termsPage?: string | Page;
  };
  updatedAt?: string;
  createdAt?: string;
}

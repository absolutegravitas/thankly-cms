import type { RichTextElement, RichTextField, RichTextLeaf } from 'payload/dist/fields/config/types'

import deepMerge from '../../utilities/deepMerge'
import link from '../link'
import elements from './elements'
import leaves from './leaves'

type RichText = (
  overrides?: Partial<RichTextField>,
  additions?: {
    elements?: RichTextElement[]
    leaves?: RichTextLeaf[]
  },
) => RichTextField

const richText: RichText = (
  overrides,
  additions = {
    elements: [],
    leaves: [],
  },
) =>
  deepMerge<RichTextField, Partial<RichTextField>>(
    {
      name: 'richText',
      type: 'richText',
      required: true,
      admin: {
        upload: {
          collections: {
            media: {
              fields: [
                {
                  name: 'enableLink',
                  type: 'checkbox',
                  label: 'Enable Link',
                },
                link({
              // appearances: false,
              appearances: ['primary', 'secondary', 'default'],                  disableLabel: true,
                  overrides: {
                    admin: {
                      condition: (_, data) => Boolean(data?.enableLink),
                    },
                  },
                }),
              ],
            },
          },
        },
        elements: [...elements, ...(additions.elements || [])],
        leaves: [...leaves, ...(additions.leaves || [])],
      },
    },
    overrides,
  )

export default richText

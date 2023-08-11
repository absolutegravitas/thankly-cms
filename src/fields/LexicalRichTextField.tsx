import { Field } from 'payload/types'
import {
  AutoCompleteFeature,
  CollapsibleFeature,
  ConvertFromMarkdownFeature,
  EmojiPickerFeature,
  EmojisFeature,
  HorizontalRuleFeature,
  KeywordsFeature,
  lexicalRichTextField,
  LinkFeature,
  TableOfContentsFeature,
  TwitterFeature,
  YouTubeFeature,
  // AISuggestFeature,
} from 'payload-plugin-lexical'

function lexicalRichText(props?: {
  name?: string
  label?: string
  admin?: Object
  debug?: boolean
}): Field {
  return lexicalRichTextField({
    name: props?.name ? props?.name : 'content',
    label: props?.label ? props?.label : 'Content',
    editorConfigModifier: defaultEditorConfig => {
      defaultEditorConfig.debug = false
      defaultEditorConfig.toggles.textColor.enabled = true
      defaultEditorConfig.toggles.textBackground.enabled = true
      defaultEditorConfig.toggles.fontSize.enabled = true
      defaultEditorConfig.toggles.font.enabled = false
      defaultEditorConfig.toggles.align.enabled = true
      defaultEditorConfig.toggles.tables.enabled = true
      defaultEditorConfig.toggles.tables.display = false
      defaultEditorConfig.toggles.comments.enabled = false
      // defaultEditorConfig.output.html.enabled = true
      defaultEditorConfig.output.markdown.enabled = true
      // Optional: these are the default features. Feel free to customize them or remove the ones you do not like!
      defaultEditorConfig.features = [
        YouTubeFeature({}), // YouTube Embed
        LinkFeature({}), // Obvious: hyperlinks! This includes the AutoLink plugin.
      ]
      return defaultEditorConfig
    },
    admin: props?.admin ? props?.admin : {},
  })
}

export default lexicalRichText

// import { FieldBase } from 'payload/dist/fields/config/types';
// import { Field } from 'payload/types';
import { FieldBase, RichTextField } from 'payload/types';

// import {
//   // AISuggestFeature,
//   // ClearEditorFeature,
//   // ConvertFromMarkdownFeature,
//   // CollapsibleFeature,
//   // EquationsFeature,
//   // ImportFeature,
//   // MentionsFeature,
//   // PasteLogFeature,
//   // ReadOnlyModeFeature,
//   // TestRecorderFeature,
//   // TreeViewFeature,
//   // TypingPerfFeature,
//   // TableOfContentsFeature,
//   // AutoCompleteFeature,
//   EmojiPickerFeature,
//   EmojisFeature,
//   ExportFeature,
//   FigmaFeature,
//   HorizontalRuleFeature,
//   KeywordsFeature,
//   LinkFeature,
//   SpeechToTextFeature,
//   TwitterFeature,
//   YouTubeFeature,
//   lexicalRichTextField,
// } from 'payload-plugin-lexical';

// export const richTextField = (data: FieldBase): Field =>
//   lexicalRichTextField({
//     ...data,
//     editorConfigModifier: (defaultEditorConfig) => {
//       defaultEditorConfig.debug = false;
//       defaultEditorConfig.toggles.comments.enabled = false;
//       defaultEditorConfig.toggles.textColor.enabled = false;
//       defaultEditorConfig.toggles.textBackground.enabled = false;
//       defaultEditorConfig.toggles.fontSize.enabled = false;
//       defaultEditorConfig.toggles.font.enabled = false;
//       defaultEditorConfig.toggles.align.enabled = true;
//       defaultEditorConfig.toggles.tables.enabled = true;
//       defaultEditorConfig.toggles.tables.display = true;

//       defaultEditorConfig.features = [
//         // EquationsFeature({}), // LaTex (well KaTeX) equations
//         EmojisFeature({}), // Adds new Emoji nodes with new, different-looking emojis
//         EmojiPickerFeature({}), // Use in combination with EmojisPlugin. When you start typing ":" it will show you different emojis you can use. They also look different!
//         HorizontalRuleFeature({}), // Horizontal rule in the editor.
//         FigmaFeature({}), // Figma Embed
//         YouTubeFeature({}), // YouTube Embed
//         TwitterFeature({}), // Twitter Embed
//         SpeechToTextFeature({}), // Adds a Speech-to-text button in the Actions menu (bottom right of the editor). When you click on it and speak, it converts the speech into text
//         // ImportFeature({}), // Acion button: import
//         ExportFeature({}), // Acion button: export
//         // ClearEditorFeature({}), // Adds a button in the action menu which clears the editor
//         // ReadOnlyModeFeature({}), // Acion button: toggle read-only mode on or off
//         // ConvertFromMarkdownFeature({}), // Acion button: convert from markdown
//         // MentionsFeature({}), // Ability to mention someone when you type "@"
//         // TreeViewFeature({ enabled: defaultEditorConfig.debug }), // If enabled, will show the node representation of the editor under the editor. Good for debugging
//         KeywordsFeature({}), // Highlights certain words
//         // AutoCompleteFeature({}), // Autocompletes certain words while typing
//         // CollapsibleFeature({}), // Adds a "collapsible" node
//         // TypingPerfFeature({ enabled: defaultEditorConfig.debug }), // Some debug tool for performance testing
//         // PasteLogFeature({ enabled: defaultEditorConfig.debug }), // Another debug tool
//         // TestRecorderFeature({ enabled: defaultEditorConfig.debug }), // Another debug tool used for lexical core development, with which you can automatically generate tests
//         LinkFeature({}), // Obvious: hyperlinks! This includes the AutoLink plugin.
//         // TableOfContentsFeature({ enabled: true }), // Shows a table of contents on the right hand-side of the screen
//         // AISuggestFeature({}), // Make sure you set your openai key in the plugin config to be able to use it
//       ];

//       // defaultEditorConfig.features.push(YourOwnCustomFeature({}));

//       return defaultEditorConfig;
//     },
//   });

export const richTextField = (data: FieldBase): RichTextField => ({
  ...data,
  type: 'richText',
  name: data.name,
});

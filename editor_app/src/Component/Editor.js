import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

function Editor_comp() {
  const [editorState, setEditorState] = useState("");
  const [eng_editor, setEng_editor] = useState("")
  return (
    <div className="container">
      <Editor
      
        editorState={editorState}
        wrapperClassName="wrapper-class"
        // editorClassName="editor-class"
        toolbarClassName="toolbar"
        // wrapperStyle={<wrapperStyleObject>}
        // editorStyle={<editorStyleObject>}
        // toolbarStyle={<toolbarStyleObject>}
        hashtag={{
            separator: ' ',
            trigger: '#',
          }}
        onEditorStateChange={(e) => setEditorState(e)}
        onChange={(e) => {

            setEng_editor(draftToHtml(convertToRaw(editorState.getCurrentContent())))
            console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        }}
        
        toolbar={{
            
                options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
                inline: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
                //   bold: { icon: bold, className: undefined },
                },
                blockType: {
                  inDropdown: false,
                  options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
                fontSize: {
                //   icon: fontSize,
                inDropdown:true,
                  options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
                fontFamily: {
                  options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
                list: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ['unordered', 'ordered', 'indent', 'outdent'],
                },
                textAlign: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ['left', 'center', 'right', 'justify'],
                },
              
                link: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  dropdownClassName: undefined,
                  showOpenOptionOnHover: true,
                  defaultTargetOption: '_self',
                  options: ['link', 'unlink'],
                  linkCallback: undefined
                },
                emoji: {
              
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  emojis: [
                    '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                    '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                    '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                    '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                    '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                    '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                    '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                    '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                    '✅', '❎', '💯',
                  ],
                },
                embedded: {
            
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  embedCallback: undefined,
                  defaultSize: {
                    height: 'auto',
                    width: 'auto',
                  },
                },
             
                remove: {  className: undefined, component: undefined },
                history: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ['undo', 'redo'],
                 
                },
              
        }}
      />
      <textarea style={{width:"100%"}} disabled value={eng_editor} />
    </div>
  );
}

export default Editor_comp;

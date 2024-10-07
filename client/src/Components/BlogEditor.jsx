import React from 'react';
import MDEditor from '@uiw/react-md-editor';

function BlogEditor({ content, setContent }) {
  return (
    <div className="mb-4 w-full">
      <MDEditor value={content} onChange={setContent} className="mb-4" />
      <MDEditor.Markdown source={content} />
    </div>
  );
}

export default BlogEditor;

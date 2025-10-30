import React, { type ReactNode } from 'react';

// Use direct imports without type checking for now
const DocItem = require('@theme-original/DocItem').default;

interface Props {
  content?: {
    metadata?: {
      frontMatter?: {
        status?: string;
      };
    };
  };
  [key: string]: any;
}

export default function DocItemWrapper(props: Props): ReactNode {
  // Access metadata through props - this should be available in the content prop
  const isDraft = props.content?.metadata?.frontMatter?.status === 'draft';

  return (
    <>
      {isDraft && (
        <div 
          style={{
            backgroundColor: '#fffb00ff',
            border: '1px solid #e7eb6eff',
            borderRadius: '4px',
            padding: '12px 16px',
            marginBottom: '24px',
            color: '#856404'
          }}
        >
          <strong>🚧 Draft Document</strong>
          <br />
          This documentation is still a <strong>draft</strong> and may change.
        </div>
      )}
      <DocItem {...props} />
    </>
  );
}

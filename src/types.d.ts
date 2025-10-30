declare module '@docusaurus/plugin-content-docs' {
  export interface DocFrontMatter {
    status?: 'draft' | 'review' | 'stable' | 'deprecated';
    lastReviewed?: string;
    owner?: string;
    category?: string;
    tags?: string[];
  }
}

declare module '@docusaurus/plugin-content-docs/client' {
  export interface DocFrontMatter {
    status?: 'draft' | 'review' | 'stable' | 'deprecated';
    lastReviewed?: string;
    owner?: string;
    category?: string;
    tags?: string[];
  }
}

import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo } from 'react';

type Props = {
    contentMarkdown: string;
};

// 1. Rename _MarkdownToHtml to InternalMarkdownToHtml (or similar PascalCase)
const MarkdownToHtmlComponent = ({ contentMarkdown }: Props) => {
    const content = markdownToHtml(contentMarkdown);
    
    // Now React recognizes this is a component, so useEmbeds is allowed!
    useEmbeds({ enabled: true });

    return (
        <div
            className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

// 2. Export the memoized version using the original name
export const MarkdownToHtml = memo(MarkdownToHtmlComponent);
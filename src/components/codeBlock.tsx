"use client"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

/** `language` e' opzionale: i fence senza linguaggio finiscono come `text`. */
export const CodeBlock = ({
    value,
}: {
    value: { code?: string; language?: string }
}) => {
    const { code, language } = value;

    if (!code) return null;

    return (
        <SyntaxHighlighter
            showInlineLineNumbers={true}
            language={language ?? 'text'}
            style={dracula}
            customStyle={{ padding: '1em' }}
        >
            {code}
        </SyntaxHighlighter>
    )
}

"use client"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

/** Nello schema Sanity `code` e `language` sono opzionali: vanno gestiti. */
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

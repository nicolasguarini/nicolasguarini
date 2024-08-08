"use client"
import { PortableTextTypeComponent } from "next-sanity"
import { urlFor } from "../lib/utils"
import { CodeInput } from "@sanity/code-input"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

export const CodeBlock = ({ value }: { value: {code: string, language: string }}) => {
    const {code, language} = value;

    return (
        <SyntaxHighlighter
            showInlineLineNumbers={true}
            language={language}
            style={dracula}
            customStyle={{
                padding: '1em',
              }}
        >{code}</SyntaxHighlighter>

    )
}
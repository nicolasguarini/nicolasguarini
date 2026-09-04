import katex from "katex";

/**
 * Rende i blocchi `latex` di Portable Text lato server con KaTeX.
 * Sostituisce react-latex-next, che era fermo ai peer di React 18.
 */
export const LatexBlock = ({ value }: { value: { body?: string } }) => {
    if (!value?.body) return null;

    const html = katex.renderToString(value.body, {
        displayMode: true,
        throwOnError: false,
        errorColor: "#ef4444",
    });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

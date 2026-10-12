import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';
import { CodeBlock } from './codeBlock';

export default function Markdown({ children }: { children: string }) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm, [remarkMath, { singleDollarTextMath: false }]]}
			rehypePlugins={[rehypeKatex]}
			components={{
				pre: ({ children }) => <>{children}</>,
				code: ({ className, children }) => {
					const text = String(children);
					// Senza classe e senza a-capo e' codice inline; altrimenti e' un fence
					if (!className && !text.includes('\n')) return <code>{children}</code>;
					const language = /language-(\S+)/.exec(className ?? '')?.[1];
					return <CodeBlock value={{ code: text.replace(/\n$/, ''), language }} />;
				},
				img: ({ src, alt }) =>
					typeof src === 'string' ? (
						<Image
							src={src}
							alt={alt ?? ''}
							width={1600}
							height={900}
							sizes="(max-width: 1024px) 100vw, 1024px"
							className="max-w-full h-auto w-auto object-cover"
						/>
					) : null,
			}}
		>
			{children}
		</ReactMarkdown>
	);
}

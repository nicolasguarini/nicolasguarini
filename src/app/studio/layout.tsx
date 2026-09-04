import type { Metadata, Viewport } from 'next'
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from 'next-sanity/studio'

// studioMetadata porta `robots: 'noindex'`: lo Studio non deve finire in SERP
export const metadata: Metadata = {
  ...studioMetadata,
  title: 'Studio | Nicolas Guarini',
}

export const viewport: Viewport = { ...studioViewport }

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import { Geist } from 'next/font/google';

/**
 * Geist self-hostata da Next in woff2 con subsetting e `font-display: swap`.
 * Sostituisce i 9 TTF in public/fonts (1.2 MB, senza swap, di cui 5 mai usati).
 * Solo i 4 pesi effettivamente usati nelle classi Tailwind.
 */
export const geist = Geist({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-geist-sans',
	display: 'swap',
});

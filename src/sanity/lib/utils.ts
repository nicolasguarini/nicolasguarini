import {
	createImageUrlBuilder,
	type ImageUrlBuilder,
	type SanityImageSource,
} from '@sanity/image-url';
import { client } from './client';

const builder: ImageUrlBuilder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
	return builder.image(source);
};

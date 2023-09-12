import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'qtdomht6',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'mpt4qk5n', // Find this in your Sanity project settings
  dataset: 'production', // or the dataset you chose
  useCdn: true // `false` if you want to ensure fresh data
});

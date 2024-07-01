import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'mpt4qk5n', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});

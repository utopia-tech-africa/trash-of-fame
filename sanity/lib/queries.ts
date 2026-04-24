export const blogQuery = `
*[_type == "blog"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  readTime,
  image,
  video,
  externalUrl
}
`;

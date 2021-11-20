import axios from 'axios'

export default async function fetchAndFilterPosts(tags) {
  const postResults = []
  for (const tag of tags) {
    const { data } = await axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`)
    postResults.push(...data.posts)
  }
  const ids = postResults.map(post => post.id)
  return postResults.filter(({ id }, idx) => !ids.includes(id, idx + 1))
}
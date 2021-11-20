export default async function sortByAndList(posts, sortBy = 'id', direction = 'asc') {
  if (direction === 'desc') {
    return posts.sort((a, b) => b[sortBy] - a[sortBy])
  }
  return posts.sort((a, b) => a[sortBy] - b[sortBy])
}
import fetchAndFilterPosts from '../utils/fetchAndFilterPosts.js'
import sortByAndList from '../utils/sortByAndList.js'

export async function pingTest(req, res) {
  try {
    res.send({ success: true })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

export async function getPostsByTag(req, res) {
  const validSortFields = ['id', 'reads', 'likes', 'popularity']
  const validDirectionFields = ['desc', 'asc']

  try {
    if (!req.query.tag) {
      return res.status(400).send({ error: 'Tags parameter is required' })
    }

    if (req.query.sortBy && !validSortFields.includes(req.query.sortBy)) {
      return res.status(400).send({ error: 'sortBy parameter is invalid' })
    }
    
    if (req.query.direction && !validDirectionFields.includes(req.query.direction)) {
      return res.status(400).send({ error: 'direction parameter is invalid' })
    }

    const tags = req.query.tag.split(',')
    const posts = await fetchAndFilterPosts(tags)
    const sortedPosts = await sortByAndList(posts, req.query.sortBy, req.query.direction)
    
    res.send({ posts: sortedPosts })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

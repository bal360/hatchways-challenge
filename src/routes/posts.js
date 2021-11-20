import { getPostsByTag, pingTest } from '../controllers/posts.js'
import express from 'express'

const router = new express.Router()

router.get('/ping', pingTest)

router.get('/posts', getPostsByTag)

export default router
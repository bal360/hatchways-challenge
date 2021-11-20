import express from 'express'
import dotenv from 'dotenv'
import postsRouter from './routes/posts.js'

dotenv.config()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', postsRouter)

export default app
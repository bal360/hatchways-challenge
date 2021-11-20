import request from 'supertest'
import app from '../app.js'

test('should ping api', async () => {
  await request(app)
    .get('/api/ping')
    .send()
    .expect(200)
});

test('Should get all posts when valid tag is provided', async () => {
  await request(app)
    .get('/api/posts/?tag=tech')
    .send()
    .expect(200)
});

test('Should receive error when no tag is provided', async () => {
  await request(app)
    .get('/api/posts?tag')
    .send()
    .expect(400)
})

test('Should get all posts when valid sortBy field is provided', async () => {
  await request(app)
    .get('/api/posts?tag=tech&sortBy=popularity')
    .send()
    .expect(200)
})

test('Should receive error when invalid sortBy field is provided', async () => {
  await request(app)
    .get('/api/posts?tag=tech&sortBy=stuff')
    .send()
    .expect(400)
})

test('Should get all posts when valid direction field is provided', async () => {
  await request(app)
    .get('/api/posts?tag=tech&direction=desc')
    .send()
    .expect(200)
})

test('Should receive error when invalid direction field is provided', async () => {
  await request(app)
    .get('/api/posts?tag=tech&direction=stuff')
    .send()
    .expect(400)
})
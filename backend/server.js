import express from 'express'
import data from './data.js'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const app = express()
const port = process.env.PORT || 8000
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))
app.use('/static', express.static('public'))

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}}`)
})

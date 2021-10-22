import "dotenv/config"
import express from 'express'

import { routes } from './routes'

const app = express()

app.use(routes)

app.listen(process.env.PORT, () => console.log(`[${Date.now()}] 🚀 Running on port: ${process.env.PORT}`))
